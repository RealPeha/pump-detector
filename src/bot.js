const { Telegraf } = require('telegraf')

const PumpDetector = require('./PumpDetector')

const bot = new Telegraf(process.env.BOT_TOKEN)

new PumpDetector(bot.telegram)

bot.catch(err => console.log('GLOBAL ERROR', err))

module.exports = bot
