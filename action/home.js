const {bot} = require('../core/bot')
const {Composer} = require('telegraf')

const isUserActive = (ctx) => {
    ctx.reply('Bizning botimizga xush kelibsiz', {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Uyga vazifani topshirish 🗂"
                    }
                ],
                [
                    {
                        text: "O\'qituvchiga savol berish 👨‍💼️"
                    }
                ]
            ],
            resize_keyboard: true
        }
    })
}
module.exports = {
    isUserActive
}