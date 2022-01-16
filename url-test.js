var url = require("url");

var parseUrl = url.parse("http://www.example.com/profile?name=barry")
console.log(parseUrl.protocol);
console.log(parseUrl.host);
console.log(parseUrl.query);
