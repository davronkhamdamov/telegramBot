const {bot} = require('../core/bot')

const isUserActive = async (ctx) => {
   await ctx.reply('Bizning botimizga xush kelibsiz', {
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
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })
}
module.exports = {
    isUserActive
}