const { keyboard } = require('../lib/keyboard')

const isUserActive = async (ctx) => {
    await ctx.reply('Bizning botimiz bajaradigan ishlar 😊', keyboard)
}
module.exports = {
    isUserActive
}