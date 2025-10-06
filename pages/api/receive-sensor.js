// pages/api/receive-sensor.js
import { updateSensorData } from './status-by-country'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { country, level } = req.body
  if (!country || typeof level !== "number") {
    return res.status(400).json({ error: "Invalid payload" })
  }

  updateSensorData(country, level)
  res.json({ message: `Updated ${country} to ${level}m` })
}
