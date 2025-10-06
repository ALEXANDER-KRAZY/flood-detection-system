// Simple JSON file store for PoC. Replace with a DB in production.
import fs from 'fs'
import path from 'path'


const DATA_DIR = path.join(process.cwd(), 'data')
const FILE = path.join(DATA_DIR, 'sensors.json')


function ensure() {
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR)
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, JSON.stringify({ readings: [] }, null, 2))
}


export function readAll() {
ensure()
const raw = fs.readFileSync(FILE, 'utf8')
return JSON.parse(raw)
}


export function appendReading(reading) {
ensure()
const data = readAll()
data.readings.push({ ...reading, receivedAt: new Date().toISOString() })
fs.writeFileSync(FILE, JSON.stringify(data, null, 2))
}


export function clearAll() {
ensure()
fs.writeFileSync(FILE, JSON.stringify({ readings: [] }, null, 2))
}
