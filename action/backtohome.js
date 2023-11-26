const { bot } = require('../core/bot')
const { isUserActive } = require('./home')

bot.hears('🏘 Bosh sahifaga qaytish', ctx => {
    isUserActive(ctx)
})