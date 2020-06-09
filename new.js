console.log("Hello World")
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var text = 'https://en.wikipedia.org/wiki/Bear'
const spawn = require('child_process').spawn;

const process = spawn('python', ['./summarizer.py']);

process.stdout.on('data', data=> {
    console.log(data.toString());
});
