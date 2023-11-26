const { bot } = require('../core/bot')
const { channel } = require('../config')
const { User } = require('../db/user')
const { Markup } = require('telegraf')
const keyboardToHomepage = require('../lib/keyboard')
const keyboard = Markup.inlineKeyboard([
   Markup.button.callback('Ha ✅', 'yes'),
   Markup.button.callback('Yo\'q ❌', 'no')
])

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

   bot.on('document', async ctx => {
      const user = await User.findOne({ user_id: ctx.from.id })
      const file_id = ctx.message.document.file_id
      await ctx.reply('Jo\'natmoqchi bo\'lgan ma\'lumotlaringiz to\'g\'rimi:')
      await ctx.replyWithDocument(file_id, keyboard, {
         caption: 'Home work 6-lesson' + " done by" + ` ${user.first_name}`,
      })
      bot.action('yes', ctx => {
         bot.telegram.sendDocument(channel, file_id,
            {
               caption: user.first_name
            })
         ctx.reply("Jo\'natgan uyga vazifangiz o\'qituvchiga yetkazildi ✅", keyboardToHomepage.keyboard)
      })
      bot.action('no', ctx => {
         return ctx.reply("Qaytadan urinib ko\'ring")
      })
   })
})
