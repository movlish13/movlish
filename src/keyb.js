require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')

// bot.onText(/\/start/, msg => {
//     sendStarMessage(ctx);
// })



bot.command(['start', 'START', 'Start'], ctx => {
    sendStarMessage(ctx);
})

bot.action('start', ctx => {
    ctx.deleteMessage();
    sendStarMessage(ctx);
})

function sendStarMessage(ctx) {
    
//     ctx.deleteMessage();

//     let startMessage = `Xush kelibsiz aziz mehmon! \nSiz bu yerda ШНК (SHNQ Shaharsozlik Norma va Qoidalari) bilan tanishasiz\n/star va /help buyrug'laridan foydalanishingiz mumkin!\nIltimos buruqlarni kirilchada yozing (asosan ruscha) Masalan: шнк, штукатурка, двер ...`;
//     bot.telegram.sendMessage(ctx.chat.id, startMessage,
    ctx.replyWithHTML((`<B>O'ZBEKISTON RESPUBLIKASI QURILISH VAZIRLIGI </B>\n (<b>ШНК</b> - SHaharsozlik Norma va Qoidalar)\n(<b>КМК</b> - Qurilish Me'yorlari va Qoidalari)\n<a href="https://mc.uz/gradostroitelnye-normy/">Shaharsozlik normalari</a> bilan tanishing`),
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Нормативные и руководящие документы", callback_data: 'one' }
                    ],
                    [
                        { text: "Подсистема №1. Организационно - методические нормы", callback_data: 'two' }
                    ],
                    [
                        { text: "Подсистема №2. Технические нормы проектирования", callback_data: 'three' }
                    ],
                    [
                        { text: "Подсистема №3. Правила организации и технология строительного производства", callback_data: 'four' }
                    ],
                    [
                        { text: "Подсистема №4. Экономические нормативы", callback_data: 'five' }
                    ],
                    [
                        { text: "Сборники сметных норм на пусконалодочные работы", callback_data: 'six' }
                    ],
                    [
                        { text: "Дополнение к ШНК", callback_data: 'seven' }
                    ]
                ]
            }
        }
    )
}
