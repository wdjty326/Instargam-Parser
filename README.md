# Instargam-Parser
## Getting Start
### Package Script
```bash
# development build
npm run build

# production build
npm run publish
```
### Example Code
```javascript
// import library
const { InstagramParser } = require("../dist/instagram-parser");

InstagramParser.shareddata("https://www.instagram.com/p/B__sQ8LFlQn")
	.then((chunk) => console.log(chunk))
	.catch(err => console.log(err));

InstagramParser.oembed("https://www.instagram.com/p/B__sQ8LFlQn")
	.then((chunk) => console.log(chunk))
	.catch(err => console.log(err));
```