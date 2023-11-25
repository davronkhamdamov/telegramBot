const {bot}= require('../core/bot')
const {Composer} = require('telegraf')
const composer = new Composer()
const {isUserActive} = require('./home')
composer.on('contact',async ctx=>{
   await ctx.replyWithHTML('Muvaffaqiyatli ro\'yxatdan o\'tgangiz bilan tabriklayman 🥳')
    isUserActive(ctx)
})

bot.use(composer.middleware())