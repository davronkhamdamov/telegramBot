const {bot} = require('../core/bot')
const {Composer} = require('telegraf')
const composer= new Composer()

composer.hears('O\'qituvchiga savol berish 👨‍💼️',async ctx=> {
    ctx.reply('Qanaqa savolingiz bo\'lsa bemalol so\'rayvering men savolingizni o\'qituvchiga yetkazib qo\'yaman')
    bot.on('text',ctx=>{
       ctx.replyWithHTML("Savolingiz qabul qilindi tez olada javob olasiz")
    })
})

bot.use(composer.middleware())
