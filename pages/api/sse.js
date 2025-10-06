import { readAll } from '../../lib/store'

export default function handler(req, res) {
res.setHeader('Content-Type', 'text/event-stream')
res.setHeader('Cache-Control', 'no-cache')
res.setHeader('Connection', 'keep-alive')
res.flushHeaders()

let lastLen = 0
const send = () => {
try {
const data = readAll().readings || []
if (data.length > lastLen) {
const newItems = data.slice(lastLen)
lastLen = data.length
res.write(`data: ${JSON.stringify(newItems)}\n\n`)
}
} catch (e) {
// ignore
}
}

const interval = setInterval(send, 1500)

req.on('close', () => {
clearInterval(interval)
res.end()
})
}
