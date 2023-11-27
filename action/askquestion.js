const { channel } = require('../config')
const { bot } = require('../core/bot')
const { keyboard } = require('../lib/keyboard')

bot.hears('O\'qituvchiga savol berish 👨‍💼️', async ctx => {
    ctx.reply('Qanaqa savolingiz bo\'lsa bemalol so\'rayvering men savolingizni o\'qituvchiga yetkazib qo\'yaman', {
        reply_markup: {
            keyboard: [
                [{ text: "🏘 Bosh sahifaga qaytish" }]
            ],
            resize_keyboard: true
        }
    })

    bot.on('text', ctx => {
        ctx.telegram.sendMessage(channel, `Savol @${ctx.from.username} tomonidan yo\'llandi \n\n\n${ctx.message.text}`)
        ctx.replyWithHTML("Savolingiz qabul qilindi tez orada javob olasiz", keyboard)
    })
})
