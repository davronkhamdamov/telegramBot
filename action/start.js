const { bot } = require('../core/bot')
const { User } = require('../db/user')
const { isUserActive } = require('./home')

bot.start(async ctx => {
    const { first_name, id } = ctx.from
    const getUser = await User.findOne({ user_id: id })
    if (getUser) {
        return isUserActive(ctx)
    }
    await ctx.reply(`Xurmatli ${first_name} bizning botimizga xush kelibsiz`, {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Ro'yxatdan o'tish"
                    },
                    {
                        text: "Adminga yozish ❓"
                    }
                ]
            ],
            resize_keyboard: true
        }
    })
})