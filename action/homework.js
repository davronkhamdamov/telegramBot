const { bot } = require('../core/bot')
const { channel } = require('../config')
const { User } = require('../db/user')
const { isUserActive } = require('./home')

bot.hears('Uyga vazifani topshirish 🗂', async ctx => {
   await ctx.reply("Uyga vazifani tashlash namunasi:")
   await ctx.replyWithDocument('BQACAgIAAx0Cb9TkSAADUmVh1E9U2dBjojDqfcn5a9_-2w-LAAJtOQAC0H4IS8ZdpDwSx-86MwQ',
      {
         caption: "Home work 6-lesson",
         reply_markup: {
            keyboard: [
               [{ text: "🏘 Bosh sahifaga qaytish" }]
            ],
            resize_keyboard: true
         }
      })
   bot.hears('🏘 Bosh sahifaga qaytish', ctx => {
      isUserActive(ctx)
   })
   bot.on('document', async ctx => {
      const user = await User.findOne({ user_id: ctx.from.id })
      bot.telegram.sendDocument(channel, ctx.message.document.file_id,
         {
            caption: user.first_name
         })
   })
})
