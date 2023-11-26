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
        ctx.telegram.sendMessage(channel, `Savol tomonidan yo\'llandi: @${ctx.from.username}\n\nSavol:\n${ctx.message.text}`)
        ctx.replyWithHTML("Savolingiz qabul qilindi tez olada javob olasiz", keyboard)
    })
})
