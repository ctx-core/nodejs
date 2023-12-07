export async function response__ServerResponse__write(response, res) {
	res.writeHead(response.status, response.headers.toJSON())
	await response.body?.pipeTo(new WritableStream({
		write(chunk) {
			res.write(chunk)
		}
	}))
	res.end()
}
