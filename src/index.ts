import axios from "axios";

import {
	InstagramURIException,
	HTMLResourceException,
} from "@Defines/Exception";

class InstagramParser {
	constructor() {}

	/**
	 * 
	 * @param uri 입력받은 URI
	 */
	public static parse(uri: string) {
		uri = uri.substr(0, uri.indexOf("?")-1);

		const regex = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/p\/([A-Za-z0-9-_\.]+)/im;
		if (regex.test(uri)) {
			return new Infomation(uri);
		}
		else new InstagramURIException(InstagramURIException.UNSUPPORTED_TYPE);
	}
}

/** 파싱하는 인스타그램 데이터 입니다. */
class Infomation {
	/**
	 * 인스타그램 URI 정보입니다.
	 */
	public readonly uri!: string;

	/**
	 * 가져오는 게시물의 uid 값입니다.
	 */
	public readonly uid!: string;

	private sharedData: object | null = null;

	private itionalData: object | null = null;

	constructor(uri: string) {
		this.uri = uri;
		this.uid = uri.substr(uri.lastIndexOf("/"));

		this.pageSource().then((source) => {
			source = source.replace(/(\s|\n|\r)/gi, "");

			try {
				let sharedData = source.substr(source.indexOf("window._sharedData") + "window._sharedData".length + 1);
				sharedData = sharedData.substr(0, sharedData.indexOf("</script>") - 1);
				this.sharedData = JSON.parse(sharedData);
				
				let itionalData = source.substr(
					source.indexOf(`window.__additionalDataLoaded('/p/${this.uid}/',`) + `window.__additionalDataLoaded('/p/${this.uid}/',`.length
				);
				itionalData = itionalData.substr(0, itionalData.indexOf("</script>") - 1);
				this.itionalData = JSON.parse(itionalData);	
			} catch (e) {
				throw new Error(e);
			}
		}).catch((e) => {
			throw new Error(e);
		});
	}

	/** URI 페이지의 소스를 가져옵니다. */
	public pageSource() {
		return new Promise<string>((resolve, reject) => {
			axios.get(this.uri, {
				method: "GET",
				headers: {
					"Content-Type": "text/html; charset=utf-8"
				}
			}).then((resp) => {
				if (resp.status === 200) resolve(resp.data as string);
				else reject(new HTMLResourceException(HTMLResourceException.UNSUPPORTED_TYPE));

			}).catch((reason) => {
				reject(new Error(reason));
			});
		})
	}

	public getSharedData() {
		return this.sharedData;
	}

	public getItionalData() {
		return this.itionalData;
	}
}

export default InstagramParser;