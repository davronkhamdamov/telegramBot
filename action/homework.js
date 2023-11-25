const {bot} = require('../core/bot')
const {Composer} = require('telegraf')
const composer = new Composer()
const {channel}= require('../config')
composer.hears('Uyga vazifani topshirish 🗂',async ctx=>{
   await ctx.reply("Uyga vazifani tashlash namunasi:")
   await ctx.replyWithDocument('BQACAgIAAx0Cb9TkSAADUmVh1E9U2dBjojDqfcn5a9_-2w-LAAJtOQAC0H4IS8ZdpDwSx-86MwQ',
       {
          caption: "Home work 6-lesson"
       })
   await bot.on('document',ctx=>{
         bot.telegram.sendDocument(channel, ctx.message.document.file_id,
             {
                caption: ctx.message.document.caption
             })
   })
})

bot.use(composer.middleware())