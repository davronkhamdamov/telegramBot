const {bot} = require('../core/bot')
const {Composer} = require('telegraf')
const composer= new Composer()

composer.hears('O\'qituvchiga savol berish 👨‍💼️',ctx=> {
    ctx.reply('Qanaqa savolingiz bo\'lsa bemalol so\'rayvering men savolingizni o\'qituvchiga yetkazib qo\'yaman')
    bot.on('text',ctx=>{
        console.log(ctx.message.text)
    })
})


bot.use(composer.middleware())
