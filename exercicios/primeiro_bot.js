const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(cxt => {
    const from = cxt.update.message.from
    console.log(from)
    cxt.reply('Seja bem-vindo, ${from.first_name}!')
})

bot.on('text', async (cxt, next) => {
    await cxt.reply('Mid 1')
    next()
})

bot.on('text', async cxt => {
    await cxt.reply('Mid 2')
})

bot.startPolling()