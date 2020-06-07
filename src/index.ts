import https from "https";

/**
 * URI 페이지의 소스를 가져옵니다.
 * @param uri 인스타그램 URI 입니다.
 */
function getSource(uri: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const client = https.get(uri, {
			headers: {
				"Content-Type": "text/html; charset=utf-8"
			},
			timeout: 8000
		}, (res) => {
			// 301 Redirect 가 발생하면 headers.location 으로 재요청합니다.
			if (res.statusCode === 301) {
				getSource(res.headers.location as string)
					.then((body) => resolve(body))
					.catch((err) => reject(err));
				return;
			}
			res.setEncoding("utf8");

			let body: string = "";
			res.on("data", (chunk) => {
				body += chunk;
			});
			res.on("end", () => {
				resolve(body);
			});
			res.on("error", (err) => {
				reject(new Error(res.statusMessage));
			});
		}).on("error", (err) => {
			client.abort();
			reject(err);
		}).on("timeout", () => {
			client.abort();
			reject();
		});
	});
}

/**
 * 인스타그램 정보를 가져옵니다.
 * @param uri 인스타그램 URI 정보입니다.
 */
export function parse(uri: string): Promise<object> {
	return new Promise((resolve, reject) => {
		uri = uri.substr(0, uri.indexOf("?")-1);
		const regex = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/p\/([A-Za-z0-9-_\.]+)/im;
		if (regex.test(uri)) {
			getSource(uri).then((chunk) => {
				chunk = chunk.replace(/(\s|\n|\r)/gi, "");
				let sharedData = chunk.substr(chunk.indexOf("window._sharedData") + "window._sharedData".length + 1);
				sharedData = sharedData.substr(0, sharedData.indexOf("</script>") - 1);
				resolve(JSON.parse(sharedData) as object);
			}).catch((err) => {
				reject(err);
			});	
		}
		else {
			reject(new Error("only Instagram URI"));
		}
	});
}