const { bot } = require('../core/bot')
const { User } = require('../db/user')

bot.command('settings', async ctx => {
    const user_id = ctx.from.id
    const user = await User.findOne({ user_id })
    if (user) {
        ctx.replyWithHTML(`Hammasi tog'rimi:\n\nFoydalanuvchi ma'lumotlari 👤\nO'quvchi 🎓: ${user.first_name}\nTelefon raqami 📞: +${user.phone_number}\nGuruh 📊: G1\nUsername ${'@' + user.username}`, {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "O'quvchi ismini o'zgartirish ✏️"
                        }
                    ],
                ],
                resize_keyboard: true
            }
        })
    } else {
        ctx.replyWithHTML("Siz ro\'yxatdan o\'tmaganga o\'xshaysiz\nIltimos ro\'yxatdan o\'tish uchun /start ni bosing")
    }
})

bot.hears('O\'quvchi ismini o\'zgartirish ✏️', ctx => {
    ctx.replyWithHTML("Ism Familyangizni kiriting", { reply_markup: { remove_keyboard: true } })
})