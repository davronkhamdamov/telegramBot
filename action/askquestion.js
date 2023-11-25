const { bot } = require('../core/bot')
const { isUserActive } = require('./home')

bot.hears('O\'qituvchiga savol berish 👨‍💼️', async ctx => {
    ctx.reply('Qanaqa savolingiz bo\'lsa bemalol so\'rayvering men savolingizni o\'qituvchiga yetkazib qo\'yaman', {
        reply_markup: {
            keyboard: [
                [{ text: "🏘 Bosh sahifaga qaytish" }]
            ],
            resize_keyboard: true
        }
    })
    bot.hears('🏘 Bosh sahifaga qaytish', ctx => {
        isUserActive(ctx)
    })
    bot.on('text', ctx => {
        ctx.replyWithHTML("Savolingiz qabul qilindi tez olada javob olasiz")
    })
})
