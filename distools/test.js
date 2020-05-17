const InstagramParser = require("./test/instagram-parser").default;

InstagramParser.parse("https://www.instagram.com/p/B__sQ8LFlQn/?utm_source=ig_web_copy_link").then((e) => {
	console.log(e);
}).catch((e) => {
	console.log(e);
});