require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')


bot.action('two', ctx => {
    let priceMessage = 'Подсистема №1. Организационно - методические нормы';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Группа 01", callback_data: 'bir' },
                        { text: "Группа 02", callback_data: 'ikki' }
                    ],
                    [
                        { text: "Группа 03", callback_data: 'uch' },
                        { text: "Группа 04", callback_data: 'tort' }
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('bir', ctx => {

    ctx.deleteMessage();

    let text = `<b>Группа 01. Система нормативных документов в строительстве</b>\n\n` + `<u>ШНК 1.01.01-09</u>	Система нормативных документов в строительстве. Основные положения	<a href="https://mc.uz/wp-content/up/7g/ZpGJn2KqitwicQdn1OeAJHtg0s6wDC.rar">Скачать (RUS/UZB)</a> / <a href="https://mc.uz/wp-content/uploads/2020/12/shnk-1.01.01-09-rus.pdf">Открыть</a> \n` +
        `<u>Изменение №1 КМК 1.01.04-98</u>	Архитектурно – строительная терминология	<a href="https://mc.uz/wp-content/up/0k/JOC0bRU5npomnxtUXkfQU54no50xae.rar">Скачать</a> \n` +
        `<u>КМК 1.01.05-97</u>	Порядок разработки, согласования и утверждения технологического проектирования	<a href="https://mc.uz/wp-content/up/ip/QyH310o9SqxXsluUiP0yXJdfe4EKxE.rar">Скачать (UZB)</a> \n`;

    ctx.replyWithHTML(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Назад", callback_data: 'two' },
                ],
                [
                    { text: "Menyuga qaytish", callback_data: 'start' },
                ]
            ]
        }
    }).then()
})


bot.action('ikki', ctx => {

    ctx.deleteMessage();

    let text1 = `<strong>Группа 02. Изыскания</strong> \n\n` + `<u>ШНК 1.02.07-15</u>	Инженерные изыскания для строительства. Свод правил	<a href="https://mc.uz/wp-content/up/NC/JMiMiWV3rvcZIHsJueEkP2pAQZ6hbi.rar">Скачать (RUS/UZB)</a> \n` + `<u>ШНК 1.02.08-09</u>	Инженерно-геодезические изыскания для строительства. Свод правил	<a href="https://mc.uz/wp-content/up/2F/l6wUGqcePT9o5yyJEctwzvQPPBseO6.rar">Скачать (RUS/UZB)</a> \n` + `<u>ШНК 1.02.09-15</u>	Инженерно-геологические изыскания для строительства. Свод правил.	<a href="https://mc.uz/wp-content/up/cj/Jr1mCEES9yNUc0fP62DyUh26QjISSX.rar">Скачать (RUS/UZB)</a> \n` +
    `<u>ШНК 1.02.10-12</u>	Инженерно-гидрометеорологические изыскания для строительства. Свод правил.	<a href="https://mc.uz/wp-content/up/Sy/PJ8iRWJESLWwGH7P4UdDdX1SB8lKt0.rar">Скачать (RUS/UZB)</a> \n` +
    `<u>ШНК 1.02.11-15</u>	Инженерно-геологические изыскания в районах распространения специфических грунтов и развития опасных геологических процессов. Свод правил.	<a href="https://mc.uz/wp-content/up/4I/F9TRyPxOVHlMaqCLTR5MJXCnOgfynF.rar">Скачать (RUS/UZB)</a> \n` +
    `<u>ШНК 1.02.17-09</u>	Опорная геодезическая сеть (создание опорных геодезических сетей при инженерно-геодезических изысканиях для строительства). Свод правил	<a href="https://mc.uz/wp-content/up/7i/9OxNNE4iAWJjlwk2AaftzBu4MUlLbY.rar">Скачать (RUS/UZB)</a> \n` +
    `<u>ШНК 1.02.18-09</u>	Съемочная геодезическая сеть (создание планово-высотных геодезических, съемочных сетей при инженерно-геодезических изысканиях для строительства). Свод правил	<a href="https://mc.uz/wp-content/up/f0/n9FUrWmxjGNGN9QffXU9ZcnvfO4ycu.rar">Скачать (RUS/UZB)</a> \n` +
    `<u>ШНК 1.02.19-09</u>	Специальные крупномасштабные топографические планы для строительства. Основные положения	<a href="https://mc.uz/wp-content/up/mO/o4Vgn8ISmCcFiUrp6i1uFUuPs7kffx.rar">Скачать (RUS/UZB)</a> \n` +
    `<u>ШНК 1.02.20-09</u>	Обновление специальных топографических карт масштаба 1:10000 и планов масштабов 1:5000, 1:2000, 1:1000 и 1:500, Свод правил	<a href="https://mc.uz/wp-content/up/gE/FGafl5UTfux6gXNFYuXR5F5w9K7Wpa.rar">Скачать (RUS/UZB)</a> \n` +
    `<u>ШНК 1.02.21-09</u>	Составление и размножение топографических карт и планов для строительства. Свод правил	<a href="https://mc.uz/wp-content/up/bf/TagPJzUHN8zEml4nZMwXmyjDIhyW7b.rar">Скачать (RUS/UZB)</a> \n` +
    `<u>СН 484-76</u>	Инструкция по инженерным изысканиям в горных выработках, предназначенных для размещения объектов народного хозяйства.	<a href="https://mc.uz/wp-content/up/wG/a3lhQdywL7rceLRp495F3e7XlNAZOd.rar">Скачать (RUS)</a> \n`
    // ctx.replyWithHTML(text1);

    ctx.replyWithHTML(text1, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Назад", callback_data: 'two' },
                ],
                [
                    { text: "Menyuga qaytish", callback_data: 'start' },
                ]
            ]
        }
    }).then()
})



