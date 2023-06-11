
var http = require("http")//inserts the http package
var fs = require('fs')

const host = 'localhost'
const port = 8000

fs.readFile('./index.html', (err, html) => {
	if (err) throw err

	http.createServer((request, response) => {
		response.writeHeader(200, {"Content-Type": "text/html"})
		response.write(html)
		response.end()
	}).listen(port)
})
