require('dotenv/config')

const admin = process.env.ADMIN
const channel = process.env.CHANNEL
const MONGO_DB_URL = process.env.MONGO_DB_URL
const TOKEN = process.env.TOKEN

module.exports = { admin, channel, MONGO_DB_URL, TOKEN }