bot.action('uch', ctx => {

    ctx.deleteMessage();

    let text2 = `<b>Группа 03. Проектирование и система документации</b> \n\n` + `<u>ШНК 1.03.01-16</u>	Состав, порядок разработки, согласования и утверждения проектной документации на капитальное
    строительство предприятий, зданий и сооружений	<a href="https://mc.uz/wp-content/up/eH/ZS93c9IOGllbBzyUo9EZm6h8jrMLq3.rar">Скачать (RUS)</a>
    <u>ШНК 1.03.02-04</u>	Инструкция о составе, порядке разработки, согласования и утверждения градостроительной документации о планировании развития и застройке территорий	<a href="https://mc.uz/wp-content/up/Xu/gTEoKg9ndhBraN8NkKJgBHPVCmW3F7.rar">Скачать (RUS/UZB)</a>
    <u>КМК 1.03.03-97</u>	Инструкция о составе, порядке разработки , согласования и утверждения ПСД на капитальный ремонт жилых и общественных зданий и сооружений	<a href="https://mc.uz/wp-content/up/u0/Nftd4OymyfKvwxp1NWsiVKAK8yDy5y.rar">Скачать (RUS)</a>
    <u>КМК 1.03.04-97</u>	Инструкция по типовому проектированию	<a href="https://mc.uz/wp-content/up/1Z/YU7oEzEvIgiMJCR9xu0J9zjaA7z4t5.rar">Скачать (RUS/UZB)</a>
    <u>КМК 1.03.05-97</u>	Положение о проектировании и строительстве экспериментальных объектов	<a href="https://mc.uz/wp-content/up/VT/c8xdRTtk1MTFIStkpxazT97YwNmf0o.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 1.03.06-13</u>	Правила проведения Государственной экспертизы предпроектной и градостроительной документации. Правила проведения Государственной экспертизы предпроектной и градостроительной документации	<a href="https://mc.uz/wp-content/up/4a/DS04GCxwfoxeolMHL8yNPMDL33CJz1.rar">Скачать (RUS)</a>
    <u>КМК 1.03.09-97</u>	Положение о главном инженере (главном архитекторе) проекта	<a href="https://mc.uz/wp-content/up/7T/v8fPCwo4vudkenWe7YaCcpB6SPraDX.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №1 КМК 1.03.09-97</u>	Положение о главном инженере (главном архитекторе) проекта	<a href="https://mc.uz/wp-content/up/d5/XJwB7LWsSgr8nXMY77G52UGexfj44V.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 1.03.10-12</u>	Инструкция о составе, порядке разработки, согласования и утверждения градостроительной документации по организации территорий сельхозпредприятий, планированию развития и застройки территорий сельских населенных пунктов	<a href="https://mc.uz/wp-content/up/EI/x5O37KkZiCUXRYFX70yXMu28BjfpZq.rar">Скачать (RUS)</a>
    <u>ШНК 1.03.10-19</u><code>(ЯНГИ)</code>	Қишлоқ хўжалиги корхоналари ҳудудларини ташкил этиш, ривожлантириш ва ривожлантиришни режалаштириш бўйича шаҳарсозлик ҳужжатларини мувофиқлаштириш ва тасдиқлаш таркиби бўйича кўрсатмалар, ишлаб чиқиш тартиби	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-1.03.10-19-instrukciya-apot.pdf">Открыть (UZB)</a>
    <u>ШНК 1.03.11-07</u>	Инструкция о составе, порядке разработки, согласования и утверждения раздела инженерно-технических мероприятий гражданской защиты в генеральных планах городов и других населенных пунктов Республики Узбекистан	<a href="https://mc.uz/wp-content/up/ts/uv0Aif8zIDLDJmtmLrG1hx9GpwM7Y8.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 1.03.13-13</u>	Положение о Генеральном проектировщике	<a href="https://mc.uz/wp-content/up/4G/Z0FJrI1w84g4erSEV3IDGc8O3n81CA.rar">Скачать (RUS)</a>` 
    ctx.replyWithHTML(text2, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'two' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})

bot.action('tort', ctx => {

    ctx.deleteMessage();
    let text3 =`<b>Группа 04. Организация строительства и система технологической документации</b>

    <u>ШНК 1.04.02-05</u>	Капитальный ремонт жилых домов. Нормы проектирования	<a href="https://mc.uz/wp-content/up/38/af1hJ5IHHftZCLnbioGkkRbwINqpKE.rar">Скачать (RUS)</a>
    <u>КМК 1.04.04-99</u>	Повторное использование изделий, оборудования и материалов в строительстве.	<a href="https://mc.uz/wp-content/up/rJ/1mXIEoPG8EErSUTteP11zeg8EiheHl.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 1.04.05-06</u>	Положение о порядке осуществлении реконструкции, перепланировки и переоборудования помещений в многоквартирных домах, обеспечивающих безопасность устойчивости зданий	<a href="https://mc.uz/wp-content/up/dA/39hxJkIU6Xo2rTy3ix3RwUlMTy5x6d.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №1 к ШНК 1.04.05-06</u>	Положение о порядке осуществлении реконструкции, перепланировки и переоборудования помещений в многоквартирных домах, обеспечивающих безопасность устойчивости зданий.	<a href="https://mc.uz/wp-content/up/Bj/zIoe1wtdnRgj19TzNQSts1NhdHCG5u.rar">Скачать (RUS/UZB)</a>
    <u>СН 283-64</u>	Временные нормы продолжительности проектирования	<a href="https://mc.uz/wp-content/up/wq/ag50KzyzCHcV2c6fr3TcXV69aGlDlD.rar">Скачать (RUS)</a>
    <u>СН 531-80</u>	Инструкция о составе, порядке разработки и утверждения схем теплоснабжения населенных пунктов с суммарной тепловой нагрузкой до 116 МВт (1000 Гкал/ч)	<a href="https://mc.uz/wp-content/up/i5/eqDbEV2LqLTR2iQ9LLFHkrFJfBYQVJ.rar">Скачать (RUS)</a>` 
    ctx.replyWithHTML(text3,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'two' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})
