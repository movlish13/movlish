require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')

bot.start((ctx) => {
    sendStarMessage(ctx);
})

bot.start((ctx)=> {
    ctx.reply('Salom men Echo bot');
    ctx.reply(helpMessenger)
})

bot.help(ctx => {
    let text = `<b>Botimiz qaytarishi mumkin bo'lgan komponentlar:</b> \n` + `/start - <code>botni ishga tushirish byrug'i</code> \n` + `/help - yordamchi buyruq \n` + `<pre>Iltimos buruqlarni kirilchada yozing (asosan ruscha)</pre>Masalan: <code> шнк, штукатурка, двер ...</code>`

    ctx.replyWithHTML(text).then()
})

function sendStarMessage(ctx) {
    
    ctx.deleteMessage();

    let startMessage = 'Xush kelibsiz aziz mehmon siz bu yerda ШНК (SHNQ Shaharsozlik Norma va Qoidalari) bilan tanishasiz ';
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
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

bot.on("message", async ctx => {
    const msg = ctx.message.text.toLowerCase()

    if (msg.includes(`шнк`)) {
//         ctx.replyWithHTML(`ШНК (SHNQ SHaharsozlik Norma va Qoidalar) bilan tanishing`)
        sendStarMessage(ctx);
    }
    if (msg.includes(`штукатурка`)) {
        ctx.replyWithHTML(`Е15-2-1-1 Улучшенная штукатурка стен.\nЕ15-2-31-1 Штукатурка откосов.\nЕ15-2-36-1 Штукатурка по Сетке стен.\nВнутренний отделка.\nE15-2-31-1 Штукатурка откосов.\nЕ15-2-16-5 Штукатурка высококачественные стен.\nE46-2-9-2	ОТБИВКА ШТУКАТУРКИ С ПОВЕРХНОСТЕЙ СТЕН И ПОТОЛКОВ КИРПИЧНЫХ`)
    }
    if (msg.includes(`травертин`)) {
        ctx.reply(`Е15-2-39-1 Травертин без ресунки, \nЕ15-2-39-2 Травертин с ресунки, `)
    }
    if (msg.includes('кондиционер')) {
        ctx.replyWithHTML(`Е20-6-18-1 Доп.6 Кондицанер раценкаси`)
    }
    if (msg.includes('бордюр')) {
        ctx.reply(`Е27-2-10-1 Установка Бордюр (бортовых камней)\nЕ68-014-01 РАЗБОРКА БОРТОВЫХ КАМНЕЙ: НА БЕТОННОМ ОСНОВАНИИ\nЕ1504-011-01	ОКРАСКА ФАСАДОВ С ЛЕСОВ С ПОДГОТОВКОЙ ПОВЕРХНОСТИ ИЗВЕСТКОВАЯ (БОРДЮРЫ)`)
    }
    if (msg.includes('ВОДОСТОЧНЫХ ТРУБ')) {
        ctx.replyWithHTML(`Е12-2-8-3 НАВЕСКА ВОДОСТОЧНЫХ ТРУБ.`)
    }
    if (msg.includes('желоб')) {
        ctx.reply(`Е12-1-9-2 УСТРОЙСТВО ЖЕЛОБА.`)
    }
    if (msg.includes('подоконные слив')) {
        ctx.replyWithHTML(`Е12-1-10-1 Устройство мелких покрытий брандмауэры (подоконные слив)`)
    }
    if (msg.includes('доск')) {
        ctx.replyWithHTML(`Е10-1-82-2 Уклад прогонов из досок.\nЕ10-1-82-1 Монтаж прогонов из досок.\nЕ10-1-2-1 Установка Балки, Стоек, Стропил\nЕ10-1-82-2 Уклад прогонов из досок.`)
    }
    if (msg.includes('профнастил')) {
        ctx.reply(`Е12-3-4-1 Установка кровли из ПРОФНАСТИЛ.`)
    }
    if (msg.includes('брусчатк')) {
        ctx.reply(`E11-1-25-1 Брусчатка пешеходные дорожки\nЕ2705-002-01 УСТРОЙСТВО БРУСЧАТЫХ БРУСЧАТКИ 10 СМ\nЕ68-061-01 ДОП. 5 РАЗБОРКА ТРОТУАРОВ И ДОРОЖЕК ИЗ ПЛИТ С ИХ ОТНОСКОЙ И УКЛАДКОЙ`)
    }
    if (msg.includes('щебен')) {
        ctx.reply(`Е11-1-2-4 Устройство подстилающих слоёв ЩЕБЕНЬ.`)
    }
    if (msg.includes('кафел')) {
        ctx.replyWithHTML(`Е11-1-27-5 Кафель пол Клей билан.\nЕ11-1-27-3 Кафель пол Раствор билан.\nЕ15-1-19-5 Облицовки стен кафель. (Клей билан)\nЕ15-1-19-1 Облицовки стен кафель. (Раствор билан)\nЕ11-1-39-1 Устройство плинтусов из КАФЕЛЬ\nE63-7-2	РАЗБОРКА ОБЛИЦОВКИ СТЕН ИЗ ПЛИТ И ПЛИТОК: ГРАНИТНЫХ`)
    }
    if (msg.includes('италлогранит')) {
        ctx.reply(`Е15-1-26-1 ГЛАДКИЙ ОБЛИЦОВКИ СТЕН ИТАЛЛОГРАНИТ.\nE63-7-2	РАЗБОРКА ОБЛИЦОВКИ СТЕН ИЗ ПЛИТ И ПЛИТОК: ГРАНИТНЫХ`)
    }
    if (msg.includes('лексан')) {
        ctx.reply(`Е9-3-22-1 Монтаж Лексан (Козерок)`)
    }
    if (msg.includes('алюпан')) {
        ctx.replyWithHTML(`Е15-1-91-1 Облицовки фасадов АЛЮПАН.\nЕ15-1-92-1 Раскрой АЛЮПАН.\nE15-1-91-4 #ОЧ-3.4-д#К=0,6 ШHК.ДОП.9	ДЕМОНТАЖ ОБЛИЦОВКА ФАСАДА ДЕКОРАТИВНЫМИ ПАНЕЛЯМИ ТИПА «АЛЮКАБОНД»: ПО ГОТОВОМУ КАРКАСУ ДEМОHTАЖ`)
    }
    if (msg.includes('подоконник')) {
        ctx.reply(`Е10-1-35-1 Установка подоконник.\nE56-3-2 СНЯТИЕ ПОДОКОННЫХ ДОСОК: ПЛАСТИКОВОГО`)
    }
    if (msg.includes('окон')) {
        ctx.reply(`Е10-1-36-1 Установка Окон. Алюминиевые.\nЕ10-1-36-2 Установка Окон. Алюминиевые.\nE56-2-2	СНЯТИЕ ОКОННЫХ ПЕРЕПЛЕТОВ: ОСТЕКЛЕННЫХ        `)
    }
    if (msg.includes('двер')) {
        ctx.reply(`Е10-1-37-2 Установка дверей. Алюминиевые.\nЕ10-1-37-1 Установка дверей. Алюминиевые./nЕ10-1-39-1 Установка дверей из МДФ.\nЕ9-4-14-3 Установка дверей. Металические.\nE56-9-5 ШHК.ДОП.5	ДЕМОНТАЖ ДВЕРНЫХ КОРОБОК В КАМЕННЫХ СТЕНАХ: С ОТБИВКОЙ ШТУКАТУРКИ В ОТКОСАХ\nE56-10-1	СНЯТИЕ ДВЕРНЫХ ПОЛОТЕН`)
    }
    if (msg.includes('ОТМОСК')) {
        ctx.replyWithHTML(`Е11-1-2-4 УСТРОЙСТВО ПОДСТИЛАЮЩИХ СЛОЁВ ЩЕБЕНЬ.\nЕ6-1-1-1 УСТРОЙСТВО БЕТОННЫЕ ПОДГОТОВКА.`)
    }
    if (msg.includes('кирпич')) {
        ctx.replyWithHTML(`Е46-4-1-4 РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА (ishlatiladi)\nЕ46-4-1-4 РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА (ishlatilmayd)\nЕ8-2-2-3 Кладка перегородок из кирпича.\nE8-3-2-1 КЛАДКА СТЕН ИЗ ЛЕГКОБЕТОННЫХ КАМНЕЙ БЕЗ ОБЛИЦОВКИ ДО 4 М\nE55-8-2 ШHК.ДОП.5	РАЗБОРКА КИРПИЧНЫХ ПЕРЕГОРОДОК НА ОТДЕЛЬНЫЕ КИРПИЧИ\nE53-2-6 ШHК.ДОП.5	РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА`)
    }
    if (msg.includes('стяжк')) {
        ctx.reply(`Е11-1-11-5 Устройство стяжки.\nЕ11-1-11-6 Устройство стяжек.11-1-11-5`)
    }
    if (msg.includes('линолеум')) {
        ctx.reply(`Е11-1-36-1 Устройство покрытия ЛИНОЛЕУМА.\nЕ11-1-40-3 УСТРОЙСТВО ПЛИНТУСОВ ПЛАСТИКОВЫЕ.`)
    }
    if (msg.includes('землянные работ')) {
        ctx.reply(`E1-2-58-2 КОПАНИЕ ЯМ ВРУЧНУЮ БЕЗ КРЕПЛЕНИЙ ДЛЯ СТОЕК И СТОЛБОВ БЕЗ ОТКОСОВ ГЛУБИНОЙ ДО 0,7 М ГРУППА ГРУНТОВ 2\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nE1-2-5-1	УПЛОТНЕНИЕ ГРУНТА ПНЕВМАТИЧЕСКИМИ ТРАМБОВКАМИ, ГРУППА ГРУНТОВ 1, 2\nE1-1-18-5 ШHК.ДОП.3	РАЗРАБОТКА ГРУНТА С ПОГРУЗКОЙ НА АВТОМОБИЛИ-САМОСВАЛЫ В КОТЛОВАНАХ ОБЪЕМОМ ДО 500 М3, ЭКСКАВАТОРАМИ С КОВШОМ ВМЕСТИМОСТЬЮ 0,25 М3, ГРУППА ГРУНТОВ: 2\nE1-1-31-2	РАЗРАБОТКА ГРУНТА С ПЕРЕМЕЩЕНИЕМ ДО 10 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 96 [130] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-1-31-10 К=4	ПРИ ПЕРЕМЕЩЕНИИ ГРУНТА НА КАЖДЫЕ ПОСЛЕДУЮЩИЕ 10 М ДОБАВЛЯТЬ К НОРМЕ 01-01-031-2\nE1-2-55-2	РАЗРАБОТКА ГРУНТА ВРУЧНУЮ С КРЕПЛЕНИЯМИ В ТРАНШЕЯХ ШИРИНОЙ ДО 2 М, ГЛУБИНОЙ ДО 2 М, ГРУППА ГРУНТОВ 2\nE1-1-33-2	ЗАСЫПКА ТРАНШЕЙ И КОТЛОВАНОВ С ПЕРЕМЕЩЕНИЕМ ГРУНТА ДО 5 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 59 [80] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nС310-1030	ПЕРЕВОЗКА ГРУЗОВ АВТОМОБИЛЕМ НА 30 КМ, КЛАСС ГРУЗА 1
        `)
    }
    if (msg.includes('yer ishlari')) {
        ctx.reply(`E1-2-58-2 КОПАНИЕ ЯМ ВРУЧНУЮ БЕЗ КРЕПЛЕНИЙ ДЛЯ СТОЕК И СТОЛБОВ БЕЗ ОТКОСОВ ГЛУБИНОЙ ДО 0,7 М ГРУППА ГРУНТОВ 2\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nE1-2-5-1	УПЛОТНЕНИЕ ГРУНТА ПНЕВМАТИЧЕСКИМИ ТРАМБОВКАМИ, ГРУППА ГРУНТОВ 1, 2\nE1-1-18-5 ШHК.ДОП.3	РАЗРАБОТКА ГРУНТА С ПОГРУЗКОЙ НА АВТОМОБИЛИ-САМОСВАЛЫ В КОТЛОВАНАХ ОБЪЕМОМ ДО 500 М3, ЭКСКАВАТОРАМИ С КОВШОМ ВМЕСТИМОСТЬЮ 0,25 М3, ГРУППА ГРУНТОВ: 2\nE1-1-31-2	РАЗРАБОТКА ГРУНТА С ПЕРЕМЕЩЕНИЕМ ДО 10 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 96 [130] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-1-31-10 К=4	ПРИ ПЕРЕМЕЩЕНИИ ГРУНТА НА КАЖДЫЕ ПОСЛЕДУЮЩИЕ 10 М ДОБАВЛЯТЬ К НОРМЕ 01-01-031-2\nE1-2-55-2	РАЗРАБОТКА ГРУНТА ВРУЧНУЮ С КРЕПЛЕНИЯМИ В ТРАНШЕЯХ ШИРИНОЙ ДО 2 М, ГЛУБИНОЙ ДО 2 М, ГРУППА ГРУНТОВ 2\nE1-1-33-2	ЗАСЫПКА ТРАНШЕЙ И КОТЛОВАНОВ С ПЕРЕМЕЩЕНИЕМ ГРУНТА ДО 5 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 59 [80] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nС310-1030	ПЕРЕВОЗКА ГРУЗОВ АВТОМОБИЛЕМ НА 30 КМ, КЛАСС ГРУЗА 1
        `)
    }
    if (msg.includes('фундамент')) {
        ctx.reply(`E8-1-2-3	УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ГРАВИЙНОГО /T.70ММ\nE8-1-2-1 УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ПЕСЧАНОГО /T.30ММ\nE26-1-55-2 К=2	ГИДРОИЗОЛЯЦИЯ П/Э ПЛЕНКОЙ В 2 СЛОЯ ЗА 2 PАЗА\nE6-1-1-13	УСТРОЙСТВО ФУНДАМЕНТОВ-СТОЛБОВ БЕТОННЫХ ИЗ БETОHА КЛ.В15 HА С/С ЦEМEHTE\nE12-2-2-2	УСТРОЙСТВО ГИДРОИЗОЛЯЦИЙ ВЕРТИКАЛЬНЫХ ПОВЕРХНОСТЕЙ. ОБМАЗОЧНАЯ БИТУМНАЯ В ОДИН СЛОЙ ПО ВЫРОВНЕННОЙ ПОВЕРХНОСТИ КИРПИЧА И БЕТОНА /В 2 СЛОЯ/\nE12-2-2-3	ДОБАВЛЯЕТСЯ 1 СЛОЙ ДО 2-Х СЛОЕВ\nE6-1-15-7	УСТАНОВКА ЗАКЛАДНЫХ ДЕТАЛЕЙ ВЕСОМ ДО 4 КГ /ЗД-1-11ШT/\nE6-1-1-1	УСТРОЙСТВО БЕТОННОЙ ПОДГОТОВКИ\nE6-1-1-16	УСТРОЙСТВО ФУНДАМЕНТНЫХ ПЛИТ ЖЕЛЕЗОБЕТОННЫХ ПЛОСКИХ\nE6-2-11-2 ШHК.ДОП.7	ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ (С124-25-2	ГОРЯЧЕКАТАННАЯ АРМАТУРНАЯ СТАЛЬ КЛАССА А-III ДИАМ. 22 ММ)\nE6-1-1-5	УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ФУНДАМЕНТОВ ОБЩЕГО НАЗНАЧЕНИЯ ПОД КОЛОННЫ ОБЪЕМОМ ДО 3 М3\nE6-1-24-4	УСТРОЙСТВО СТЕН ПОДВАЛОВ И ПОДПОРНЫХ СТЕН ЖЕЛЕЗОБЕТОННЫХ ВЫСОТОЙ ДО 3 М, ТОЛЩИНОЙ ДО 500 ММ\nE6-1-1-22	УСТРОЙСТВО ЛЕНТОЧНЫХ ФУНДАМЕНТОВ ЖЕЛЕЗОБЕТОННЫХ ПРИ ШИРИНЕ ПОВЕРХУ ДО 1000 ММ\n
        `)
    }
    if (msg.includes('fundament')) {
        ctx.reply(`E8-1-2-3	УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ГРАВИЙНОГО /T.70ММ\nE8-1-2-1 УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ПЕСЧАНОГО /T.30ММ\nE26-1-55-2 К=2	ГИДРОИЗОЛЯЦИЯ П/Э ПЛЕНКОЙ В 2 СЛОЯ ЗА 2 PАЗА\nE6-1-1-13	УСТРОЙСТВО ФУНДАМЕНТОВ-СТОЛБОВ БЕТОННЫХ ИЗ БETОHА КЛ.В15 HА С/С ЦEМEHTE\nE12-2-2-2	УСТРОЙСТВО ГИДРОИЗОЛЯЦИЙ ВЕРТИКАЛЬНЫХ ПОВЕРХНОСТЕЙ. ОБМАЗОЧНАЯ БИТУМНАЯ В ОДИН СЛОЙ ПО ВЫРОВНЕННОЙ ПОВЕРХНОСТИ КИРПИЧА И БЕТОНА /В 2 СЛОЯ/\nE12-2-2-3	ДОБАВЛЯЕТСЯ 1 СЛОЙ ДО 2-Х СЛОЕВ\nE6-1-15-7	УСТАНОВКА ЗАКЛАДНЫХ ДЕТАЛЕЙ ВЕСОМ ДО 4 КГ /ЗД-1-11ШT/\nE6-1-1-1	УСТРОЙСТВО БЕТОННОЙ ПОДГОТОВКИ\nE6-1-1-16	УСТРОЙСТВО ФУНДАМЕНТНЫХ ПЛИТ ЖЕЛЕЗОБЕТОННЫХ ПЛОСКИХ\nE6-2-11-2 ШHК.ДОП.7	ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ (С124-25-2	ГОРЯЧЕКАТАННАЯ АРМАТУРНАЯ СТАЛЬ КЛАССА А-III ДИАМ. 22 ММ)\nE6-1-1-5	УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ФУНДАМЕНТОВ ОБЩЕГО НАЗНАЧЕНИЯ ПОД КОЛОННЫ ОБЪЕМОМ ДО 3 М3\nE6-1-24-4	УСТРОЙСТВО СТЕН ПОДВАЛОВ И ПОДПОРНЫХ СТЕН ЖЕЛЕЗОБЕТОННЫХ ВЫСОТОЙ ДО 3 М, ТОЛЩИНОЙ ДО 500 ММ\nE6-1-1-22	УСТРОЙСТВО ЛЕНТОЧНЫХ ФУНДАМЕНТОВ ЖЕЛЕЗОБЕТОННЫХ ПРИ ШИРИНЕ ПОВЕРХУ ДО 1000 ММ\n
        `)
    }
    if (msg.includes('приямк')) {
        ctx.reply(`E6-1-1-22 УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ПРИЯМОК\nE6-2-11-2 ШHК.ДОП.7 ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ`)
    }
    if (msg.includes('радиатор')) {
        ctx.reply(`E18-3-1-2 УСТАНОВКА РАДИАТОРОВ АЛЮМИНИЕВЫХ\nE18-3-1-2 Установка радиаторов: стальных\nЕ65-19-1 демонтаж радиаторов`)
    }
    if (msg.includes('гипсокартон')) {
        ctx.reply(`E15-7-16-1 ШHК.ДОП.4	ОБШИВКА ОТКОСОВ ГИПСОКАРТОНОМ\nE15-7-18-3 ШHК.ДОП.9	ОБЛИЦОВКА СТЕН "КНАУФ" ГИПСОКАРТОННЫМИ ЛИСТАМИ\nE15-1-52-1 ШHК.ДОП.1 УСТРОЙСТВО ПОДВЕСНОГО ПОТОЛКА ГИПСОКАРТОННЫМИ ПЛИТАМИ КНАУФ ПО МЕТАЛЛИЧЕСКИМ НЕСУЩИМ КОНСТРУКЦИЯМ, ПРОСТОЙ СЛОЖНОСТИ\nE63-10-1	РАЗБОРКА ОБЛИЦОВКИ ИЗ ГИПСОКАРТОННЫХ ЛИСТОВ: СТЕН И ПЕРЕГОРОДОК\nE63-10-2 РАЗБОРКА ОБЛИЦОВКИ ИЗ ГИПСОКАРТОННЫХ ЛИСТОВ: ПОТОЛКОВ`)
    }
    if (msg.includes('армстронг')) {
        ctx.reply(`E15-1-47-15 ШHК.ДОП.4 УСТРОЙСТВО ПОДВЕСНЫХ ПОТОЛКОВ ТИПА "АРМСТРОНГ" ПО КАРКАСУ ИЗ ОЦИНКОВАННОГО ПРОФИЛЯ\nE54-3-4 ШHК.ДОП.8 РАЗБОРКА ПОДШИВКИ ПОТОЛКОВ ИЗ АРМСТРОНГ`)
    }
    if (msg.includes('пластик')) {
        ctx.reply(`E15-7-17-4 ШHК.ДОП.4	ОБЛИЦОВКА КАРКАСОВ ПАНЕЛЯМИ ДЕКОРАТИВНЫМИ ПЛАСТИКОВЫМИ С УСТРОЙСТВОМ КАРКАСА БЕЗ ОТНОСА ОТ ПОТОЛКА\n`)
    }
    if (msg.includes('сердечник')) {
        ctx.reply(`Е0601-035-01	УСТРОЙСТВО СЕРДЕЧНИКОВ`)
    }
    if (msg.includes('сесмапояс')) {
        ctx.reply(`Е0601-035-01 УСТРОЙСТВО СЕЙСМАПОЯСА`)
    }
    if (msg.includes('асфальт')) {
        ctx.reply(`Е2704-001-04 УСТРОЙСТВО ПОДСТИЛАЮЩИХ И ВЫРАВНИВАЮЩИХ СЛОЕВ ЩЕБНЯ\nЕ2706-020-01 УСТРОЙСТВО ПОКРЫТИЯ ТОЛЩИНОЙ 4 СМ ИЗ ГОРЯЧИХ АСФАЛЬТОБЕТОННЫХ СМЕСЕЙ(ТОЛЩИНОЙ 7 СМ)\nЕ2706-021-01 К=6	ПРИ ИЗМЕНЕНИИ ТОЛЩИНЫ ПОКРЫТИЯ НА 0,5 СМ ДОБАВЛЯТЬ К НОРМЕ 27-06-020-1`)
    }
})
