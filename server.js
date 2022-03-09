import http from 'http'
import fs from 'fs'

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
	const { url } = req
	console.log(url)
	switch (url) {
		case '/':
			res.statusCode = 200
			res.setHeader('Content-Type', 'text/html; charset=UTF-8')
			const _file = fs.readFileSync('index.html')
			res.write(_file.toString())
			break
		default:
			res.statusCode = 404
			res.setHeader('Content-Type', 'text/plain')
			res.write('HTTP 404 Not Found')
			break
	}
	res.end()
})

server.listen(port, host, () => { console.log(`Server running at http://${host}:${port}/`) })