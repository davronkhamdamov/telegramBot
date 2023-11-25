const { Telegraf } = require('telegraf')
const { MONGO_DB_URL, TOKEN } = require('../config')
const bot = new Telegraf(TOKEN)
const mongoose = require('mongoose')

mongoose.connect(MONGO_DB_URL).then(() => {
    console.log('Connected')
}).catch(err => {
    console.log(err)
})

bot.launch().then()


module.exports = { bot }