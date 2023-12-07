import { Readable } from 'stream'
export function IncomingMessage__request_(req) {
	const headers = new Headers()
	for (let key in req.headers) {
		if (req.headers[key]) headers.append(key, req.headers[key])
	}
	return new Request(
		new URL(req.url, `http${req.socket.encrypted ? 's' : ''}://${req.headers.host}`).toString(), {
			method: req.method,
			body: req.method === 'POST' ? Readable.toWeb(req) : null,
			headers,
		})
}
