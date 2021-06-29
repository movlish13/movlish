require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')


bot.command('covid', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, '<b>Covid</b> start boot!!!', {parse_mode: 'HTML'})
})

bot.start((ctx) => {
    ctx.reply('Xush kelibsiz');
    ctx.reply('/start');
})