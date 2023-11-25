const {bot} = require('../core/bot')
const {Composer, Markup} = require("telegraf");
const composer = new Composer()

composer.start(ctx => {
    ctx.reply(`Xurmatli ${ctx.from.first_name} bizning botimizga xush kelibsiz`, {
        reply_markup: {
            keyboard: [
                [
                    {
                        text:"Ro'yxatdan o'tish"
                    },
                    {
                        text:"Adminga yozish ❓"
                    }
                ]
            ],
            resize_keyboard: true
        }
    })
})
composer.hears('Ro\'yxatdan o\'tish',ctx=>{
    ctx.reply('Ro\'yxatdan o\'tish uchun telefon raqamingizni jo\'nating 📤',{
        reply_markup:{
            keyboard: [
                [
                    {
                        text: 'Telefon raqamni jo\'natish 📱',
                        request_contact: true
                    }
                ]
            ],
            resize_keyboard: true,
        }
    })
})

bot.use(composer.middleware())