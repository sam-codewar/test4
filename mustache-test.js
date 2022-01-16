
var Mustache = require("mustache");
var result = Mustache.render("Hello {{first}} {{last}}!", {
    first: "Samuel",
    last: "Oyeniran"
});
console.log(result);
