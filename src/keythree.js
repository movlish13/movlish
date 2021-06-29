require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')


bot.action('three', ctx => {
    let priceMessage = 'Подсистема №2. Технические нормы проектирования';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Группа 01", callback_data: 'bir1' },
                        { text: "Группа 02", callback_data: 'ikki1' }
                    ],
                    [
                        { text: "Группа 03", callback_data: 'uch1' },
                        { text: "Группа 04", callback_data: 'tort1' }
                    ],
                    [
                        { text: "Группа 05", callback_data: 'besh' },
                        { text: "Группа 06", callback_data: 'olti' }
                    ],
                    [
                        { text: "Группа 07", callback_data: 'yetti' },
                        { text: "Группа 08", callback_data: 'sakkiz' }
                    ],
                    [
                        { text: "Группа 09", callback_data: 'toqqiz' },
                        { text: "Группа 10", callback_data: 'on' }
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('bir1', ctx => {

    ctx.deleteMessage();
    let text4 = `<b>Группа 01. Общие технические нормы и требования</b>
 

    <u>ШНК 2.01.02-04</u>	Пожарная безопасность зданий и сооружений	<a href="https://mc.uz/wp-content/up/KD/mzD6LTP8NKsFKSjBHv4b4oCWOX8fDK.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.01.02-04 1-сон</u> узгартириш	Бинолар ва иншоотларнинг ёнғин хавфсизлиги	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.01.02-04-uzgartirish-1.pdf">Открыть</a>
    <u>КМК 2.01.03-96</u>	Строительство в сейсмических районах	<a href="https://mc.uz/wp-content/up/hc/rd7fhsvsPS14k6UcCXsa8cCUKZRILH.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.01.04-97</u>	Строительная теплотехника	<a href="https://mc.uz/wp-content/up/px/BzcH9fFft8jdAzQlgOPVb7ZqCacFbY.rar">Скачать (RUS/UZB)</a>
    <u>Пособие к КМК 2.01.04-97</u>	По проектированию новых энергосберегающих решений по строительной теплотехнике	<a href="https://mc.uz/wp-content/up/uo/EOF14vzr7XCKc8lkY8S9cpR8iOB6Ih.rar">Скачать (RUS)</a>
    <u>КМК 2.01.04-18</u>	Қурилиш иссиқлик техникаси	<a href="https://mc.uz/wp-content/uploads/2021/01/kmk-2.01.04-18-kurilish-issiklik-tehnikasi.pdf">Открыть (UZB)</a>
    <u>КМК 2.01.05-98</u>	Естественное и искусственное освещение	<a href="https://mc.uz/wp-content/up/9e/2RoClsTf9gfgaGSbEVqri3lwgWUBha.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.01.05-19</u> <code>ЯНГИ</code>	Табиий ва сунъий ёритиш	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.01.05-19-tabiiy-suniy-yoritish.pdf">Открыть (UZB)</a>
    <u>КМК 2.01.06-97</u>	Перечень единиц физических величин, подлежащих применению в строительстве	<a href="https://mc.uz/wp-content/up/Cw/MrfSf9LcQUEYgDTXHP4Mg3Fhpl7CoF.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.01.07-96</u>	Нагрузки и воздействия	<a href="https://mc.uz/wp-content/up/pX/4gzP2CohrLhn13lYSxUMlvOWh9Tkzb.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.01.08-96</u>	Защита от шума	<a href="https://mc.uz/wp-content/up/hj/S6EOhqobfKmqihSHHvkV5viSUqOpf3.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.01.09-97</u>	Здания и сооружения на посадочных грунтах и подрабатываемых территориях	<a href="https://mc.uz/wp-content/up/Mb/wJvlzEWiZT3eRKTtUHYGepbcqkt6JO.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.01.12-96</u>	Полигон по обезвреживанию и захоронению токсичных промышленных отходов. Основные положения по проектированию	<a href="https://mc.uz/wp-content/up/4w/vDOUTsUT2nwp1feqFjUao3Qr1yaGRP.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №1 к КМК 2.01.12-96</u>	Полигон по обезвреживанию и захоронению токсичных промышленных отходов. Основные положения по проектированию	<a href="https://mc.uz/wp-content/up/6f/jCsJo8XupORNbKHhR5XWupAbnAOMmQ.rar">Скачать (RUS)</a>
    <u>КМК 2.01.14-98</u>	Определение расчетных и гидрологических характеристик	<a href="https://mc.uz/wp-content/up/LG/2M5GpXW4ygIsODZArz60KB7pi0TI3a.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.01.15-05</u>	Положение по техническому обслуживанию жилых зданий	<a href="https://mc.uz/wp-content/up/3V/HhgyHWbLawwnHmZOMAYL2VYpHuFGxQ.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.01.16-97</u>	Правила оценки физического износа жилых зданий	<a href="https://mc.uz/wp-content/up/pD/Jdg8a2BySVoygweOigenRxH2XYhlL8.rar">Скачать (RUS)</a>
    <u>КМК 2.01.17-95</u>	Гражданская оборона и чрезвычайные ситуации. «Для служебного пользования»	<a href="https://mc.uz/wp-content/up/av/xuJfT5B5kZSjBeQRm5kwBLPvZbX9Uk.rar">Скачать (RUS)</a>
    <u>КМК 2.01.18-2000</u>	Нормативы расхода энергии на отопление, вентиляцию и кондиционирование зданий и сооружений	<a href="https://mc.uz/wp-content/up/Fg/5C2RQLd46FrvHeDaKhHqGDLp8NpYTU.rar">Скачать (RUS/UZB)</a>
    <u>Пособие к КМК 2.01.18-2000</u>	По проектированию зданий с учётом новых нормативов расхода энергии	<a href="https://mc.uz/wp-content/up/Bz/VvRnR9JM6sOKJdsFKeIyM4ba3KNkoo.rar">Скачать (RUS)</a>
    <u>КМК 2.01.18-18</u> <code>ЯНГИ</code>	Бинолар ва иншоотлар иситиш, шамоллатиш ва кондисиялаштириш учун энергия сарфи меёлари	<a href="https://mc.uz/wp-content/uploads/2021/01/kmk-2.01.18-18-jenergiya-sarfi-meyorlari.pdf">Открыть (UZB)</a>
    <u>ШНК 2.01.19-09</u>	Определение категорий помещений, зданий и наружных установок по взрывопожарной и пожарной опасности	<a href="https://mc.uz/wp-content/up/Le/MyPALqLasCSpQyMKl0O2lnt44u6n1M.rar">Скачать (RUS)</a>
    <u>ШНК 2.01.20-16</u>	Строительство транспортных сооружений в сейсмических районах	<a href="https://mc.uz/wp-content/up/oU/7CLxyJRvC7AbWDz42dFK66BUi3F21c.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.01.20-16 1-сон</u> узгартириш	Сейсмик худудларда транспорт иншоотлари қурилиши	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.01.20-16-uzgartirish-1.pdf">Открыть</a>
    <u>МСН 2.03.02-2002</u>	Инженерная защита территорий, зданий и сооружений от опасных геологических процессов. основные положения	<a href="https://mc.uz/wp-content/up/3h/lnoiIBN2h5QPqhfsKD0GDLN2qPVvTR.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text4, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('ikki1', ctx => {

    ctx.deleteMessage();
    let text5 = `<b>Группа 02. Основания и фундаменты</b>
    
    <u>КМК 2.02.01-98 2-сон узгартириш</u>	Бино ва иншоотлар асослари	<a href="https://mc.uz/wp-content/uploads/2021/01/kmk-2.02.01-98-uzgartirish-2.pdf">Открыть</a>
    <u>КМК 2.02.02-98</u>	Основания гидротехнических сооружений	<a href="https://mc.uz/wp-content/up/Et/bsJtLA13GkaQZWPToVAR3so3MlqlcD.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.02.03-13</u>	Свайные фундаменты	<a href="https://mc.uz/">Скачать</a>
    <u>КМК 2.02.03-13 1-сон узгартириш</u>	Қозиқли пойдеворлар <a href="https://mc.uz/wp-content/uploads/2021/01/kmk-2.02.03-13-uzgartirish-1.pdf">Открыть</a>
    <u>КМК 2.02.05-98</u>	Фундаменты машин с динамическими нагрузками	<a href="https://mc.uz/wp-content/up/NH/976yh5lPQPh61W5ERjLAfNv8m1D7bG.rar">Скачать (RUS/UZB)</a>`
    ctx.replyWithHTML(text5, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})



bot.action('uch1', ctx => {

    ctx.deleteMessage();
    let text6 = `<b>Группа 03. Строительные конструкции (железобетонные, бетонные, стальные, арматурные, деревянные, комбинированные и др.)</b>
    
    <u>КМК 2.03.01-96</u>	Бетонные и железобетонные конструкции	<a href="https://mc.uz/wp-content/up/54/BI5FdWEoGkX0S3qo6VRB8liWX3UOYf.rar">Скачать (UZB)</a>
    <u>КМК 2.03.02-96</u>	Бетонные и железобетонные конструкции из плотного силикатного бетона	<a href="https://mc.uz/wp-content/up/Bn/H0ATcBKTZwkDnQRWluKYLq9wMFWTTq.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.03-96</u>	Армоцементные конструкции	<a href="https://mc.uz/wp-content/up/4i/QXk7o9VF115Z3Ce008gSsDJxtiLSBF.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.04-98</u>	Бетонные и железобетонные конструкции, предназначенные для работы в условиях повышенных и высоких температур	<code>Файл не существует</code>
    <u>ШНК 2.03.05-13</u>	Стальные конструкции. Нормы проектирования	<a href="https://mc.uz/wp-content/up/dW/WNBVLkxRU9pcTmOHIcr2qYhuHeHTNx.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.06-97</u>	Алюминиевые конструкции. Технические нормы проектирования	<a href="https://mc.uz/wp-content/up/fV/7NhpcIM66RiaY1hHDXGSjfuWta0EK1.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.07-98</u>	Каменные и армокаменные конструкции	<a href="https://mc.uz/wp-content/up/9J/hVUCJxfaorNIdkhz8FTSkFfsuGk3fC.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.08-98</u>	Деревянные конструкции	<a href="https://mc.uz/wp-content/up/Gw/docu3VU4RG1ezMz4TQ1szWdlaiT8AB.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.09-98</u>	Асбестоцементные конструкции	<a href="https://mc.uz/wp-content/up/VS/nxf6tysAbqPOJMeGNDJxxlFC75iLzc.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.10-95</u>	Крыши и кровли	<a href="https://mc.uz/wp-content/up/BF/iPbWqQrwzJH9Dte5ougBG0aCRh7qFw.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.10-19</u> <code>(ЯНГИ)</code>	Том ва том қопламалар	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.03.10-19-tomlar.pdf">Открыть (UZB)</a>
    <u>Пособие к КМК 2.03.10-95</u>	По проектированию крыш и кровель энергоэффективных зданий	<a href="https://mc.uz/wp-content/up/eb/F4gIpCRmNYvWF7XL5syTQXxBeIt7ms.rar">Скачать (RUS)</a>
    <u>КМК 2.03.11-96</u>	Защита строительных конструкций от коррозии	<a href="https://mc.uz/wp-content/up/Av/DSgm8ziXMageZPH9VqwF6e0016e9YX.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.13-97</u>	Полы	<a href="https://mc.uz/wp-content/up/le/fPDm6HmCcMvcxrCl07T86p0m6S4zws.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.03.13-19</u> <code>(ЯНГИ)</code>	Поллар	<a href="https://mc.uz/wp-content/uploads/2021/01/kmk-2.03.13-19-pollar.pdf">Открыть (UZB)</a>
    <u>СН 497-77</u>	Временная инструкция по проектированию, монтажу и эксплуатации воздухоопорных пневматических сооружений	<a href="https://mc.uz/wp-content/up/Tk/Ma0izTGvRbbMoCjOSpWmwe4uupYSw8.rar">Скачать (RUS)</a>
    <u>СН 428-74</u>	Указания по проектированию монтажу и эксплуатации конструкций из профильного стекла	<a href="https://mc.uz/wp-content/up/yn/mBN2y8BkhlI3fC6Oz2GFrVefn4SLCH.rar">Скачать (RUS)</a>
    <u>ШНК 2.03.14-18 1-сон узгартириш</u>	Композит полимерли арматурали бетон конструкциялари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.03.14-18-uzgartirish-1.pdf">Открыть</a>`
    ctx.replyWithHTML(text6, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})

bot.action('tort1', ctx => {

    ctx.deleteMessage();
    let text7 = `<b>Группа 04. Инженерное оборудование зданий и сооружений. Внешние сети (теплоснабжение, отопление, вентиляция, кондиционирование воздуха, газоснабжение, слаботочные системы, мусороудаление)</b>
    
    <u>КМК 2.04.01-98</u>	Внутренний водопровод и канализация зданий	<a href="https://mc.uz/wp-content/up/ta/QeO1tkA7o2ra1LeK8GSUyYxb1qPNwd.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №2 к КМК 2.04.01-98</u>	Внутренний водопровод и канализация зданий	<a href="https://mc.uz/wp-content/up/C9/DCyeklNJ1CdIHuvsd6xbLeRZPsuM7Y.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.02-97</u>	Водоснабжение. Наружные сети и сооружения	<a href="https://mc.uz/wp-content/up/8T/TqoLbHYFKqKML2ZFPK3XL3g2YksMe3.rar">Скачать (RUS)</a>
    <u>Изменение №1 к КМК 2.04.02-97</u>	Водоснабжение. Наружные сети и сооружения	<a href="https://mc.uz/wp-content/up/9k/sDZH5lqhHggbDDYwj8H3pd0vAljPfl.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.02-19</u> <code>(ЯНГИ)</code>	Сув таьминоти. Ташқи тармоқлар ва иншоотлар	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.04.02-19-tashki-suv-tarmoklari.pdf">Открыть (UZB)</a>
    <u>КМК 2.04.03-97</u>	Канализация. Наружные сети и сооружения	<a href="https://mc.uz/wp-content/up/l3/xhVXKH3dkVkQP2vi75WZcqDU9AJi4R.rar">Скачать (RUS)</a>
    <u>КМК 2.04.04-97</u>	Инструкция по проектированию и монтажу сетей водоснабжения и канализации из пластмассовых труб	<a href="https://mc.uz/wp-content/up/XU/8iXYulZUzDsCzVM7UBrDW0UgxlZpxX.rar">Скачать</a>
    <u>КМК 2.04.05-97</u>	Отопление вентиляция и кондиционирование	<a href="https://mc.uz/wp-content/up/V7/6q5SNhmdlknGATdepQD5Be7YQzbwiX.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №2 к КМК 2.04.05-97</u>	Отопление вентиляция и кондиционирование	<a href="https://mc.uz/wp-content/up/OK/Wg8GzHQ0iKaRF3I8gA81DXHyxThXBz.rar">Скачать (RUS)</a>
    <u>Пособие к КМК 2.04.05-97</u>	По проектированию новых энергосберегающих решений по отоплению, вентиляции и кондиционированию	<a href="https://mc.uz/wp-content/up/vA/zahe1L2rirId4RenhKI1G88eUGPUVZ.rar">Скачать (RUS)</a>
    <u>КМК 2.04.06-96</u>	Инструкция по проектированию технологических трубопроводов из стеклянных труб	<a href="https://mc.uz/wp-content/up/mp/WMsxNOkn6wBN1QNl53TDwLdYMkP0Se.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.07-99</u>	Тепловые сети	<a href="https://mc.uz/wp-content/up/3D/6zsE1Zi1YouLSQY5UVqBawSXTUwa9O.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.04.08-13</u>	Газоснабжение. Нормы проектирования	<a href="https://mc.uz/wp-content/up/Ug/lp24KGL4lmMDHCUK9d0O91pG2QrIiy.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.04.09-07</u>	Пожарная автоматика зданий и сооружений	<a href="https://mc.uz/wp-content/up/Ym/956rhXbhJNqzJoNrGcNfPLbJyjKD7L.rar">Скачать (RUS)</a>
    <u>КМК 2.04.10-97</u>	Инструкция по проектированию технологических стальных трубопроводов Ру до 10 Мпа	<a href="https://mc.uz/wp-content/up/4D/C8cYh3kRhM9ilKoo9k2JczWdnuWtMU.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.11-98</u>	Инструкция по проектированию технологических трубопроводов из пластмассовых труб	<a href="https://mc.uz/wp-content/up/iY/x9BQEr710QYAOJQx83QJup413hpS1g.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.12-97</u>	Расчет на прочность стальных трубопроводов	<a href="https://mc.uz/wp-content/up/Gg/6FBGcxcPtarFwFpMfyLnjYC15skASx.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.13-99</u>	Котельные установки	<a href="https://mc.uz/wp-content/up/UU/nDWsiP0SmLC6EgMlon33qmwDFGHDa1.rar">Скачать (RUS)</a>
    <u>КМК 2.04.14-96</u>	Тепловая изоляция оборудования и трубопроводов	<a href="https://mc.uz/wp-content/up/Jk/LXvsoLul5opYbHFTCA9eXYIeuNatnC.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.16-96</u>	Установка солнечного горячего водоснабжения	<a href="https://mc.uz/wp-content/up/gQ/jqWX2XgF3DN8aGB8T3gt0NffUAYP5S.rar">Скачать (RUS)</a>
    <u>КМК 2.04.16-18</u> <code>(ЯНГИ)</code>	Қуёшли иссиқ сув таъминоти	<a href="https://mc.uz/wp-content/uploads/2021/01/kmk-2.04.16-18-kuyoshli-issik-suv.pdf">Открыть (UZB)</a>
    <u>КМК 2.04.17-98</u>	Электрооборудование жилых и общественных зданий	<a href="https://mc.uz/wp-content/up/86/y9ILu5AmHGMCS3QoKgFoXViKaDwcdo.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.17-19</u> <code>(ЯНГИ)</code>	Турар жой ва жамоат биноларини электр жихозлари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.04.17-19-jelektr-jihozlash.pdf">Открыть (UZB)</a>
    <u>КМК 2.04.18-97</u>	Инструкция по проектированию наружного освещения городов, поселков и сельских населенных пунктов	<a href="https://mc.uz/wp-content/up/Bd/BogNU38MTj9hBLcqF1PVOrKaU46DNw.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.04.20-98</u>	Устройство связи сигнализации и диспетчеризации инженерного оборудования жилых и общественных зданий	<a href="https://mc.uz/wp-content/up/CC/L4icHqX2W29WLTl5CWPPzctZ2XReby.rar">Скачать (RUS/UZB)</a>
    <u>СН 496-77</u>	Временная инструкция по проектированию сооружений для очистки поверхностных сточных вод	<a href="https://mc.uz/wp-content/up/vs/6fjrzXfY6bMYSwPJY6I0jPV0bPK1UL.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text7, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('besh', ctx => {

    ctx.deleteMessage();
    let text8 = `<b>Группа 05. Сооружения транспорта (в т.ч. магистральные трубопроводы)</b>
    
    <u>КМК 2.05.01-96</u>	Железные дороги колеи 1520 мм.	<a href="https://mc.uz/wp-content/up/KS/gbcuK8CoHWCyZQHIxVd8i56o1uocWE.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.05.01-19</u> <code>(ЯНГИ)</code>	Темир йўл излари 1520мм. Лойихалаш меъёрлари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.05.01-19-temir-yul-1520mm.pdf">Открыть (UZB)</a>
    <u>ШНК 2.05.02-07</u>	Автомобильные дороги	<a href="https://mc.uz/wp-content/up/lP/SdnqZaqQOziZOUBiZ8P8r4ce2X7q0m.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №1 к ШНК 2.05.02-07</u>	Автомобильные дороги	<a href="https://mc.uz/wp-content/up/Xa/HcgDhsEFz13zNPwuT83xcByVW2Acef.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.05.02-07 2-сон узгартириш</u>	Автомобиль йўллари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.05.02-07-uzgartirish-2.pdf">Открыть</a>
    <u>ШНК 2.05.02-07 3-сон узгартириш</u>	Автомобиль йўллари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.05.02-07-uzgartirish-3.pdf">Открыть</a>
    <u>ШНК 2.05.03-12</u>	Мосты и трубы	<a href="https://mc.uz/wp-content/up/9z/I1r3jJCQnINHboKrEWhjU9rUzijc4q.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.05.03-12 2-сон узгартириш</u>	Кўприклар ва қувурлар	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.05.03-12-ozgartirish-2.pdf">Открыть</a>
    <u>КМК 2.05.04-97</u>	Метрополитены	<a href="https://mc.uz/wp-content/up/Gn/1DAyyONpFaVT3D7xfeYBWm4t08ewbg.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.05.05-96</u>	Тоннели железнодорожные и автодорожные	<a href="https://mc.uz/wp-content/up/1g/Tj5KcsOOfw2Og08RMLkTpi6ab75fXD.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.05.06-97</u>	Магистральные трубопроводы	<pre>Файл не существует</pre>
    <u>СНиП 2.05.07-91</u>	Промышленный транспорт	<a href="https://mc.uz/wp-content/up/Ca/7arrD0JGKUS1Rongj1fzMcQjMk2bF0.rar">Скачать (RUS)</a>
    <u>КМК 2.05.08-97</u>	Аэродромы	<a href="https://mc.uz/wp-content/up/Ol/q9JosQIK9HAveFJcFjBZCGGcT5Veou.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.05.09-97</u>	Трамвайные и троллейбусные линии	<a href="https://mc.uz/wp-content/up/AK/k2gPQ7tE8RyspZMXcfhPBPizZNKNsz.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.05.10-97</u>	Указания по проектированию земельного полотна железных дорог	<pre>Файл не существует</pre>
    <u>КМК 2.05.11-95</u>	Внутрихозяйственные автомобильные дороги в колхозах, совхозах, сельскохозяйственных предприятиях и организациях	<a href="https://mc.uz/wp-content/up/aA/j6hmSSi08GDN1aWkXrhbgL78SijRmI.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.05.12-97</u>	Нефтепродуктопроводы, прокладываемые на территории городов и других населенных пунктов	<a href="https://mc.uz/wp-content/up/5q/uH47jdXsCv7oV4eg58Ak4CkUf1l7pf.rar">Скачать (RUS/UZB)</a>`;

    ctx.replyWithHTML(text8, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('olti', ctx => {

    ctx.deleteMessage();
    let text9 = `<b>Группа 06. Гидротехнические, энергетические и мелиоративные системы сооружения</b>
    
    <u>КМК 2.06.01-97</u>	Гидротехнические сооружения. Основные положения проектирования	<a href="https://mc.uz/wp-content/up/gm/zucRaHjoUjU24whSYwCLWnCcBVgEsZ.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.06.02-98</u>	Тоннели гидротехнические	<a href="https://mc.uz/wp-content/up/cN/X21RsUjnNmacqTvcGk8WYSejuwE1bC.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №1 к КМК 2.06.02-98</u>	Тоннели гидротехнические	<a href="https://mc.uz/wp-content/up/rm/zh0Pm0y9cUSugHITmYcPdCSxWUdxd6.rar">Скачать (RUS)</a>
    <u>ШНК 2.06.03-12</u>	Оросительные системы. Нормы проектирования	<a href="https://mc.uz/wp-content/up/s0/RD4Oc36z5ywNpx2rROoHiRNMQhCt9p.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.06.04-97</u>	Нагрузки и воздействия на гидротехнические сооружения (волновые, ледовые и от судов)	<pre>Файл не существует</pre>
    <u>КМК 2.06.05-98</u>	Плотины из грунтовых материалов	<a href="https://mc.uz/wp-content/up/Z4/Y44QLPABG1jAjsJ90ZCrLusNUnTX8x.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №1 к КМК 2.06.05-98</u>	Плотины из грунтовых материалов	<a href="https://mc.uz/wp-content/up/r9/QsF3s4SQfHsnqvQohizNplstHsn0YJ.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.06.06-98</u>	Плотины бетонные и железобетонные	<a href="https://mc.uz/wp-content/up/RT/q7rTnDhlIuoNzYRjFCQiyPe8lWXSZD.rar">Скачать (RUS/UZB)</a>
    <u>Изменение №1 к КМК 2.06.06-98</u>	Плотины бетонные и железобетонные	<a href="https://mc.uz/wp-content/up/cV/QieiEYtiS7FSCBJEJOFFArYNpDOsBT.rar">Скачать (RUS)</a>
    <u>КМК 2.06.07-98</u>	Подпорные стены, судоходные шлюзы. Рыбопропускные и рыбозащитные сооружения	Скачать <a href="https://mc.uz/wp-content/up/by/BfCw5oQmyzKSNACxFqWyxVPRNPDcRb.rar">(RUS/UZB)</a>
    <u>КМК 2.06.08-97</u>	Бетонные и железобетонные конструкции гидротехнических сооружений	<a href="https://mc.uz/wp-content/up/xK/Mx17AdJ9JEPV0kWMvShR5H8u84RU8L.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.06.11-04</u>	Строительство в сейсмических районах. Гидротехнические сооружения	<a href="https://mc.uz/wp-content/up/7q/G2QGq0xKjvEjzheDQXIUmf2QYVJUy0.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.06.12-19</u> <code>(ЯНГИ)</code>	Сув оқимини бошқариш учун сув омборлари. Лойиҳалаш нормалари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.06.12-19-suvni-boshkarish-suv-omborlari.pdf">Открыть (UZB)</a>
    <u>СН 522-79</u>	Инструкция по проектированию, строительству и эксплуатации гидротехнических сооружений на подрабатываемых горными работами территориях	<a href="https://mc.uz/wp-content/up/KQ/bf7wsX4YxamksoRcWkxi7hTphru1du.rar">Скачать (RUS)</a>
    <u>СниП II-58-75</u>	Электростанции тепловые	<a href="https://mc.uz/wp-content/up/DW/ZaW5xPFfATFp7lSNIy7ngWHPJ97aut.rar">Скачать (RUS)</a>
    <u>СниП 2.06.14-85</u>	Защита горных выработок от подземных и поверхностных вод.	<a href="https://mc.uz/wp-content/up/77/y5fcbOWNtluuVlhkh9YZK9X0AR1lwZ.rar">Скачать (RUS)</a>
    <u>СниП 2.06.15-85</u>	Инженерная защита территорий от затопления и потопления	<a href="https://mc.uz/wp-content/up/82/IcQC4imPsL0Uz0WX0bDWii4RfKFShu.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text9, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('yetti', ctx => {

    ctx.deleteMessage();
    let text10 = `<b>Группа 07. Градостроительство</b>
    
    <u>ШНК 2.07.01-03</u>	Градостроительство. Планирование развития застройки территорий городских и сельских населенных пунктов.	<a href="https://mc.uz/wp-content/up/mP/ubChrPYuKzciOwtbcrmuDWk3UW31zZ.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.07.01-03 2-сон узгартириш</u>	Шахарсозлик. Шаҳар ва қишлоқ аҳоли пунктлари ҳудудларини ривожлантириш ва қурилишни режалаштириш	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.07.01-03-uzgartirish-2.pdf">Открыть</a>
    <u>ШНК 2.07.01-03 3-сон узгартириш</u>	Шахарсозлик. Шаҳар ва қишлоқ аҳоли пунктлари ҳудудларини ривожлантириш ва қурилишни режалаштириш	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.07.01-03-uzgartirish-3.pdf">Открыть</a>
   <u>ШНК 2.07.02-07</u>	Проектирование среды жизнедеятельности с учетом потребностей инвалидов и маломобильных групп населения	<a href="https://mc.uz/wp-content/up/5w/z9DY3uVprLHJSbFYiCbiopQIeNScPm.rar">Скачать (RUS/UZB)</a>
    <u>Изменение № 1 к ШНК 2.07.02-07</u>	Проектирование среды жизнедеятельности с учетом потребностей инвалидов и маломобильных групп населения	<a href="https://mc.uz/wp-content/up/Pb/XWG6UvDujrEMcN7JFvrweQrEPq2R72.rar">Скачать (UZB)</a>
    <u>КМК 2.07.03-97</u>	Ограждение территорий предприятий, зданий и сооружений	<a href="https://mc.uz/wp-content/up/48/nhF1AYUA4hhZAEFW5IHa7EAdnFTJ6M.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.07.04-12</u>	Архитектурно-планировочная организация территорий сельскохозяйственных предприятий	<a href="https://mc.uz/wp-content/up/Z3/rTOK0Zlz20QSuAEtdogRTz31jhOx8i.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.07.04-19</u> <code>(ЯНГИ)</code>	Қишлоқ хўжалиги корхоналари ҳудудларини архитектура-режалаштиришни ташкил қилиш	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.07.04-19-apot.pdf">Открыть (UZB)</a>
    <u>СН 551-82</u>	Инструкция по проектированию и строительству противофильтрационных устройств из полиэтиленовой пленки для искусственных водоемов	<a href="https://mc.uz/wp-content/up/lF/j3nsRDW0Mjhqct09q91biMSW0ZU5Hu.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text10, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})

bot.action('sakkiz', ctx => {

    ctx.deleteMessage();
    let text11 = `<b>Группа 08. Жилые общественные здания и сооружения</b>
    
    <u>ШНК 2.08.01-05</u>	Жилые здания	<a href="https://mc.uz/wp-content/up/9c/McP3gQyVQBKG9tO8agepIj2CsiaC7R.rar">Скачать (RUS/UZB)</a>
    <u>Изменение № 1 к ШНК 2.08.01-05</u>	Жилые здания	<a href="https://mc.uz/wp-content/up/VM/TB1R6EB0Ght3N3H7yhzPOqKSIfr1eg.rar">Скачать (RUS)</a>
    <u>Изменение № 2 к ШНК 2.08.01-05</u>	Жилые здания	<a href="https://mc.uz/wp-content/up/Tt/Vs4qyrtNFsQbwNfNNkX3tIuJs06nn8.rar">Скачать (UZB)</a>
    <u>ШНК 2.08.01-05 5-сон узгартириш</u>	Турар жой бинолари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.08.01-05-uzgartirish-5.pdf">Открыть</a>
    <u>ШНК 2.08.01-19</u> <code>(ЯНГИ)</code>	Турар жой бинолари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.08.01-19-turar-joy-binolari.pdf">Открыть (UZB)</a>
    <u>ШНК 2.08.02-09</u>	Общественные здания и сооружения	<a href="https://mc.uz/wp-content/up/du/BVHKPRWMHuxaZzoACsjobYmQxF2TD4.rar">Скачать (RUS/UZB)</a>
    <u>Изменение № 2 к ШНК 2.08.02-09</u>	Общественные здания и сооружения	<a href="https://mc.uz/wp-content/up/GN/PGv6TgA1xic9SSUkEXXFyF0n8AxUAR.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.08.02-09 3-сон узгартириш</u>	Жамоат бино ва иншоотлари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.08.02-09-uzgartirish-3.pdf">Открыть</a>
    <u>Пособие к ШНК 2.08.02-09</u>	По проектированию новых энергосберегающих решений общественных зданий	<a href="https://mc.uz/wp-content/up/Ib/4oXMKRvgDxpeeSeApcsKKuYDSvlxuE.rar">Скачать (RUS)</a>
    <u>ШНК 2.08.03-09</u>	Санатории	<a href="https://mc.uz/wp-content/up/k5/GhtuSGgku6I5Jd71W8SIvjzqILoTpq.rar">Скачать (RUS)</a>
    <u>КМК 2.08.04-04</u>	Административные здания	<a href="https://mc.uz/wp-content/up/J5/FOXzUEy4wnaIrSMvHOm073xcTp1rfq.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.08.05-97</u>	Здания и сооружения приспосабливаемые под лечебные учреждения	<a href="https://mc.uz/wp-content/up/6R/Xi2PKo7OYsU2LVm132mF7Jhkhmpc1X.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.08.06-97</u>	Санитарно-эпидемиологические станции	<a href="https://mc.uz/wp-content/up/mK/V0tuNk213LLrMjz2UZEHBSb4euFYoN.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.08.07-09</u>	Специализированные учебно-воспитательные учреждения для детей с нарушениями в физическом и умственном развитии	<a href="https://mc.uz/wp-content/up/2W/18R0PLEmVF2eE3uR640yJIrBscFDVq.rar">Скачать (RUS)</a>`
    ctx.replyWithHTML(text11,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('toqqiz', ctx => {

    ctx.deleteMessage();
    let text12 = `<b>Группа 09. Производственные административно-бытовые здания и сооружения</b>
    
    <u>СниП II-89-80</u>	Генеральные планы промышленных предприятий	<a href="https://mc.uz/wp-content/up/KD/SfagSoiE7JCdtPjQFtLtAG9RTgDMq7.rar">Скачать (RUS)</a>
    <u>КМК 2.09.01-96</u>	Генеральные планы сельскохозяйственных предприятий	<a href="https://mc.uz/wp-content/up/w3/DPO9x5TcepBOljsRxoYqAjTQDWQQOx.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.09.01-19</u> <code>(ЯНГИ)</code>	Қишлоқ хўжалиги корхоналарининг бош режалари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.09.01-19-kh-korhonalari-br.pdf">Открыть (UZB)</a>
    <u>СниП 2.09.02-85</u>	Производственные здания	<a href="https://mc.uz/wp-content/up/jQ/yElRoLUwV9fQdhoFakjg4VFjWXz1bu.rar">Скачать (RUS)</a>
    <u>ШНК 2.09.02-19</u> <code>(ЯНГИ)</code>	Саноат бинолари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.09.02-19-ishlab-chikarish-binolar.pdf">Открыть (UZB)</a>
    <u>КМК 2.09.03-02</u>	Сооружения промышленных предприятий <a href="https://mc.uz/wp-content/up/9Y/GYGtyUfTlXJ3FWVfDtx7xKBu2UaqNU.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.09.04-09</u>	Административные и бытовые здания предприятий	<a href="https://mc.uz/wp-content/up/wR/SM0WDQBCbXhDw8gc6pGDLxCHcyfMWF.rar">Скачать (RUS)</a>
    <u>КМК 2.09.06-98</u>	Склады лесных материалов. Противопожарные нормы проектирования.	<a href="https://mc.uz/wp-content/up/Cj/yhrStccmGh1EHQpOwQM77zWoak5gFp.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.09.07-96</u>	Животноводческие, птицеводческие, звероводческие здания и сооружения	<a href="https://mc.uz/wp-content/up/Mc/V4GXRkpotmS5q6iznke8wFR8ewcW9d.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.09.08-97</u>	Теплицы и парники	<a href="https://mc.uz/wp-content/up/tE/OTf5TqLNQ2TfWJQVSI6DDaCJEvnA0f.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.09.09-09</u>	Предприятия, здания и сооружения по хранению и переработке зерна	<a href="https://mc.uz/wp-content/up/I3/nLgdnJ4OCTU5MXxJhWmESegMsURjAS.rar">Скачать (RUS)</a>
    <u>ШНК 2.09.10-07</u>	Здания и помещения для хранения и переработки сельскохозяйственной продукции	<a href="https://mc.uz/wp-content/up/rD/I2DPu545HAKRnmxQD0m7BNl62nUEve.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.09.11-97</u>	Склады сухих минеральных удобрений и химических средств защиты растений	<a href="https://mc.uz/wp-content/up/dL/84rOj3mgOKphlEVevQ81M7Mf418Rlj.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.09.12-09</u>	Складские здания	<a href="https://mc.uz/wp-content/up/UN/RBYAhMSi3Djmir7M8jVGt7kDc6gfUl.rar">Скачать (RUS)</a>
    <u>КМК 2.09.15-97</u>	Холодильники	<a href="https://mc.uz/wp-content/up/TT/a2YC0az63p3D57tRrrw8xz86lB4DF4.rar">Скачать (RUS)</a>
    <u>СН 181-70</u>	Указания по проектированию цветовой отделки интерьеров производственных зданий промышленных предприятий	<a href="https://mc.uz/wp-content/up/IN/LfmIhk15c2OwsEqquhkfhOunBXVQyz.rar">Скачать (RUS)</a>
    <u>СниП 2.11.04-85</u>	Подземные хранилища нефти, нефтепродуктов и сжиженных газов	<pre>Файл не существует</pre>
    <u>КМК 2.09.19-97</u>	Склады нефти и нефтепродуктов	<a href="https://mc.uz/wp-content/up/BX/5QUhcXPEh4hninePCuOOye9gdcROt9.rar">Скачать (UZB)</a>
    <u>ШНК 2.09.20-08</u>	Автозаправочные станции	<a href="https://mc.uz/wp-content/up/Xp/HavWmcrk7NLOqryERnJ0e7Hi76YDi6.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.09.20-08 3-сон узгартириш</u>	Автомобилларга ёқилғи қуйиш шахобчалари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.09.20-08-uzgartirish-3.pdf">Открыть</a>
    <u>ШНК 2.09.21-13</u>	Пожарные Депо	<a href="https://mc.uz/wp-content/up/14/33CuLjjmPRFVsvhOU9IgVlkVXCZoqW.rar">Скачать (RUS/UZB)</a>
    <u>СниП II-94-80</u>	Подземные горные выработки	<a href="https://mc.uz/wp-content/up/Rj/NWlrj1STJJpKFIqhccqbRShnbIjZVr.rar">Скачать (RUS)</a>`;
    ctx.replyWithHTML(text12, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


bot.action('on', ctx => {

    ctx.deleteMessage();
    let text13 = `<b>Группа 10. Нормы отвода земель</b>
    
    <u>КМК 2.10.01-97</u>	Нормы отвода земель для магистральных трубопроводов	<a href="https://mc.uz/wp-content/up/Sr/5W25KayITGtesVmur3KcHoTFdfP9cP.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.02-97</u>	Нормы отвода земель для предприятий рыбного хозяйства.	<a href="https://mc.uz/wp-content/up/zD/kjCDuEgnfAo5iZXUr2vUUkYngSBszL.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.03-97</u>	Нормы отвода земель для магистральных водоводов и канализационных коллекторов	<a href="https://mc.uz/wp-content/up/eU/jkpb0dP2HysGM4KnulzN7uaqP9wNQt.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.04-97</u>	Нормы отвода земель для аэропортов	<a href="https://mc.uz/wp-content/up/Z4/rJ65zGuB5P9PUn0oCTPBuk21phQEUc.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.05-97</u>	Нормы отвода земель для нефтяных и газовых скважин	<a href="https://mc.uz/wp-content/up/8F/Mql8f0EHPyk0Om9Rb8p6kvBCFdRE3z.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.06-97</u>	Нормы отвода земель для линий связи	<a href="https://mc.uz/wp-content/up/Ms/nf8CT4npinbseIjkGTnawRGKbfuaWP.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.07-97</u>	Нормы отвода земель для сооружений геологоразведочных скважин	<a href="https://mc.uz/wp-content/up/yi/Q83JzyxDMjzbOjnKCx9EF1dbwLnva8.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.08-97</u>	Нормы отвода земель для электрических сетей напряжением 0,4-750 кв	<a href="https://mc.uz/wp-content/up/g9/k42mNRQgytOZZ1pLiydMT8GBNxBlFS.rar">Скачать (RUS/UZB)</a>
    <u>ШНК 2.10.09-10</u>	Нормы отвода земель для размещения автомобильных дорог и объектов дорожного сервиса	<a href="https://mc.uz/wp-content/up/1Z/DFtHHZupkYTYv6EeG7vzyAV6p9QL0P.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.10-97</u>	Нормы отвода земель для железных дорог	<a href="https://mc.uz/wp-content/up/RM/8Q4GF5PzhilvBn7fxUrh15hWZc5lgJ.rar">Скачать (RUS/UZB)</a>
    <u>КМК 2.10.10-19</u> <code>(ЯНГИ)</code>	Темир йўллар учун ер ажратиш меъёрлари	<a href="https://mc.uz/wp-content/uploads/2021/01/shnk-2.10.10-19-temir-yul-zemotvod.pdf">Открыть (UZB)</a>
    <u>КМК 2.10.11-97</u>	Нормы отвода земель для мелиоративных каналов	<a href="https://mc.uz/wp-content/up/xM/Kb9glY8tPxBWcaSOWxCfFYONZVnarf.rar">Скачать (RUS/UZB)</a>`
    ctx.replyWithHTML(text13, 
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Назад", callback_data: 'three' },
                    ],
                    [
                        { text: "Menyuga qaytish", callback_data: 'start' },
                    ]
                ]
            }
        }
    )
})


