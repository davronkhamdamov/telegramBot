const isUserActive = async (ctx) => {
    await ctx.reply('Bizning botimizda kelganizdan xursandman 😊', {
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