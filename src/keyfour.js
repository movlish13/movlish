require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')


bot.action('four', ctx => {
    let priceMessage = 'Подсистема №3. Правила организации и технология строительного производства';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Группа 01", callback_data: 'bir2' },
                        { text: "Группа 02", callback_data: 'ikki2' }
                    ],
                    [
                        { text: "Группа 03", callback_data: 'uch2' },
                        { text: "Группа 04", callback_data: 'tort2' }
                    ],
                    [
                        { text: "Группа 05", callback_data: 'besh2' },
                        { text: "Группа 06", callback_data: 'olti2' }
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('bir2', ctx => {

    ctx.deleteMessage();
    let text14 = `<b>Группа 01. Общие правила строительного производства</b>
    
    <u>ШНК 3.01.01-03</u>	Организация строительного производства	<a href="https://mc.uz/wp-content/up/wF/SPlRQ4X0U59L1nYMqEMMvTLFq6sP4u.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.01.02-00</u>	Техника безопасности в строительстве.	<a href="https://mc.uz/wp-content/up/HA/jrgWOKOljWbC9DERmTfP2X2GPt8lsx.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 3.01.03-09</u>	Геодезические работы в строительстве	<a href="https://mc.uz/wp-content/up/tj/gS1mXq1kz7iNKyPIURdnm4LAUUjZou.rar">Скачать (RUS)</a>
    <u>ШНК 3.01.04-04</u>	Приемка в эксплуатацию законченных строительством объектов. Изменение	<a href="https://mc.uz/wp-content/up/nd/o6GRDxIHFsd7l8WWj2numqNlbVem6f.rar">Скачать (RUS)</a>
    <u>ШНК 3.01.04-19</u> <code>(ЯНГИ)</code>	Қурилиши тугалланган обектларни фойдаланишга қабул қилиш. Асосий холатлар	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-3.01.04-19-foydalanishga-kabul-kilish.pdf">Открыть (UZB)</a>
    <u>КМК 3.01.05-99</u>	Правила производства и приемки работ. Благоустройство территорий	<pre>Файл не существует</pre>
    <u>КМК 3.01.07-98</u>	Правила безопасности при проведении обследований жилых, общественных и промышленных зданий для
    проектирования капитального ремонта	<pre>Файл не существует</pre>
    <u>КМК 3.01.08-99</u>	Организация производства капитального ремонта жилых и общественных зданий и сооружений	<a href="https://mc.uz/wp-content/up/tX/39B1b7ob55ORAp4sU8aqzhxK4CgJt5.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.01.09-97</u>	Правила приемки в эксплуатацию законченных капитальным ремонтом жилых и общественных зданий и сооружений	<a href="https://mc.uz/wp-content/up/7S/7t1RFxDBnB9QXfftWvyAOC3a8iv89f.rar">Скачать (RUS/UZB)</a>`;
    ctx.replyWithHTML(text14, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'four' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('ikki2', ctx => {

    ctx.deleteMessage();

    let text15 = `<b>Группа 02. Основания и фундаменты</b>
    
    <u>КМК 3.02.01-97 1-сон узгартириш</u>	Ер иншоотлари, асослар ва пойдеворлар	<a href="https://mc.uz/wp-content/uploads/2021/01/kmk-3.02.01-97-uzgartirish-1.pdf">Открыть</a>
    <u>ШНК 3.02.03-09</u>	Подземные горные выработки	<a href="https://mc.uz/wp-content/up/vV/zjbFQjHxNMacys35uD5AawknKbm4kR.rar">Скачать (RUS/UZB)</a>`;

    ctx.replyWithHTML(text15, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'four' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})



bot.action('uch2', ctx => {

    ctx.deleteMessage();
    let text16 = `<b>Группа 03. Строительные конструкции</b>
    
    <u>КМК 3.03.01-98</u>	Несущие и ограждающие конструкции	<a href="https://mc.uz/wp-content/up/OA/da3WlkkvEfmYtoxitdHjXaLmwKKVqM.rar">Скачать (RUS)</a>
    <u>КМК 3.03.02-98</u>	Металлоконструкции. Правила производства и приемки работ	<a href="https://mc.uz/wp-content/up/AC/BiyEHSo39zVNTopPKGedbBCOix7bXW.rar">Скачать (RUS/UZB)</a>
    <u>СниП III-24-75</u>	Промышленные печи и кирпичные трубы	<a href="https://mc.uz/wp-content/up/5Q/OTOcJpdkukyWfEzJiAuyoE9a2Ze4K8.rar">Скачать (RUS)</a>
    <u>КМК 3.03.04-98</u>	Производство сборных железобетонных конструкций и изделий.	<a href="https://mc.uz/wp-content/up/Rb/H7Serx4BU8YRlogYqIIgl8byE7yX7t.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.03.04-19</u> <code>(ЯНГИ)</code>	Йиғма темирбетон конструксия ва буюмларни ишлаб чиқариш	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-3.03.04-19-temirbeton-buyumlari.pdf">Открыть (UZB)</a>
    <u>КМК 3.03.06-99</u>	Приготовление и применение строительных растворов	<a href="https://mc.uz/wp-content/up/ym/IhccjlM0dgfL97l3btVH1Dpq3tF84H.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.03.07-98</u>	Производство изделий из ячеистых бетонов	<pre>Файл не существует</pre>
    <u>КМК 3.03.08-98</u>	Инструкция по технологии изготовления полимербетонов и изделий из них	<a href="https://mc.uz/wp-content/up/qu/i55TYOt9cx6DA2jlRvezr8zYrkWQmC.rar">Скачать (RUS/UZB)</a>`
    ctx.replyWithHTML(text16,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'four' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})

bot.action('tort2', ctx => {

    ctx.deleteMessage();
    let text17 = `<b>Группа 04. Защитные, изоляционные и отделочные покрытия</b>
    
    <u>СниП 3.04.01-87</u>	Изоляционные и отделочные покрытия	<a href="https://mc.uz/wp-content/up/t1/GWH8s2aEEb1KJilJzIlQhVdRDQ2T7f.rar">Скачать (RUS)</a>
    <u>КМК 3.04.02-97</u>	Защита строительных конструкций и сооружений от коррозии	<a href="https://mc.uz/wp-content/up/Yk/unFQX747s3QlBITiIXSRtw607ETBZe.rar">Скачать (RUS/UZB)</a>`
    ctx.replyWithHTML(text17,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'four' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('besh2', ctx => {

    ctx.deleteMessage();

    let text18 = `<b>Группа 05. Инженерное и технологическое оборудование и сети.</b>
    
    <u>КМК 3.05.01-97</u>	Внутренние санитарно-технические системы	<a href="https://mc.uz/wp-content/up/RJ/TZ5PMuXezMBg2jf0cAAKt5qUkGscEv.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.05.02-96</u>	Газоснабжение. Организация, производство и приемка работ	<a href="https://mc.uz/wp-content/up/O5/0Kc92Kd0i2WB5RRUA3qXymJCxDxBpK.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.05.03-2000</u>	Тепловые сети	<a href="https://mc.uz/wp-content/up/7u/OvRA3V3tFbjBsXd5h855WOSETPVlyp.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.05.04-97</u>	Наружные сети и сооружения водоснабжения и канализации	<i><pre>Файл не существует</pre></i>
    <u>КМК 3.05.05-98</u>	Технологическое оборудование и технологические трубопроводы	<a href="https://mc.uz/wp-content/up/0l/iOczG3N0HhaRrRx4n22jTbqgAY9RIR.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.05.06-97</u>	Электротехнические устройства	<a href="https://mc.uz/wp-content/up/77/Y5l8ZOb3BFHPinEPDocs95JFxno1Ys.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.05.07-97</u>	Системы автоматизации	<a href="https://mc.uz/wp-content/up/BG/XfWJHsqZlJeBMfVcIirXQi6wuujeDl.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.05.08-97</u>	Контактные сети электрифицированного транспорта	<a href="https://mc.uz/wp-content/up/lG/zEQKCcsd8WNvgJUAk1J5OvQP6ozxn8.rar">Скачать (RUS/UZB)</a>`;

    ctx.replyWithHTML(text18, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'four' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('olti2', ctx => {

    ctx.deleteMessage();

    let text19 = `<b>Группа 06. Сооружения транспорта</b>
    
    <u>КМК 3.06.01-96</u>	Железные дороги. Организация, производство и приемка работ	<a href="https://mc.uz/wp-content/up/Bv/GvhjiX3xnbRjichiTF4g3O1sTFAsIj.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.06.02-97</u>	Правила производства и приемки работ. Трамвайные пути	<a href="https://mc.uz/wp-content/up/Pu/IWz9545PKsNnF24PCo5YCnKmvjHWtO.rar">Скачать</a>
    <u>ШНК 3.06.03-08</u>	Автомобильные дороги	<i>Файл не существует</i>
    <u>Изменение №2 к ШНК 3.06.03-08</u>	Автомобильные дороги	<a href="https://mc.uz/wp-content/up/qN/ZyQ2nz84VjhZp6RU7wASrFASJ0ywdN.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 3.06.03-08 2-сон узгартириш</u>	Автомобил йўллари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-3.06.03-08-uzgartirish-2.pdf">Открыть</a>
    <u>ШНК 3.06.03-08 3-сон узгартириш</u>	Автомобил йўллари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-3.06.03-08-uzgartirish-3.pdf">Открыть</a>
    <u>ШНК 3.06.04-14</u>	Мосты и трубы	<a href="https://mc.uz/wp-content/up/Ib/ZRQSXP7L3wH7A5ERQnI4H7HQuxDCjZ.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.06.05-98</u>	Тоннели железнодорожные, автодорожные, гидротехнические. Метрополитены. Производство и приемка работ	<a href="https://mc.uz/wp-content/up/HJ/m8MjstkjRBmlK8ucjQpheC9V5SrnOf.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 3.06.06-07</u>	Аэродромы	<a href="https://mc.uz/wp-content/up/za/aUauw7PEo5sCh4YOeluKb89wujpHlR.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 3.06.07-08</u>	Мосты и трубы. Правила обследований и испытаний	<a href="https://mc.uz/wp-content/up/DZ/rfn4qM4rldO5YvN6VsdBqUEVQ6W0PD.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.06.08-97</u>	Магистральные трубопроводы. Правила производства и приемки работ	<a href="https://mc.uz/wp-content/up/MA/VHFjWsQobwCjERy0wQlebKKORuREAw.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №1 к КМК 3.06.08-97</u>	Магистральные трубопроводы. Правила производства и приемки работ.	<a href="https://mc.uz/wp-content/up/hU/BHA70ge5wrhiT4gmBiTPbTmsPctSS4.rar">Скачать (RUS)</a>
    <u>КМК 3.06.09-98</u>	Производство и приемка работ по строительству в городах и на промышленных предприятиях коллекторных тоннелей, сооружаемых способом щитовой проходки	<a href="https://mc.uz/wp-content/up/Di/XxUdYJKz5V29swKbkndzY1FAqqcCmL.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.07.01-96</u>	Гидротехнические сооружения речные	<a href="https://mc.uz/wp-content/up/v0/S0v3egudrUmGtFVKscq1lDRxK5rESr.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.07.02-96</u>	Гидротехнические транспортные сооружения на реках и водохранилищах	<a href="https://mc.uz/wp-content/up/wJ/B4klfgP88Flki6tCHw7HeDfZczg9A2.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.07.03-97</u>	Оросительные системы. Организация, производство и приемка работ	<a href="https://mc.uz/wp-content/up/Vn/poGZs0lc1GdyMurJLg7fDULszaRChO.rar">Скачать (RUS/UZB)</a>
    <u>КМК 3.07.04-19</u> <i>(ЯНГИ)</i>	Ирригация ва дренаж-коллектор тармоқларидаги гидротехник иншоотлар. Ишларни ташкил қилиш, бажариш ва қабул қилиш	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-3.07.04-19-irrigaciya-gidroteh-inshoot.pdf">Открыть (UZB)</a>`;

    ctx.replyWithHTML(text19, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'four' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})
