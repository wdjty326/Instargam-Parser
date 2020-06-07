const { InstagramParser } = require("../dist/instagram-parser");

InstagramParser.parse("https://www.instagram.com/p/B__sQ8LFlQn")
	.then((chunk) => console.log(chunk))
	.catch(err => console.log(err));
