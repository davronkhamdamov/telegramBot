const {bot} = require('../core/bot')
const {Composer} = require("telegraf");
const {messages} = require("../lib/message");
const composer = new Composer()

composer.start(ctx => {
    ctx.replyWithHTML(messages['start'])
})
composer.action('help', ctx => {
    const data = ctx.update.callback_query.message
    ctx.telegram.editMessageText(data.chat.id, data.message_id, '', 'Hello').then()
})


bot.use(composer.middleware())