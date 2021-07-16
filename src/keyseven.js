require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')


bot.action('seven', ctx => {

    ctx.deleteMessage();

    let text35 = `<b>Дополнение к ШНК</b>
    
    <u>Дополнение №1</u>	Утвержден Приказом Госархитектстроя РУз от 02.10.06г. №44.	<a href="https://mc.uz/wp-content/up/ce/RP5OX4KKnF0VoiW5AWloYUTAvCM4Sf.rar">Скачать (RUS)</a>
    <u>Дополнение №2</u>	Утвержден Приказом Госархитектстроя РУз от 25.12.06г. №78	<a href="https://mc.uz/wp-content/up/bo/1huWKqBEbxMubVUj448JJSuba3Cg15.rar">Скачать (RUS)</a>
    <u>Дополнение №3</u>	Утвержден Приказом Госархитектстроя РУз от 26.12.07г. №126 <a href="https://mc.uz/wp-content/up/tW/0e5o4ILEPEe6vAgCvj0nn3Tez92tpo.rar">Скачать (RUS)</a>
    <u>Дополнение №4</u>	Утвержден Приказом Госархитектстроя РУз от 09.07.08г. №67.	<a href="https://mc.uz/wp-content/up/b9/fJscmnVIt7UJxkSn0cHTA92wGIj0re.rar">Скачать (RUS)</a>
    <u>Дополнение №5</u>	Утвержден Приказом Госархитектстроя РУз от 27.10.2009г. №107	<a href="https://mc.uz/wp-content/up/Od/vTLswwsFk60MSFqOwBf5LkApaEVxvL.rar">Скачать (RUS)</a>
    <u>Дополнение №6</u>	Утвержден Приказом Госархитектстроя РУз от 25.07.2011г. №47	<a href="https://mc.uz/wp-content/up/xJ/inVKKVD4EqaF3y1PBrL90zKdogdlcM.rar">Скачать (RUS)</a>
    <u>Дополнение №7</u>	Утвержден Приказом Госархитектстроя РУз от 28.08.2012г. №72	<a href="https://mc.uz/wp-content/up/Bt/exptLF8vlMbsR29NBex4Rra4Zd4iRR.rar">Скачать (RUS)</a>
    <u>Дополнение №8</u>	Утвержден Приказом Госархитектстроя РУз от 29.12.2014г. №137	<a href="https://mc.uz/wp-content/up/h1/h3N4gIDwMpFKmhtdek7kaBoK9ZwFjW.rar">Скачать (RUS)</a>
    <u>Дополнение №9</u>	Утвержден Приказом Госархитектстроя Руз от 16.10.2015г. №145	<a href="https://mc.uz/wp-content/up/GP/R9z9i6VPgLkuBHfAijqsqPdF39u8MU.rar">Скачать (RUS)</a>
    <u>Дополнение №10</u>	Утвержден Приказом Госархитектстроя РУз от 02.05.2016г. №57	<a href="https://mc.uz/wp-content/up/3f/D7Q8okSRpTac4LpxLFZky8CRwHPPoG.rar">Скачать (RUS)</a>
    <u>Дополнение №11</u>  <a href="https://t.me/shnkuz/10">Скачать  Дополнение №11</a>
    <u>Дополнение №12</u>  <a href="https://t.me/shnkuz/11">Скачать  Дополнение №12</a>
    <u>Дополнение №13</u>  <a href="https://t.me/shnkuz/12">Скачать  Дополнение №13</a>
    `;
    ctx.replyWithHTML(text35,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})
