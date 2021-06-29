require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')


bot.action('five', ctx => {
    let priceMessage = 'Подсистема №4. Экономические нормативы';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Группа 01", callback_data: 'bir3' },
                        { text: "Группа 02(1)", callback_data: 'ikki31' }
                    ],
                    [
                        { text: "Группа 02(2)", callback_data: 'ikki32' },
                        { text: "Группа 02(3)", callback_data: 'ikki33' }
                    ],
                    [
                        { text: "Группа 03", callback_data: 'uch3' },
                        { text: "Группа 13", callback_data: 'tort3' }
                    ],
                    [
                        { text: "Группа 17", callback_data: 'besh3' },
                        { text: "Норма затрат материльных и трудовых ресурсов", callback_data: 'olti3' }
                    ],
                    [
                        { text: "Объекты административного назначения", callback_data: 'yetti3' },
                        { text: "Объекты бытового бслуживания", callback_data: 'sakkiz3' }
                    ],
                    [
                        { text: "Объекты коммунального назначения", callback_data: 'toqqiz3' },
                        { text: "Объекты културно-просветительного назначения", callback_data: 'on3' }
                    ],
                    [
                        { text: "Объекты торговли и общественного питания", callback_data: 'onbir3' },
                        { text: "Объекты транспортного назначения", callback_data: 'onikki3' }
                    ],
                    [
                        { text: "Объекты учебных заведений", callback_data: 'onuch3' },
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('bir3', ctx => {

    ctx.deleteMessage();
    let text20 = `<b>Группа 01. Организационно-методические документы</b>
    
    <u>ШНК 4.01.01-04</u>	Система ресурсных сметных нормативных документов для ценообразования в строительстве	<a href="https://mc.uz/wp-content/up/G2/D5qjoBtvThoPQJhJM9rQYCRpWgRxYN.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 4.01.16-09</u>	Правила по определению договорной стоимости строительства в текущих ценах	<a href="https://mc.uz/wp-content/up/jM/KNFzC8yEXb1jZDZToE5RMwQcr7h7nv.rar">Скачать (RUS/UZB)</a>`;
    ctx.replyWithHTML(text20,  
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('ikki33', ctx => {

    ctx.deleteMessage();
     let text21 = `<b>3 Лист</b>
     <b>Группа 02. Сборники ресурсных элементных сметных норм на строительные работы и ремонтно-строительные работы</b> \n` +
    
    // <u>ШНК 4.02.00-04</u>	Общие положения по разработке и применению ресурсных сметных норм на строительные работы	<a href="https://mc.uz/wp-content/up/Kf/IpJfN8Dqjh1YVU2jfWTnBt4hSQum4H.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.01-04</u>	Земляные работы	<a href="https://mc.uz/wp-content/up/a6/q9Nl8feeYASW2ZTroJWgrTB0E3hkhp.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.02-04</u>	Горновскрышные работы	<a href="https://mc.uz/wp-content/up/nC/hr8zAx2yBGVO45gioas7CYJY5OIpVt.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.03-04</u>	Буровзрывные работы	<a href="https://mc.uz/wp-content/up/ux/W8a4QNnhUhEfHbOBe3zBe7T16zhoQT.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.04-04</u>	Скважины	<a href="https://mc.uz/wp-content/up/Qa/MlmYyNrQ1673EBlbcQUMPCWv56AzIV.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.05-04</u>	Свайные работы. Опускные колодцы. Закрепление грунтов	<a href="https://mc.uz/wp-content/up/Rb/1YQtf6xXO8CISPeGLCVz0G59fgyN5f.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.06-04</u>	Бетонные и железобетонные конструкции монолитные	<a href="https://mc.uz/wp-content/up/fC/qgQycWPFbq31nyQHCwn3tNAbnngY0j.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.07-05</u>	Бетонные и железобетонные конструкции сборные	<a href="https://mc.uz/wp-content/up/uB/aUZxkixvACM9zT4OU2cEWN9EsMZobp.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.08-04</u>	Конструкции из кирпича и блоков	<a href="https://mc.uz/wp-content/up/Om/PBrQENY1FcNbHEF7lMkeOKzdjj6WB5.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.09-04</u>	Металлические конструкции	<a href="https://mc.uz/wp-content/up/OQ/YLGtCgUCZoOp3xxnDj2OKSvzXh8AIJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.10-04</u>	Деревянные конструкции	<a href="https://mc.uz/wp-content/up/d4/Q2XA2IaXPMQORYLcavIRERIYQwhLTv.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.11-04</u>	Полы	<a href="https://mc.uz/wp-content/up/aN/gonKOgtuFQJbmlkSWm5bFPVKITdw1c.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.12-04</u>	Кровли	<a href="https://mc.uz/wp-content/up/T3/wW4560QLDUxWjci2zbfqJ4qlgGnd51.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.13-04</u>	Защита строительных конструкций и оборудования от коррозии	<a href="https://mc.uz/wp-content/up/pE/8jfHayjRMkqmTfZ07CVgeQRdb6TNVx.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.14-05</u>	Конструкции в сельском строительстве	<a href="https://mc.uz/wp-content/up/id/KgjYQROUZJN5S5r2KierqkGtodF4VG.rar">Скачать (RUS/UZB)</a>
    // <u>ШНК 4.02.15-04</u>	Отделочные работы	<a href="https://mc.uz/wp-content/up/Ji/z4iKHYPrz0tErs3iVXsVbPLIjntosn.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.16-07</u>	Трубопроводы внутренние	<a href="https://mc.uz/wp-content/up/nK/28G4qdrBZTfoi3OTLJgYnUdEiha8mu.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.17-07</u>	Водопровод и канализация. Внутренние устройства	<a href="https://mc.uz/wp-content/up/JF/UPuqFsRuBkvUyIe8KAPSpHRD071OjQ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.18-07</u>	Отопление. Внутренние устройства	<a href="https://mc.uz/wp-content/up/3j/bX1fMbTExX83oeVvkaoadI9blCNgUs.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.19-07</u>	Газоснабжение- внутренние устройства	<a href="https://mc.uz/wp-content/up/1S/E7HkRIXvElbbcz80frS0Z4smEmqCCq.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.20-07</u>	Вентиляция и кондиционирование воздуха	<a href="https://mc.uz/wp-content/up/VW/5JomlzNzxya9AweZoFvYwSxsRw9J6P.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.21-07</u>	Временные сборно-разборные здания и сооружения	<a href="https://mc.uz/wp-content/up/OV/u8qCMhHaOleCCUYf0x2XaZmDAHtBnJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.22-05</u>	Водопровод-наружные сети	<a href="https://mc.uz/wp-content/up/Gl/9d14DeNRgSAL4uR4H1Pz5J5qLIOXKi.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.23-05</u>	Канализация-наружные сети	<a href="https://mc.uz/wp-content/up/IY/7gKkEyuQCjFOJ9NMVXfM4IthwT9grc.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.24-04</u>	Теплоснабжение и газопроводы-наружные сети	<a href="https://mc.uz/wp-content/up/hU/RZaGHVirzVE6Pmw3bZtu94l26NcpuA.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.25-07</u>	Магистральные трубопроводы газонефтепродуктов	<a href="https://mc.uz/wp-content/up/g6/0QW9EYFlsls7xcVg0S2BEBLTZIIKTC.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.26-07</u>	Теплоизоляционные работы	<a href="https://mc.uz/wp-content/up/g2/xhdHyovV4VlSfMhcZeS7JDOVMJmL8R.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.27-05</u>	Автомобильные дороги	<a href="https://mc.uz/wp-content/up/nv/URVdDKXQ7IGOPKvnkbkf8A1KDFCW9M.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.28-04</u>	Железные дороги	<a href="https://mc.uz/wp-content/up/kJ/NaQ6TZQI5Bo9NTRtgFmV1Sew1rOWsJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.29-04</u>	Тоннели и метрополитены кн. 1, кн. 2.	<a href="https://mc.uz/wp-content/up/Za/GbaFhhY7KGmLdEszRvG07Q1X8QvIOD.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.30-04</u>	Мосты и трубы	<a href="https://mc.uz/wp-content/up/vX/dnHewgIc9rKlY2TH7guICIHrU33gM6.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.31-04</u>	Аэродромы	<a href="https://mc.uz/wp-content/up/lI/mdOPjN24alwZdO83s2rI3QFto5jszZ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.32-07</u>	Трамвайные пути	<a href="https://mc.uz/wp-content/up/Rc/MJnuszPMmZWUe3uBEKYUdEpYfkqCBp.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.33-04</u>	Линии электропередачи. Книга 1,2	<a href="https://mc.uz/wp-content/up/tG/7FEcQ3LEnkUHgS0X95BtYqicaJPRq0.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.34-04</u>	Сооружения связи, радиовещания и телевидения	<a href="https://mc.uz/wp-content/up/4i/O7tynKD7FQkVxRKr1ir5Kbb7LbG5wD.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.35-06</u>	Горнопроходческие работы. Книга 1	<a href="https://mc.uz/wp-content/up/P0/oLN1iZK7f7IuEBOoq5Z4JKV2mvYJlJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.36-04</u>	ЗЕМЛЯНЫЕ КОНСТРУКЦИИ ГИДРОТЕХНИЧЕСКИХ СООРУЖЕНИЙ	<i>Файлов нет</i>
    // <u>ШНК 4.02.37-05</u>	Бетонные и железобетонные конструкции гидротехнических сооружений	<i>Файлов нет</i>
    // <u>ШНК 4.02.39-06</u>	Металлические конструкции гидротехнических сооружений	<a href="https://mc.uz/wp-content/up/in/PurLvHzMJGA4qdOWlF4T7azYvV3BpQ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.41-06</u>	Гидроизоляционные работы в гидротехнических сооружениях	<a href="https://mc.uz/wp-content/up/mo/fvuU73Tad3Gy4h6bbKTNrORHOCUeYQ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.42-04</u>	Берегоукрепительные работы	<a href="https://mc.uz/wp-content/up/M8/nstjNU1YPtKe26TaB3Syrj5Wa7wvHl.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.45-04</u>	ПРОМЫШЛЕННЫЕ ПЕЧИ И ТРУБЫ	<i>Файлов нет</i>
    // <u>ШНК 4.02.46-04</u>	Работы по реконструкции зданий и сооружений	<a href="https://mc.uz/wp-content/up/mO/BgD4NvltvABfe5UqSTP1TL33Nm7EZ4.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.47-04</u>	Озеленение. Лесонасаждения. Многолетние плодовые насаждения	<a href="https://mc.uz/wp-content/up/lW/pGF0dkvfcVEgEyTus2RSBGsJNZ0Gy0.rar">Скачать (RUS)</a>
    `<u>ШНК 4.02.51-07</u>	Земляные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/57/kz7z9ycngvjshOUQoggHRGqxRBKbZo.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.52-05</u>	Фундаменты. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/q1/yZZHN4C1Pb14YpOVXW42oMXZQAz0Iw.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.53-07</u>	Стены. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/0v/jp0cGa3z0yDr4JzgovsuyMty0ne67V.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.54-07</u>	Перекрытия. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/tT/l5fKVp5b1gWTvMeZMFVIaa9Yr1MlRC.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.55-05</u>	Перегородки. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/1O/ClruE5CEPvPhsRWk6ZzzhWZT3o3jHQ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.56-07</u>	Проемы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/9L/2w4Qm0TSZ0KuUiuzQ5vpyEZE5WKHhL.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.57-07</u>	Полы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/d5/DZR4FXCsqP2wYzkE8b9jXkxIY0YhvJ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.58-07</u>	Крыши, кровли. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/j4/MVTmRQRp5GN6VjTBmA6ir3VCVehRp6.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.59-07</u>	Лестницы, крыльца. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/Qo/taqvoly0iUFHP1KgivPJQLc69aQ2HD.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.60-07</u>	Печные работы	<a href="https://mc.uz/wp-content/up/Em/UPISkywE5GpkKbbyd7U0dGU8A1KSkB.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.61-07</u>	Штукатурные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/ht/Nae671LWQtoH8JCgZy2wpUKCgo17OY.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.62-07</u>	Малярные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/4p/9K7Qk2KEXdEzkV7PeT0g8FikpFXZWi.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.63-07</u>	Стекольные, обойные и облицовочные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/BP/8mDMMb2pz6eawfGlCWN695kcMBVLq0.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.64-07</u>	Лепные работы. Ремонтно-строительные работы	
    <u>ШНК 4.02.65-07</u>	Внутренние санитарно-технические работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/p7/6uT2oRZaVDMTUtwOIlk31aSP14pq1Y.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.66-07</u>	Наружные инженерные сети. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/wi/0faK01hQY0dn21DTMB5LqCxbbUbyYq.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.67-07</u>	Электромонтажные работы. Ремонтно-строительные работы	
    <u>ШНК 4.02.68-07</u>	Благоустройство. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/kf/jMIMM9VwohxcFRb4DXHoGiBNoIKSLM.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.69-07</u>	Прочие ремонтно-строительные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/YN/nQaI0t7izXY4dgxVD65C3nODd1WdBC.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.70-05</u>	Общие положения по применению элементных сметных ресурсных норм на ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/bM/FXVqPAhFlx3Fd1btVqPnZo3wlZXRrr.rar">Скачать (UZB)</a>
    <u>ШНК 4.04.06-14</u>	Сборник ресурсных сметных норм на перевозку грузов для строительства	<a href="https://mc.uz/wp-content/up/cs/rlLz48iDqJTRWHTYxFUVqlgsLJRIwE.rar">Скачать (UZB)</a>`;

    ctx.replyWithHTML(text21,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('ikki31', ctx => {

    ctx.deleteMessage();
    let text21 = `<b>Группа 02. Сборники ресурсных элементных сметных норм на строительные работы и ремонтно-строительные работы</b>
    
    <u>ШНК 4.02.00-04</u>	Общие положения по разработке и применению ресурсных сметных норм на строительные работы	<a href="https://mc.uz/wp-content/up/Kf/IpJfN8Dqjh1YVU2jfWTnBt4hSQum4H.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.01-04</u>	Земляные работы	<a href="https://mc.uz/wp-content/up/a6/q9Nl8feeYASW2ZTroJWgrTB0E3hkhp.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.02-04</u>	Горновскрышные работы	<a href="https://mc.uz/wp-content/up/nC/hr8zAx2yBGVO45gioas7CYJY5OIpVt.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.03-04</u>	Буровзрывные работы	<a href="https://mc.uz/wp-content/up/ux/W8a4QNnhUhEfHbOBe3zBe7T16zhoQT.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.04-04</u>	Скважины	<a href="https://mc.uz/wp-content/up/Qa/MlmYyNrQ1673EBlbcQUMPCWv56AzIV.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.05-04</u>	Свайные работы. Опускные колодцы. Закрепление грунтов	<a href="https://mc.uz/wp-content/up/Rb/1YQtf6xXO8CISPeGLCVz0G59fgyN5f.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.06-04</u>	Бетонные и железобетонные конструкции монолитные	<a href="https://mc.uz/wp-content/up/fC/qgQycWPFbq31nyQHCwn3tNAbnngY0j.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.07-05</u>	Бетонные и железобетонные конструкции сборные	<a href="https://mc.uz/wp-content/up/uB/aUZxkixvACM9zT4OU2cEWN9EsMZobp.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.08-04</u>	Конструкции из кирпича и блоков	<a href="https://mc.uz/wp-content/up/Om/PBrQENY1FcNbHEF7lMkeOKzdjj6WB5.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.09-04</u>	Металлические конструкции	<a href="https://mc.uz/wp-content/up/OQ/YLGtCgUCZoOp3xxnDj2OKSvzXh8AIJ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.10-04</u>	Деревянные конструкции	<a href="https://mc.uz/wp-content/up/d4/Q2XA2IaXPMQORYLcavIRERIYQwhLTv.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.11-04</u>	Полы	<a href="https://mc.uz/wp-content/up/aN/gonKOgtuFQJbmlkSWm5bFPVKITdw1c.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.12-04</u>	Кровли	<a href="https://mc.uz/wp-content/up/T3/wW4560QLDUxWjci2zbfqJ4qlgGnd51.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.13-04</u>	Защита строительных конструкций и оборудования от коррозии	<a href="https://mc.uz/wp-content/up/pE/8jfHayjRMkqmTfZ07CVgeQRdb6TNVx.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.14-05</u>	Конструкции в сельском строительстве	<a href="https://mc.uz/wp-content/up/id/KgjYQROUZJN5S5r2KierqkGtodF4VG.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 4.02.15-04</u>	Отделочные работы	<a href="https://mc.uz/wp-content/up/Ji/z4iKHYPrz0tErs3iVXsVbPLIjntosn.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.16-07</u>	Трубопроводы внутренние	<a href="https://mc.uz/wp-content/up/nK/28G4qdrBZTfoi3OTLJgYnUdEiha8mu.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.17-07</u>	Водопровод и канализация. Внутренние устройства	<a href="https://mc.uz/wp-content/up/JF/UPuqFsRuBkvUyIe8KAPSpHRD071OjQ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.18-07</u>	Отопление. Внутренние устройства	<a href="https://mc.uz/wp-content/up/3j/bX1fMbTExX83oeVvkaoadI9blCNgUs.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.19-07</u>	Газоснабжение- внутренние устройства	<a href="https://mc.uz/wp-content/up/1S/E7HkRIXvElbbcz80frS0Z4smEmqCCq.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.20-07</u>	Вентиляция и кондиционирование воздуха	<a href="https://mc.uz/wp-content/up/VW/5JomlzNzxya9AweZoFvYwSxsRw9J6P.rar">Скачать (RUS)</a>`
    // <u>ШНК 4.02.21-07</u>	Временные сборно-разборные здания и сооружения	<a href="https://mc.uz/wp-content/up/OV/u8qCMhHaOleCCUYf0x2XaZmDAHtBnJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.22-05</u>	Водопровод-наружные сети	<a href="https://mc.uz/wp-content/up/Gl/9d14DeNRgSAL4uR4H1Pz5J5qLIOXKi.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.23-05</u>	Канализация-наружные сети	<a href="https://mc.uz/wp-content/up/IY/7gKkEyuQCjFOJ9NMVXfM4IthwT9grc.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.24-04</u>	Теплоснабжение и газопроводы-наружные сети	<a href="https://mc.uz/wp-content/up/hU/RZaGHVirzVE6Pmw3bZtu94l26NcpuA.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.25-07</u>	Магистральные трубопроводы газонефтепродуктов	<a href="https://mc.uz/wp-content/up/g6/0QW9EYFlsls7xcVg0S2BEBLTZIIKTC.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.26-07</u>	Теплоизоляционные работы	<a href="https://mc.uz/wp-content/up/g2/xhdHyovV4VlSfMhcZeS7JDOVMJmL8R.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.27-05</u>	Автомобильные дороги	<a href="https://mc.uz/wp-content/up/nv/URVdDKXQ7IGOPKvnkbkf8A1KDFCW9M.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.28-04</u>	Железные дороги	<a href="https://mc.uz/wp-content/up/kJ/NaQ6TZQI5Bo9NTRtgFmV1Sew1rOWsJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.29-04</u>	Тоннели и метрополитены кн. 1, кн. 2.	<a href="https://mc.uz/wp-content/up/Za/GbaFhhY7KGmLdEszRvG07Q1X8QvIOD.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.30-04</u>	Мосты и трубы	<a href="https://mc.uz/wp-content/up/vX/dnHewgIc9rKlY2TH7guICIHrU33gM6.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.31-04</u>	Аэродромы	<a href="https://mc.uz/wp-content/up/lI/mdOPjN24alwZdO83s2rI3QFto5jszZ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.32-07</u>	Трамвайные пути	<a href="https://mc.uz/wp-content/up/Rc/MJnuszPMmZWUe3uBEKYUdEpYfkqCBp.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.33-04</u>	Линии электропередачи. Книга 1,2	<a href="https://mc.uz/wp-content/up/tG/7FEcQ3LEnkUHgS0X95BtYqicaJPRq0.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.34-04</u>	Сооружения связи, радиовещания и телевидения	<a href="https://mc.uz/wp-content/up/4i/O7tynKD7FQkVxRKr1ir5Kbb7LbG5wD.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.35-06</u>	Горнопроходческие работы. Книга 1	<a href="https://mc.uz/wp-content/up/P0/oLN1iZK7f7IuEBOoq5Z4JKV2mvYJlJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.36-04</u>	ЗЕМЛЯНЫЕ КОНСТРУКЦИИ ГИДРОТЕХНИЧЕСКИХ СООРУЖЕНИЙ	<i>Файлов нет</i>
    // <u>ШНК 4.02.37-05</u>	Бетонные и железобетонные конструкции гидротехнических сооружений	<i>Файлов нет</i>
    // <u>ШНК 4.02.39-06</u>	Металлические конструкции гидротехнических сооружений	<a href="https://mc.uz/wp-content/up/in/PurLvHzMJGA4qdOWlF4T7azYvV3BpQ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.41-06</u>	Гидроизоляционные работы в гидротехнических сооружениях	<a href="https://mc.uz/wp-content/up/mo/fvuU73Tad3Gy4h6bbKTNrORHOCUeYQ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.42-04</u>	Берегоукрепительные работы	<a href="https://mc.uz/wp-content/up/M8/nstjNU1YPtKe26TaB3Syrj5Wa7wvHl.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.45-04</u>	ПРОМЫШЛЕННЫЕ ПЕЧИ И ТРУБЫ	<i>Файлов нет</i>
    // <u>ШНК 4.02.46-04</u>	Работы по реконструкции зданий и сооружений	<a href="https://mc.uz/wp-content/up/mO/BgD4NvltvABfe5UqSTP1TL33Nm7EZ4.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.47-04</u>	Озеленение. Лесонасаждения. Многолетние плодовые насаждения	<a href="https://mc.uz/wp-content/up/lW/pGF0dkvfcVEgEyTus2RSBGsJNZ0Gy0.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.51-07</u>	Земляные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/57/kz7z9ycngvjshOUQoggHRGqxRBKbZo.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.52-05</u>	Фундаменты. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/q1/yZZHN4C1Pb14YpOVXW42oMXZQAz0Iw.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.53-07</u>	Стены. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/0v/jp0cGa3z0yDr4JzgovsuyMty0ne67V.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.54-07</u>	Перекрытия. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/tT/l5fKVp5b1gWTvMeZMFVIaa9Yr1MlRC.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.55-05</u>	Перегородки. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/1O/ClruE5CEPvPhsRWk6ZzzhWZT3o3jHQ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.56-07</u>	Проемы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/9L/2w4Qm0TSZ0KuUiuzQ5vpyEZE5WKHhL.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.57-07</u>	Полы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/d5/DZR4FXCsqP2wYzkE8b9jXkxIY0YhvJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.58-07</u>	Крыши, кровли. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/j4/MVTmRQRp5GN6VjTBmA6ir3VCVehRp6.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.59-07</u>	Лестницы, крыльца. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/Qo/taqvoly0iUFHP1KgivPJQLc69aQ2HD.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.60-07</u>	Печные работы	<a href="https://mc.uz/wp-content/up/Em/UPISkywE5GpkKbbyd7U0dGU8A1KSkB.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.61-07</u>	Штукатурные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/ht/Nae671LWQtoH8JCgZy2wpUKCgo17OY.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.62-07</u>	Малярные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/4p/9K7Qk2KEXdEzkV7PeT0g8FikpFXZWi.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.63-07</u>	Стекольные, обойные и облицовочные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/BP/8mDMMb2pz6eawfGlCWN695kcMBVLq0.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.64-07</u>	Лепные работы. Ремонтно-строительные работы	
    // <u>ШНК 4.02.65-07</u>	Внутренние санитарно-технические работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/p7/6uT2oRZaVDMTUtwOIlk31aSP14pq1Y.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.66-07</u>	Наружные инженерные сети. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/wi/0faK01hQY0dn21DTMB5LqCxbbUbyYq.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.67-07</u>	Электромонтажные работы. Ремонтно-строительные работы	
    // <u>ШНК 4.02.68-07</u>	Благоустройство. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/kf/jMIMM9VwohxcFRb4DXHoGiBNoIKSLM.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.69-07</u>	Прочие ремонтно-строительные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/YN/nQaI0t7izXY4dgxVD65C3nODd1WdBC.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.70-05</u>	Общие положения по применению элементных сметных ресурсных норм на ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/bM/FXVqPAhFlx3Fd1btVqPnZo3wlZXRrr.rar">Скачать (UZB)</a>
    // <u>ШНК 4.04.06-14</u>	Сборник ресурсных сметных норм на перевозку грузов для строительства	<a href="https://mc.uz/wp-content/up/cs/rlLz48iDqJTRWHTYxFUVqlgsLJRIwE.rar">Скачать (UZB)</a>`;

    ctx.replyWithHTML(text21,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                        { text: "Cледующий", callback_data: 'ikki32' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('ikki32', ctx => {

    ctx.deleteMessage();
     let text21 = `<b>2 Лист</b>
     <b>Группа 02. Сборники ресурсных элементных сметных норм на строительные работы и ремонтно-строительные работы</b> \n` +
    
    // <u>ШНК 4.02.00-04</u>	Общие положения по разработке и применению ресурсных сметных норм на строительные работы	<a href="https://mc.uz/wp-content/up/Kf/IpJfN8Dqjh1YVU2jfWTnBt4hSQum4H.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.01-04</u>	Земляные работы	<a href="https://mc.uz/wp-content/up/a6/q9Nl8feeYASW2ZTroJWgrTB0E3hkhp.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.02-04</u>	Горновскрышные работы	<a href="https://mc.uz/wp-content/up/nC/hr8zAx2yBGVO45gioas7CYJY5OIpVt.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.03-04</u>	Буровзрывные работы	<a href="https://mc.uz/wp-content/up/ux/W8a4QNnhUhEfHbOBe3zBe7T16zhoQT.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.04-04</u>	Скважины	<a href="https://mc.uz/wp-content/up/Qa/MlmYyNrQ1673EBlbcQUMPCWv56AzIV.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.05-04</u>	Свайные работы. Опускные колодцы. Закрепление грунтов	<a href="https://mc.uz/wp-content/up/Rb/1YQtf6xXO8CISPeGLCVz0G59fgyN5f.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.06-04</u>	Бетонные и железобетонные конструкции монолитные	<a href="https://mc.uz/wp-content/up/fC/qgQycWPFbq31nyQHCwn3tNAbnngY0j.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.07-05</u>	Бетонные и железобетонные конструкции сборные	<a href="https://mc.uz/wp-content/up/uB/aUZxkixvACM9zT4OU2cEWN9EsMZobp.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.08-04</u>	Конструкции из кирпича и блоков	<a href="https://mc.uz/wp-content/up/Om/PBrQENY1FcNbHEF7lMkeOKzdjj6WB5.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.09-04</u>	Металлические конструкции	<a href="https://mc.uz/wp-content/up/OQ/YLGtCgUCZoOp3xxnDj2OKSvzXh8AIJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.10-04</u>	Деревянные конструкции	<a href="https://mc.uz/wp-content/up/d4/Q2XA2IaXPMQORYLcavIRERIYQwhLTv.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.11-04</u>	Полы	<a href="https://mc.uz/wp-content/up/aN/gonKOgtuFQJbmlkSWm5bFPVKITdw1c.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.12-04</u>	Кровли	<a href="https://mc.uz/wp-content/up/T3/wW4560QLDUxWjci2zbfqJ4qlgGnd51.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.13-04</u>	Защита строительных конструкций и оборудования от коррозии	<a href="https://mc.uz/wp-content/up/pE/8jfHayjRMkqmTfZ07CVgeQRdb6TNVx.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.14-05</u>	Конструкции в сельском строительстве	<a href="https://mc.uz/wp-content/up/id/KgjYQROUZJN5S5r2KierqkGtodF4VG.rar">Скачать (RUS/UZB)</a>
    // <u>ШНК 4.02.15-04</u>	Отделочные работы	<a href="https://mc.uz/wp-content/up/Ji/z4iKHYPrz0tErs3iVXsVbPLIjntosn.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.16-07</u>	Трубопроводы внутренние	<a href="https://mc.uz/wp-content/up/nK/28G4qdrBZTfoi3OTLJgYnUdEiha8mu.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.17-07</u>	Водопровод и канализация. Внутренние устройства	<a href="https://mc.uz/wp-content/up/JF/UPuqFsRuBkvUyIe8KAPSpHRD071OjQ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.18-07</u>	Отопление. Внутренние устройства	<a href="https://mc.uz/wp-content/up/3j/bX1fMbTExX83oeVvkaoadI9blCNgUs.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.19-07</u>	Газоснабжение- внутренние устройства	<a href="https://mc.uz/wp-content/up/1S/E7HkRIXvElbbcz80frS0Z4smEmqCCq.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.20-07</u>	Вентиляция и кондиционирование воздуха	<a href="https://mc.uz/wp-content/up/VW/5JomlzNzxya9AweZoFvYwSxsRw9J6P.rar">Скачать (RUS)</a>
    `<u>ШНК 4.02.21-07</u>	Временные сборно-разборные здания и сооружения	<a href="https://mc.uz/wp-content/up/OV/u8qCMhHaOleCCUYf0x2XaZmDAHtBnJ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.22-05</u>	Водопровод-наружные сети	<a href="https://mc.uz/wp-content/up/Gl/9d14DeNRgSAL4uR4H1Pz5J5qLIOXKi.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.23-05</u>	Канализация-наружные сети	<a href="https://mc.uz/wp-content/up/IY/7gKkEyuQCjFOJ9NMVXfM4IthwT9grc.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.24-04</u>	Теплоснабжение и газопроводы-наружные сети	<a href="https://mc.uz/wp-content/up/hU/RZaGHVirzVE6Pmw3bZtu94l26NcpuA.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.25-07</u>	Магистральные трубопроводы газонефтепродуктов	<a href="https://mc.uz/wp-content/up/g6/0QW9EYFlsls7xcVg0S2BEBLTZIIKTC.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.26-07</u>	Теплоизоляционные работы	<a href="https://mc.uz/wp-content/up/g2/xhdHyovV4VlSfMhcZeS7JDOVMJmL8R.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.27-05</u>	Автомобильные дороги	<a href="https://mc.uz/wp-content/up/nv/URVdDKXQ7IGOPKvnkbkf8A1KDFCW9M.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.28-04</u>	Железные дороги	<a href="https://mc.uz/wp-content/up/kJ/NaQ6TZQI5Bo9NTRtgFmV1Sew1rOWsJ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.29-04</u>	Тоннели и метрополитены кн. 1, кн. 2.	<a href="https://mc.uz/wp-content/up/Za/GbaFhhY7KGmLdEszRvG07Q1X8QvIOD.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.30-04</u>	Мосты и трубы	<a href="https://mc.uz/wp-content/up/vX/dnHewgIc9rKlY2TH7guICIHrU33gM6.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.31-04</u>	Аэродромы	<a href="https://mc.uz/wp-content/up/lI/mdOPjN24alwZdO83s2rI3QFto5jszZ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.32-07</u>	Трамвайные пути	<a href="https://mc.uz/wp-content/up/Rc/MJnuszPMmZWUe3uBEKYUdEpYfkqCBp.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.33-04</u>	Линии электропередачи. Книга 1,2	<a href="https://mc.uz/wp-content/up/tG/7FEcQ3LEnkUHgS0X95BtYqicaJPRq0.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.34-04</u>	Сооружения связи, радиовещания и телевидения	<a href="https://mc.uz/wp-content/up/4i/O7tynKD7FQkVxRKr1ir5Kbb7LbG5wD.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.35-06</u>	Горнопроходческие работы. Книга 1	<a href="https://mc.uz/wp-content/up/P0/oLN1iZK7f7IuEBOoq5Z4JKV2mvYJlJ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.36-04</u>	ЗЕМЛЯНЫЕ КОНСТРУКЦИИ ГИДРОТЕХНИЧЕСКИХ СООРУЖЕНИЙ	<i>Файлов нет</i>
    <u>ШНК 4.02.37-05</u>	Бетонные и железобетонные конструкции гидротехнических сооружений	<i>Файлов нет</i>
    <u>ШНК 4.02.39-06</u>	Металлические конструкции гидротехнических сооружений	<a href="https://mc.uz/wp-content/up/in/PurLvHzMJGA4qdOWlF4T7azYvV3BpQ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.41-06</u>	Гидроизоляционные работы в гидротехнических сооружениях	<a href="https://mc.uz/wp-content/up/mo/fvuU73Tad3Gy4h6bbKTNrORHOCUeYQ.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.42-04</u>	Берегоукрепительные работы	<a href="https://mc.uz/wp-content/up/M8/nstjNU1YPtKe26TaB3Syrj5Wa7wvHl.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.45-04</u>	ПРОМЫШЛЕННЫЕ ПЕЧИ И ТРУБЫ	<i>Файлов нет</i>
    <u>ШНК 4.02.46-04</u>	Работы по реконструкции зданий и сооружений	<a href="https://mc.uz/wp-content/up/mO/BgD4NvltvABfe5UqSTP1TL33Nm7EZ4.rar">Скачать (RUS)</a>
    <u>ШНК 4.02.47-04</u>	Озеленение. Лесонасаждения. Многолетние плодовые насаждения	<a href="https://mc.uz/wp-content/up/lW/pGF0dkvfcVEgEyTus2RSBGsJNZ0Gy0.rar">Скачать (RUS)</a>`
    // <u>ШНК 4.02.51-07</u>	Земляные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/57/kz7z9ycngvjshOUQoggHRGqxRBKbZo.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.52-05</u>	Фундаменты. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/q1/yZZHN4C1Pb14YpOVXW42oMXZQAz0Iw.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.53-07</u>	Стены. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/0v/jp0cGa3z0yDr4JzgovsuyMty0ne67V.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.54-07</u>	Перекрытия. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/tT/l5fKVp5b1gWTvMeZMFVIaa9Yr1MlRC.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.55-05</u>	Перегородки. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/1O/ClruE5CEPvPhsRWk6ZzzhWZT3o3jHQ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.56-07</u>	Проемы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/9L/2w4Qm0TSZ0KuUiuzQ5vpyEZE5WKHhL.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.57-07</u>	Полы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/d5/DZR4FXCsqP2wYzkE8b9jXkxIY0YhvJ.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.58-07</u>	Крыши, кровли. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/j4/MVTmRQRp5GN6VjTBmA6ir3VCVehRp6.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.59-07</u>	Лестницы, крыльца. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/Qo/taqvoly0iUFHP1KgivPJQLc69aQ2HD.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.60-07</u>	Печные работы	<a href="https://mc.uz/wp-content/up/Em/UPISkywE5GpkKbbyd7U0dGU8A1KSkB.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.61-07</u>	Штукатурные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/ht/Nae671LWQtoH8JCgZy2wpUKCgo17OY.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.62-07</u>	Малярные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/4p/9K7Qk2KEXdEzkV7PeT0g8FikpFXZWi.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.63-07</u>	Стекольные, обойные и облицовочные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/BP/8mDMMb2pz6eawfGlCWN695kcMBVLq0.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.64-07</u>	Лепные работы. Ремонтно-строительные работы	
    // <u>ШНК 4.02.65-07</u>	Внутренние санитарно-технические работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/p7/6uT2oRZaVDMTUtwOIlk31aSP14pq1Y.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.66-07</u>	Наружные инженерные сети. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/wi/0faK01hQY0dn21DTMB5LqCxbbUbyYq.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.67-07</u>	Электромонтажные работы. Ремонтно-строительные работы	
    // <u>ШНК 4.02.68-07</u>	Благоустройство. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/kf/jMIMM9VwohxcFRb4DXHoGiBNoIKSLM.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.69-07</u>	Прочие ремонтно-строительные работы. Ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/YN/nQaI0t7izXY4dgxVD65C3nODd1WdBC.rar">Скачать (RUS)</a>
    // <u>ШНК 4.02.70-05</u>	Общие положения по применению элементных сметных ресурсных норм на ремонтно-строительные работы	<a href="https://mc.uz/wp-content/up/bM/FXVqPAhFlx3Fd1btVqPnZo3wlZXRrr.rar">Скачать (UZB)</a>
    // <u>ШНК 4.04.06-14</u>	Сборник ресурсных сметных норм на перевозку грузов для строительства	<a href="https://mc.uz/wp-content/up/cs/rlLz48iDqJTRWHTYxFUVqlgsLJRIwE.rar">Скачать (UZB)</a>`;

    ctx.replyWithHTML(text21,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                        { text: "Cледующий", callback_data: 'ikki33' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})






bot.action('uch3', ctx => {

    ctx.deleteMessage();
    let text22 = `<b>Группа 03. Сборники ресурсных сметных норм на эксплуатацию строительных машин</b>
    
    <u>ШНК 4.03.01-04</u>	Сборник сметных ресурсных норм и расценок на эксплуатацию строительных машин	<a href="https://mc.uz/wp-content/up/Q5/GbjAYO2yQDgJEj7PGF1oQDZqbqquDi.rar">Скачать (RUS/UZB)</a>`
    ctx.replyWithHTML(text22,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})

bot.action('tort3', ctx => {

    ctx.deleteMessage();
    let text23 = `<b>Группа 13. Сметные ресурсные нормы затрат на оборудование и инвентарь общественных и административных зданий. Объекты лечебно-профилактического назначения</b>
    
    <u>ШНК 4.13.00-05</u>	Общие положения по применению сметных ресурсных норм на оборудование и инвентарь общественных и административных норм	<a href="https://mc.uz/wp-content/up/Yb/sob1PaU60Y5VkIy0HTPRjy64J4i1I1.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 4.13.02-06</u>	Санатории, учреждения отдыха и туризма	<a href="https://mc.uz/wp-content/up/2H/bK7McqUIlOfEB0jrQPUkeLgoZpmVyM.rar">Скачать</a>
    <u>ШНК 4.13.04-06</u>	Родильные дома	<a href="https://mc.uz/wp-content/up/Hp/g07A7pL7fAUEwSZjwew1IHekQoW1LP.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.05-06</u>	Многопрофильные больницы	<a href="https://mc.uz/wp-content/up/VZ/PbqwkXzqWaECW2mX9osANEneTGPNtc.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.06-06</u>	Амбулаторно-поликлинические учреждения	<a href="https://mc.uz/wp-content/up/nm/zPQqCzjcaqGVY3iZg3Rql1f66VzlK9.rar">Скачать</a>
    <u>ШНК 4.13.07-06</u>	Детские больницы	<a href="https://mc.uz/wp-content/up/Ns/mT96KpXwZcLDFfpXaYwKM00DXuz3Bg.rar">Скачать (RUS)</a>
    ШНК 4.13.08-06	Специализированные больницы	<a href="https://mc.uz/wp-content/up/3c/nCcuQzWJ81C8JTMdMIIUkDI8jh8IX7.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.09-06</u>	Станции скорой и неотложной медицинской помощи	<a href="https://mc.uz/wp-content/up/BT/p4zeMp0ZsY0OOz86RG3dqug5Zv3x6v.rar">Скачать (RUS)</a>
    `
    ctx.replyWithHTML(text23,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})




bot.action('besh3', ctx => {

    ctx.deleteMessage();
    let text24 = `<b>Группа 17. Сборники ресурсных сметных норм на монтаж оборудования</b>
    
    <u>ШНК 4.17.00-05</u>	Общие положения по применению ресурсных сметных норм на монтаж оборудования	<a href="https://mc.uz/wp-content/up/76/lyrsUWA2vR7sxfNoSTJZub9dXnJSkb.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.01-06</u>	Сборник 1. Металлообрабатывающее оборудование	<a href="https://mc.uz/wp-content/up/cu/XktjBtpC9TsPzp51YbkDBLBfGooc2G.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.02-06</u>	Сборник 2. Деревообрабатывающее оборудование	<a href="https://mc.uz/wp-content/up/76/siacnXLqSVrdprokf4bcg36UG1IVig.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.04-06</u>	Сборник 4. Дробильно-размольное, обогатительное и агломерационное оборудование	<a href="https://mc.uz/wp-content/up/7S/IC7WeZ9w2AWj7nBluAYOGsG3dvmV6Y.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.05-06</u>	Сборник 5. Весовое оборудование	<a href="https://mc.uz/wp-content/up/Fx/7qPc6m91AOmBDuiyo7UMlmuNFgRAmL.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 4.17.06-07</u>	Сборник 6. Теплосиловое оборудование	<a href="https://mc.uz/wp-content/up/is/S5NLLuOHGnDAgNxqXzMZU05kyuvnxB.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.07-07</u>	Сборник 7. Компрессорные машины, насосы и вентиляторы	<a href="https://mc.uz/wp-content/up/mi/1k2495ogXXtHy2Pvndw1OgWpzxf9y8.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.08-07</u>	Сборник 8. Электротехнические установки	<a href="https://mc.uz/wp-content/up/db/oUSTXCoGOnbnlhEUlgNYTGxwQN0Zo5.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.09-06</u>	Сборник 9. Электрические печи	<a href="https://mc.uz/wp-content/up/3g/yAm4BCfGJG8TFOmlD6JuxEugZREdXm.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.10-07</u>	Сборник 10. Оборудование связи	<a href="https://mc.uz/wp-content/up/xr/tQ5F2kd6GnkV2xgiVMGhOXTWDrfHvI.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.12-04</u>	Сборник 12. Технологические трубопроводы	<a href="https://mc.uz/wp-content/up/9h/R839J6GJAjqIJ7hJlrGi19cUHI9jn2.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.14-06</u>	Сборник 14. Оборудование прокатных производств	<a href="https://mc.uz/wp-content/up/RV/qymuAPyu56X2wCO2g3Ngz6SE73Ehno.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.15-06</u>	Сборник 15. Оборудование для очистки газов	<a href="https://mc.uz/wp-content/up/mI/eNAoqTwWZXxkZwVYzCqU8drXdOji8u.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 4.17.16-06</u>	Сборник 16. Оборудование предприятий черной металлургии	<a href="https://mc.uz/wp-content/up/Oo/mFTsEawR8Rtlo7HVZWeYFRCJnalswh.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.17-06</u>	Сборник 17. Оборудование предприятий цветной металлургии	<a href="https://mc.uz/wp-content/up/g6/tQsovtChNHDVeistBQQWXTnoK8rpt6.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.20-06</u>	Сборник 20. Оборудование сигнализации, централизации и блокировки на железнодорожном транспорте	<a href="https://mc.uz/wp-content/up/8F/xi446mv0DyQxHditalcfRBSeGQLExB.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.21-06</u>	Сборник 21. Оборудование метрополитенов и тоннелей	<a href="https://mc.uz/wp-content/up/uH/Fl7fvgidV4sDHHho5NJy0XAY43kDYu.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.22-06</u>	Сборник 22. Оборудование гидроэлектрических станций и гидротехнических сооружений	<a href="https://mc.uz/wp-content/up/0B/ukgCXbhOMKO7ZiDpyKB2lFLPj2npWZ.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.23-06</u>	Сборник 23. Оборудование предприятий электротехнической промышленности	<a href="https://mc.uz/wp-content/up/xB/YhTChnVXSWMICt61P2Uo5xqVfPcFTs.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.24-06</u>	Сборник 24. Оборудование предприятий промышленности строительных материалов	<a href="https://mc.uz/wp-content/up/Ug/SaHdUQBy8l9PAQP2OpAU9FS5ZmGjOq.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.26-06</u>	Сборник 26. Оборудование предприятий текстильной промышленности	<a href="https://mc.uz/wp-content/up/9r/pJQmJOBXhrIssmPdNtUeUoh6wgN4Im.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.27-06</u>	Сборник 27. Оборудование предприятий полиграфической промышленности	<a href="https://mc.uz/wp-content/up/Tl/icS2Lfk7yjvm8bagj5igFVuSEcDN0w.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.28-06</u>	Сборник 28. Оборудование предприятий пищевой промышленности	<a href="https://mc.uz/wp-content/up/BS/F403vVDCuFsC12I959ytR20ytxGUKf.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.29-06</u>	Сборник 29. Оборудование театрально-зрелищных предприятий	<a href="https://mc.uz/wp-content/up/K2/d2ThjiSR1Qc4ZCNYFBvzUAk1pTCbvQ.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.30-07</u>	Сборник 30. Оборудование зернохранилищ и предприятий по переработки зерна	<code>Файл не существует</code>
    <u>ШНК 4.17.31-06</u>	Сборник 31. Оборудование предприятий кинематографии	<a href="https://mc.uz/wp-content/up/Tj/hMMzEp50fY2zdPNCcIkyM7ARKJ01wO.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.32-06</u>	Сборник 32. Оборудование предприятий электронной промышленности и промышленности средств связи	<a href="https://mc.uz/wp-content/up/IP/u3i85c4ZZVkBrITFa2V5wCjZ2K4I1w.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.35-06</u>	Сборник 35. Оборудование сельскохозяйственных производств	<a href="https://mc.uz/wp-content/up/8P/CTnIxOcKoz4fWxdCitVU1AQXwPWnL0.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.36-06</u>	Сборник 36. Оборудование предприятий бытового обслуживания и коммунального хозяйства	<a href="https://mc.uz/wp-content/up/nf/MnXBONrHmDtHw06Z8Q7zsUfP8Ws7pC.rar">Скачать (RUS)</a>
    <u>ШНК 4.17.37-06</u>	Сборник на оборудование общего назначения	<a href="https://mc.uz/wp-content/up/zr/Kj4VstEorrbJCEcLxJGeaWIa9UnjVl.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 4.17.38-07</u>	Сборник 38. Изготовление технологических металлических конструкций в условиях производственных баз	<a href="https://mc.uz/wp-content/up/dE/gykO2PuesxfF7N82p7j7ToDsGbrdQ4.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 4.17.39-07</u>	Сборник 39. Контроль монтажных сварных соединений	<a href="https://mc.uz/wp-content/up/1w/HLXkpHlMEjbgata4p10GyV0ULQUfV8.rar">Скачать (RUS/UZB)</a>`;
    ctx.replyWithHTML(text24,  
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('olti3', ctx => {

    ctx.deleteMessage();
    let text25 = `<b>Норма затрат материальных и трудовых ресурсов</b>
    
    <u>ШНК 5.01.23-08</u>	Типовые нормы расхода цемента для приготовления бетонов сборных и монолитных бетонных,
    железобетонных изделий и конструкций.	<a href="https://mc.uz/wp-content/up/2e/LgCZpSCrUh5I9fMyXQEbVj8ORaKSy8.rar">Скачать (RUS)</a>
    <u>ШНК 5.82.01-11</u>	Разработка и применение норм и нормативов расхода материальных ресурсов в строительстве. Основные положения	<a href="https://mc.uz/wp-content/up/C2/nmaSRnhjfin8kwAFRKkFzRFCXlAd30.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text25,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('yetti3', ctx => {

    ctx.deleteMessage();
    let text26 = `<b>Объекты административного назначения</b>
    
    <u>ШНК 4.13.81-05</u>	Административные здания	<a href="https://mc.uz/wp-content/up/iZ/9re6G0rGh4K4ezhql3tjfItrIhEUXJ.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text26,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})

bot.action('sakkiz3', ctx => {

    ctx.deleteMessage();
    let text27 = `<b>Объекты бытового обслуживания</b>
    
    <u>ШНК 4.13.31-06</u>		Предприятия бытового обслуживания	<a href="https://mc.uz/wp-content/up/WB/nTJJWEUrvEWvj7M5dA0z2G4b4tO7dH.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.32-06</u>		Бани	<a href="https://mc.uz/wp-content/up/tB/jelwmqN6FCe3RdQ1AjGGfHyItFjLJz.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text27,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('toqqiz3', ctx => {

    ctx.deleteMessage();
    let text28 = `<b>Объекты коммунального назначения</b>
    
    <u>ШНК 4.13.61-06</u>	Гостиницы первого, второго, высшего «А» и «Б» разрядов	<a href="https://mc.uz/wp-content/up/Aq/oGKCXh0FfX4XzcDCMqmYplfk30Rv1z.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text28,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('on3', ctx => {

    ctx.deleteMessage();
    let text29 = `<b>Объекты культурно-просветительного назначения</b>
    
    <u>ШНК 4.13.21-06</u>	Клубы. Дома культуры, театры, цирки	<a href="https://mc.uz/wp-content/up/jw/yshOzlEa2jwRIAn7LRwbWEzrYgvYOm.rar">Скачать</a>
    <u>ШНК 4.13.22-06</u>	Кинотеатры	<a href="https://mc.uz/wp-content/up/Fs/gmbTQYrnAfiBUJxQJjP8IPlOt4PfhG.rar">Скачать</a>
    <u>ШНК 4.13.23-06</u>	Вспомогательные службы объектов кинематографии. Киностудии	<a href="https://mc.uz/wp-content/up/Rk/SXoVewAv00IAhVIqaLW8aUnBghj7kk.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.24-06</u>	Вспомогательные службы объектов кинематографии. Фильмобазы	`
    ctx.replyWithHTML(text29,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('onbir3', ctx => {

    ctx.deleteMessage();
    let text30 = `<b>Объекты торговли и общественного питания</b>
    
    <u>ШНК 4.13.41-06</u>	Предприятия торговли и общественного питания	<a href="https://mc.uz/wp-content/up/M6/wFIDPERewmvGOAP2mxwuUClQpCo8xp.rar">Скачать (RUS)</a>
    `
    ctx.replyWithHTML(text30,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})



bot.action('onikki3', ctx => {

    ctx.deleteMessage();
    let text31 = `<b>Объекты транспортного назначения</b>
    
    <u>ШНК 4.13.71-06</u>	Объекты гражданской авиации	<a href="https://mc.uz/wp-content/up/Gs/Vtw3lYawLPRTdeGFerkJiWDfRm8Fqc.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.72-06</u>	Пассажирские автостанции и автовокзалы	<a href="https://mc.uz/wp-content/up/Bn/NLFbxEe5pVKxSsLD9l2yForwewgQKg.rar">Скачать (RUS)</a>
    `
    ctx.replyWithHTML(text31,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('onuch3', ctx => {

    ctx.deleteMessage();
    let text32 = `<b>Объекты учебных заведений</b>
    
    <u>ШНК 4.13.51-05</u>	Общеобразовательные школы и пришкольные интернаты	<a href="https://mc.uz/wp-content/up/9m/RRnKYxMT9qNOUvn8qbJrVVy0qaaduQ.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.52-05</u>	Средние специальные учебные заведения	<a href="https://mc.uz/wp-content/up/vZ/jEwf3Vyx0HtOlsyqv22Kkdbl1L2U5V.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.53-05</u>	Детские дошкольные учреждения	<a href="https://mc.uz/wp-content/up/Qe/wfQ1vVbzYHIIVknAM8FlB2py2SW7YB.rar">Скачать (RUS)</a>
    <u>ШНК 4.13.55-05</u>	Детские дома и школы-интернаты для детей-сирот и детей, оставшихся без попечения родителей	<a href="https://mc.uz/wp-content/up/8T/3mY61yeLTiupYxKvzvNw6VWDJHJdXt.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text32,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'five' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})