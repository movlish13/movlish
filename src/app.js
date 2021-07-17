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
    else if (msg.includes(`травертин`)) {
        ctx.reply(`Е15-2-39-1 Травертин без ресунки, \nЕ15-2-39-2 Травертин с ресунки, `)
    }
    else if (msg.includes('кондиционер')) {
        ctx.replyWithHTML(`Е20-6-18-1 Доп.6 Кондицанер раценкаси`)
    }
    else if (msg.includes('бордюр')) {
        ctx.reply(`Е27-2-10-1 Установка Бордюр (бортовых камней)\nЕ68-014-01 РАЗБОРКА БОРТОВЫХ КАМНЕЙ: НА БЕТОННОМ ОСНОВАНИИ\nЕ1504-011-01	ОКРАСКА ФАСАДОВ С ЛЕСОВ С ПОДГОТОВКОЙ ПОВЕРХНОСТИ ИЗВЕСТКОВАЯ (БОРДЮРЫ)`)
    }
    else if (msg.includes('ВОДОСТОЧНЫХ ТРУБ')) {
        ctx.replyWithHTML(`Е12-2-8-3 НАВЕСКА ВОДОСТОЧНЫХ ТРУБ.`)
    }
    else if (msg.includes('желоб')) {
        ctx.reply(`Е12-1-9-2 УСТРОЙСТВО ЖЕЛОБА.`)
    }
    else if (msg.includes('подоконные слив')) {
        ctx.replyWithHTML(`Е12-1-10-1 Устройство мелких покрытий брандмауэры (подоконные слив)`)
    }
    else if (msg.includes('доск')) {
        ctx.replyWithHTML(`Е10-1-82-2 Уклад прогонов из досок.\nЕ10-1-82-1 Монтаж прогонов из досок.\nЕ10-1-2-1 Установка Балки, Стоек, Стропил\nЕ10-1-82-2 Уклад прогонов из досок.`)
    }
    else if (msg.includes('профнастил')) {
        ctx.reply(`Е12-3-4-1 Установка кровли из ПРОФНАСТИЛ.`)
    }
    else if (msg.includes('брусчатк')) {
        ctx.reply(`E11-1-25-1 Брусчатка пешеходные дорожки\nЕ2705-002-01 УСТРОЙСТВО БРУСЧАТЫХ БРУСЧАТКИ 10 СМ\nЕ68-061-01 ДОП. 5 РАЗБОРКА ТРОТУАРОВ И ДОРОЖЕК ИЗ ПЛИТ С ИХ ОТНОСКОЙ И УКЛАДКОЙ`)
    }
    else if (msg.includes('щебен')) {
        ctx.reply(`Е11-1-2-4 Устройство подстилающих слоёв ЩЕБЕНЬ.`)
    }
    else if (msg.includes('кафел')) {
        ctx.replyWithHTML(`Е11-1-27-5 Кафель пол Клей билан.\nЕ11-1-27-3 Кафель пол Раствор билан.\nЕ15-1-19-5 Облицовки стен кафель. (Клей билан)\nЕ15-1-19-1 Облицовки стен кафель. (Раствор билан)\nЕ11-1-39-1 Устройство плинтусов из КАФЕЛЬ\nE63-7-2	РАЗБОРКА ОБЛИЦОВКИ СТЕН ИЗ ПЛИТ И ПЛИТОК: ГРАНИТНЫХ`)
    }
    else if (msg.includes('италлогранит')) {
        ctx.reply(`Е15-1-26-1 ГЛАДКИЙ ОБЛИЦОВКИ СТЕН ИТАЛЛОГРАНИТ.\nE63-7-2	РАЗБОРКА ОБЛИЦОВКИ СТЕН ИЗ ПЛИТ И ПЛИТОК: ГРАНИТНЫХ`)
    }
    else if (msg.includes('лексан')) {
        ctx.reply(`Е9-3-22-1 Монтаж Лексан (Козерок)`)
    }
    else if (msg.includes('алюпан')) {
        ctx.replyWithHTML(`Е15-1-91-1 Облицовки фасадов АЛЮПАН.\nЕ15-1-92-1 Раскрой АЛЮПАН.\nE15-1-91-4 #ОЧ-3.4-д#К=0,6 ШHК.ДОП.9	ДЕМОНТАЖ ОБЛИЦОВКА ФАСАДА ДЕКОРАТИВНЫМИ ПАНЕЛЯМИ ТИПА «АЛЮКАБОНД»: ПО ГОТОВОМУ КАРКАСУ ДEМОHTАЖ`)
    }
    else if (msg.includes('подоконник')) {
        ctx.reply(`Е10-1-35-1 Установка подоконник.\nE56-3-2 СНЯТИЕ ПОДОКОННЫХ ДОСОК: ПЛАСТИКОВОГО`)
    }
    else if (msg.includes('окон')) {
        ctx.reply(`Е10-1-36-1 Установка Окон. Алюминиевые.\nЕ10-1-36-2 Установка Окон. Алюминиевые.\nE56-2-2	СНЯТИЕ ОКОННЫХ ПЕРЕПЛЕТОВ: ОСТЕКЛЕННЫХ        `)
    }
    else if (msg.includes('двер')) {
        ctx.reply(`Е10-1-37-2 Установка дверей. Алюминиевые.\nЕ10-1-37-1 Установка дверей. Алюминиевые./nЕ10-1-39-1 Установка дверей из МДФ.\nЕ9-4-14-3 Установка дверей. Металические.\nE56-9-5 ШHК.ДОП.5	ДЕМОНТАЖ ДВЕРНЫХ КОРОБОК В КАМЕННЫХ СТЕНАХ: С ОТБИВКОЙ ШТУКАТУРКИ В ОТКОСАХ\nE56-10-1	СНЯТИЕ ДВЕРНЫХ ПОЛОТЕН`)
    }
    else if (msg.includes('ОТМОСК')) {
        ctx.replyWithHTML(`Е11-1-2-4 УСТРОЙСТВО ПОДСТИЛАЮЩИХ СЛОЁВ ЩЕБЕНЬ.\nЕ6-1-1-1 УСТРОЙСТВО БЕТОННЫЕ ПОДГОТОВКА.`)
    }
    else if (msg.includes('кирпич')) {
        ctx.replyWithHTML(`Е46-4-1-4 РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА (ishlatiladi)\nЕ46-4-1-4 РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА (ishlatilmayd)\nЕ8-2-2-3 Кладка перегородок из кирпича.\nE8-3-2-1 КЛАДКА СТЕН ИЗ ЛЕГКОБЕТОННЫХ КАМНЕЙ БЕЗ ОБЛИЦОВКИ ДО 4 М\nE55-8-2 ШHК.ДОП.5	РАЗБОРКА КИРПИЧНЫХ ПЕРЕГОРОДОК НА ОТДЕЛЬНЫЕ КИРПИЧИ\nE53-2-6 ШHК.ДОП.5	РАЗБОРКА КЛАДКИ СТЕН ИЗ: КИРПИЧА`)
    }
    else if (msg.includes('стяжк')) {
        ctx.reply(`Е11-1-11-5 Устройство стяжки.\nЕ11-1-11-6 Устройство стяжек.11-1-11-5`)
    }
    else if (msg.includes('линолеум')) {
        ctx.reply(`Е11-1-36-1 Устройство покрытия ЛИНОЛЕУМА.\nЕ11-1-40-3 УСТРОЙСТВО ПЛИНТУСОВ ПЛАСТИКОВЫЕ.`)
    }
    else if (msg.includes('земляные работ')) {
        ctx.reply(`E1-2-58-2 КОПАНИЕ ЯМ ВРУЧНУЮ БЕЗ КРЕПЛЕНИЙ ДЛЯ СТОЕК И СТОЛБОВ БЕЗ ОТКОСОВ ГЛУБИНОЙ ДО 0,7 М ГРУППА ГРУНТОВ 2\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nE1-2-5-1	УПЛОТНЕНИЕ ГРУНТА ПНЕВМАТИЧЕСКИМИ ТРАМБОВКАМИ, ГРУППА ГРУНТОВ 1, 2\nE1-1-18-5 ШHК.ДОП.3	РАЗРАБОТКА ГРУНТА С ПОГРУЗКОЙ НА АВТОМОБИЛИ-САМОСВАЛЫ В КОТЛОВАНАХ ОБЪЕМОМ ДО 500 М3, ЭКСКАВАТОРАМИ С КОВШОМ ВМЕСТИМОСТЬЮ 0,25 М3, ГРУППА ГРУНТОВ: 2\nE1-1-31-2	РАЗРАБОТКА ГРУНТА С ПЕРЕМЕЩЕНИЕМ ДО 10 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 96 [130] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-1-31-10 К=4	ПРИ ПЕРЕМЕЩЕНИИ ГРУНТА НА КАЖДЫЕ ПОСЛЕДУЮЩИЕ 10 М ДОБАВЛЯТЬ К НОРМЕ 01-01-031-2\nE1-2-55-2	РАЗРАБОТКА ГРУНТА ВРУЧНУЮ С КРЕПЛЕНИЯМИ В ТРАНШЕЯХ ШИРИНОЙ ДО 2 М, ГЛУБИНОЙ ДО 2 М, ГРУППА ГРУНТОВ 2\nE1-1-33-2	ЗАСЫПКА ТРАНШЕЙ И КОТЛОВАНОВ С ПЕРЕМЕЩЕНИЕМ ГРУНТА ДО 5 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 59 [80] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nС310-1030	ПЕРЕВОЗКА ГРУЗОВ АВТОМОБИЛЕМ НА 30 КМ, КЛАСС ГРУЗА 1
        `)
    }
    else if (msg.includes('yer ishlari')) {
        ctx.reply(`E1-2-58-2 КОПАНИЕ ЯМ ВРУЧНУЮ БЕЗ КРЕПЛЕНИЙ ДЛЯ СТОЕК И СТОЛБОВ БЕЗ ОТКОСОВ ГЛУБИНОЙ ДО 0,7 М ГРУППА ГРУНТОВ 2\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nE1-2-5-1	УПЛОТНЕНИЕ ГРУНТА ПНЕВМАТИЧЕСКИМИ ТРАМБОВКАМИ, ГРУППА ГРУНТОВ 1, 2\nE1-1-18-5 ШHК.ДОП.3	РАЗРАБОТКА ГРУНТА С ПОГРУЗКОЙ НА АВТОМОБИЛИ-САМОСВАЛЫ В КОТЛОВАНАХ ОБЪЕМОМ ДО 500 М3, ЭКСКАВАТОРАМИ С КОВШОМ ВМЕСТИМОСТЬЮ 0,25 М3, ГРУППА ГРУНТОВ: 2\nE1-1-31-2	РАЗРАБОТКА ГРУНТА С ПЕРЕМЕЩЕНИЕМ ДО 10 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 96 [130] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-1-31-10 К=4	ПРИ ПЕРЕМЕЩЕНИИ ГРУНТА НА КАЖДЫЕ ПОСЛЕДУЮЩИЕ 10 М ДОБАВЛЯТЬ К НОРМЕ 01-01-031-2\nE1-2-55-2	РАЗРАБОТКА ГРУНТА ВРУЧНУЮ С КРЕПЛЕНИЯМИ В ТРАНШЕЯХ ШИРИНОЙ ДО 2 М, ГЛУБИНОЙ ДО 2 М, ГРУППА ГРУНТОВ 2\nE1-1-33-2	ЗАСЫПКА ТРАНШЕЙ И КОТЛОВАНОВ С ПЕРЕМЕЩЕНИЕМ ГРУНТА ДО 5 М БУЛЬДОЗЕРАМИ МОЩНОСТЬЮ 59 [80] КВТ [Л.С.], 2 ГРУППА ГРУНТОВ\nE1-2-61-2	ЗАСЫПКА ВРУЧНУЮ ТРАНШЕЙ, ПАЗУХ КОТЛОВАНОВ И ЯМ, ГРУППА ГРУНТОВ 2\nС310-1030	ПЕРЕВОЗКА ГРУЗОВ АВТОМОБИЛЕМ НА 30 КМ, КЛАСС ГРУЗА 1
        `)
    }
    else if (msg.includes('фундамент')) {
        ctx.reply(`E8-1-2-3	УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ГРАВИЙНОГО /T.70ММ\nE8-1-2-1 УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ПЕСЧАНОГО /T.30ММ\nE26-1-55-2 К=2	ГИДРОИЗОЛЯЦИЯ П/Э ПЛЕНКОЙ В 2 СЛОЯ ЗА 2 PАЗА\nE6-1-1-13	УСТРОЙСТВО ФУНДАМЕНТОВ-СТОЛБОВ БЕТОННЫХ ИЗ БETОHА КЛ.В15 HА С/С ЦEМEHTE\nE12-2-2-2	УСТРОЙСТВО ГИДРОИЗОЛЯЦИЙ ВЕРТИКАЛЬНЫХ ПОВЕРХНОСТЕЙ. ОБМАЗОЧНАЯ БИТУМНАЯ В ОДИН СЛОЙ ПО ВЫРОВНЕННОЙ ПОВЕРХНОСТИ КИРПИЧА И БЕТОНА /В 2 СЛОЯ/\nE12-2-2-3	ДОБАВЛЯЕТСЯ 1 СЛОЙ ДО 2-Х СЛОЕВ\nE6-1-15-7	УСТАНОВКА ЗАКЛАДНЫХ ДЕТАЛЕЙ ВЕСОМ ДО 4 КГ /ЗД-1-11ШT/\nE6-1-1-1	УСТРОЙСТВО БЕТОННОЙ ПОДГОТОВКИ\nE6-1-1-16	УСТРОЙСТВО ФУНДАМЕНТНЫХ ПЛИТ ЖЕЛЕЗОБЕТОННЫХ ПЛОСКИХ\nE6-2-11-2 ШHК.ДОП.7	ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ (С124-25-2	ГОРЯЧЕКАТАННАЯ АРМАТУРНАЯ СТАЛЬ КЛАССА А-III ДИАМ. 22 ММ)\nE6-1-1-5	УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ФУНДАМЕНТОВ ОБЩЕГО НАЗНАЧЕНИЯ ПОД КОЛОННЫ ОБЪЕМОМ ДО 3 М3\nE6-1-24-4	УСТРОЙСТВО СТЕН ПОДВАЛОВ И ПОДПОРНЫХ СТЕН ЖЕЛЕЗОБЕТОННЫХ ВЫСОТОЙ ДО 3 М, ТОЛЩИНОЙ ДО 500 ММ\nE6-1-1-22	УСТРОЙСТВО ЛЕНТОЧНЫХ ФУНДАМЕНТОВ ЖЕЛЕЗОБЕТОННЫХ ПРИ ШИРИНЕ ПОВЕРХУ ДО 1000 ММ\n
        `)
    }
    else if (msg.includes('fundament')) {
        ctx.reply(`E8-1-2-3	УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ГРАВИЙНОГО /T.70ММ\nE8-1-2-1 УСТРОЙСТВО ОСНОВАНИЯ ПОД ФУНДАМЕНТЫ ПЕСЧАНОГО /T.30ММ\nE26-1-55-2 К=2	ГИДРОИЗОЛЯЦИЯ П/Э ПЛЕНКОЙ В 2 СЛОЯ ЗА 2 PАЗА\nE6-1-1-13	УСТРОЙСТВО ФУНДАМЕНТОВ-СТОЛБОВ БЕТОННЫХ ИЗ БETОHА КЛ.В15 HА С/С ЦEМEHTE\nE12-2-2-2	УСТРОЙСТВО ГИДРОИЗОЛЯЦИЙ ВЕРТИКАЛЬНЫХ ПОВЕРХНОСТЕЙ. ОБМАЗОЧНАЯ БИТУМНАЯ В ОДИН СЛОЙ ПО ВЫРОВНЕННОЙ ПОВЕРХНОСТИ КИРПИЧА И БЕТОНА /В 2 СЛОЯ/\nE12-2-2-3	ДОБАВЛЯЕТСЯ 1 СЛОЙ ДО 2-Х СЛОЕВ\nE6-1-15-7	УСТАНОВКА ЗАКЛАДНЫХ ДЕТАЛЕЙ ВЕСОМ ДО 4 КГ /ЗД-1-11ШT/\nE6-1-1-1	УСТРОЙСТВО БЕТОННОЙ ПОДГОТОВКИ\nE6-1-1-16	УСТРОЙСТВО ФУНДАМЕНТНЫХ ПЛИТ ЖЕЛЕЗОБЕТОННЫХ ПЛОСКИХ\nE6-2-11-2 ШHК.ДОП.7	ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ (С124-25-2	ГОРЯЧЕКАТАННАЯ АРМАТУРНАЯ СТАЛЬ КЛАССА А-III ДИАМ. 22 ММ)\nE6-1-1-5	УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ФУНДАМЕНТОВ ОБЩЕГО НАЗНАЧЕНИЯ ПОД КОЛОННЫ ОБЪЕМОМ ДО 3 М3\nE6-1-24-4	УСТРОЙСТВО СТЕН ПОДВАЛОВ И ПОДПОРНЫХ СТЕН ЖЕЛЕЗОБЕТОННЫХ ВЫСОТОЙ ДО 3 М, ТОЛЩИНОЙ ДО 500 ММ\nE6-1-1-22	УСТРОЙСТВО ЛЕНТОЧНЫХ ФУНДАМЕНТОВ ЖЕЛЕЗОБЕТОННЫХ ПРИ ШИРИНЕ ПОВЕРХУ ДО 1000 ММ\n
        `)
    }
    else if (msg.includes('приямк')) {
        ctx.reply(`E6-1-1-22 УСТРОЙСТВО ЖЕЛЕЗОБЕТОННЫХ ПРИЯМОК\nE6-2-11-2 ШHК.ДОП.7 ИЗГОТОВЛЕНИЕ ВЕРХНИХ И НИЖНИХ ПЛОСКИХ И ОБЪЕМНЫХ АРМАТУРНЫХ КАРКАСОВ МЕТОДОМ ВЯЗКИ НА ГОРИЗОНТАЛЬНЫХ ПОВЕРХНОСТЯХ`)
    }
    else if (msg.includes('радиатор')) {
        ctx.replyWithHTML('E18-3-1-2 УСТАНОВКА РАДИАТОРОВ <u>АЛЮМИНИЕВЫХ</u> и <u>СТАЛЬНЫХ</u>\nЕ65-19-1 демонтаж радиаторов\n'+'<b>Коэффициент расчета м2=квт</b>\n'+'<u>При высоте потолка 3м = 1.05\nПри высоте потолка 3.5 м = 1.1\nПри высоте потолка 4м = 1.15\nПри высоте потолка 4.5м = 1.2</u>\n'+'<b>Соответственно расчет по коэффициенту!!!\n</b>'+'Исходя из этого если комната 10м2 с высотой потолка 3м То необходимые кВт для обогрева комнаты необходимо 10.5\n'+'<b>Дальше простая арифметика</b>\n<i>Среднее значение теплоотдачи одной секции биметаллического радиатора составляет от 170 до 210 Вт. Что соответственно 0.17-0.21 кВт!</i>')
    }
    else if (msg.includes('гипсокартон')) {
        ctx.reply(`E15-7-16-1 ШHК.ДОП.4	ОБШИВКА ОТКОСОВ ГИПСОКАРТОНОМ\nE15-7-18-3 ШHК.ДОП.9	ОБЛИЦОВКА СТЕН "КНАУФ" ГИПСОКАРТОННЫМИ ЛИСТАМИ\nE15-1-52-1 ШHК.ДОП.1 УСТРОЙСТВО ПОДВЕСНОГО ПОТОЛКА ГИПСОКАРТОННЫМИ ПЛИТАМИ КНАУФ ПО МЕТАЛЛИЧЕСКИМ НЕСУЩИМ КОНСТРУКЦИЯМ, ПРОСТОЙ СЛОЖНОСТИ\nE63-10-1	РАЗБОРКА ОБЛИЦОВКИ ИЗ ГИПСОКАРТОННЫХ ЛИСТОВ: СТЕН И ПЕРЕГОРОДОК\nE63-10-2 РАЗБОРКА ОБЛИЦОВКИ ИЗ ГИПСОКАРТОННЫХ ЛИСТОВ: ПОТОЛКОВ`)
    }
    else if (msg.includes('армстронг')) {
        ctx.reply(`E15-1-47-15 ШHК.ДОП.4 УСТРОЙСТВО ПОДВЕСНЫХ ПОТОЛКОВ ТИПА "АРМСТРОНГ" ПО КАРКАСУ ИЗ ОЦИНКОВАННОГО ПРОФИЛЯ\nE54-3-4 ШHК.ДОП.8 РАЗБОРКА ПОДШИВКИ ПОТОЛКОВ ИЗ АРМСТРОНГ`)
    }
    else if (msg.includes('пластик')) {
        ctx.reply(`E15-7-17-4 ШHК.ДОП.4	ОБЛИЦОВКА КАРКАСОВ ПАНЕЛЯМИ ДЕКОРАТИВНЫМИ ПЛАСТИКОВЫМИ С УСТРОЙСТВОМ КАРКАСА БЕЗ ОТНОСА ОТ ПОТОЛКА\n`)
    }
    else if (msg.includes('сердечник')) {
        ctx.reply(`Е0601-035-01	УСТРОЙСТВО СЕРДЕЧНИКОВ`)
    }
    else if (msg.includes('сесмапояс')) {
        ctx.reply(`Е0601-035-01 УСТРОЙСТВО СЕЙСМАПОЯСА`)
    }
    else if (msg.includes('асфальт')) {
        ctx.reply(`Е2704-001-04 УСТРОЙСТВО ПОДСТИЛАЮЩИХ И ВЫРАВНИВАЮЩИХ СЛОЕВ ЩЕБНЯ\nЕ2706-020-01 УСТРОЙСТВО ПОКРЫТИЯ ТОЛЩИНОЙ 4 СМ ИЗ ГОРЯЧИХ АСФАЛЬТОБЕТОННЫХ СМЕСЕЙ(ТОЛЩИНОЙ 7 СМ)\nЕ2706-021-01 К=6	ПРИ ИЗМЕНЕНИИ ТОЛЩИНЫ ПОКРЫТИЯ НА 0,5 СМ ДОБАВЛЯТЬ К НОРМЕ 27-06-020-1`)
    }
    else if (msg.includes('671')) {
        ctx.replyWithHTML(`<b><u>671-modda.</u>Loyiha-smeta hujjatlariga o‘zgartishlar kiritish</b>\n`+`Agar texnik hujjatlarga o‘zgartishlar kiritish tufayli bajarilishi kerak bo‘ladigan qo‘shimcha ishlar qiymati jihatidan smetada ko‘rsatilgan qurilish umumiy qiymatining o‘n foizidan oshib ketmasa va qurilish pudrati shartnomasida nazarda tutilgan ishlarning xususiyatini o‘zgartirmasa, buyurtmachi texnik hujjatlarga o‘zgartishlar kiritishga haqli.\n`+`Texnik hujjatlarga ushbu moddaning birinchi qismida ko‘rsatilganiga nisbatan kattaroq hajmda o‘zgartishlar kiritish taraflar kelishgan qo‘shimcha smeta asosida amalga oshiriladi.\n`+`Agar ishning qiymati pudratchiga bog‘liq bo‘lmagan sabablarga ko‘ra smetadan kamida o‘n foiz oshgan bo‘lsa, pudratchi ushbu Kodeksning <u>382-moddasiga</u> muvofiq smetani qayta ko‘rib chiqishni talab qilishga haqli.\n`+`Pudratchi loyiha-smeta hujjatlaridagi kamchiliklarni aniqlash va yo‘qotish bilan bog‘liq oqilona xarajatlarni qoplashni talab qilishga haqli.\n`+`<b>LexUZ sharhi</b>\n`+`Qo‘shimcha ma’lumot uchun qarang: O‘zbekiston Respublikasi Oliy xo‘jalik sudi Plenumining 2016-yil 23-dekabrdagi 306-son “Iqtisodiy sudlar tomonidan qurilish pudrati shartnomasidan kelib chiqadigan nizolarni hal etishda qonun hujjatlarini qo‘llashning ayrim masalalari to‘g‘risida”gi qarorining 6.1-bandi, 6.5-bandi, 7-bandining uchinchi xatboshisi.`)
    }
    else if (msg.includes('382')) {
        ctx.replyWithHTML(`<b>28-BOB
        ShARTNOMANI O‘ZGARTIRISh VA BEKOR QILISh</>\n<b><u>382-modda.</u> Shartnomani o‘zgartirish va bekor qilish asoslari</b>\nAgar ushbu Kodeksda, boshqa qonunlarda yoki shartnomada boshqacha tartib nazarda tutilgan bo‘lmasa, shartnoma taraflarning kelishuviga muvofiq o‘zgartirilishi va bekor qilinishi mumkin.\nTaraflardan birining talabi bilan shartnoma sud tomonidan faqat quyidagi hollarda o‘zgartirilishi yoki bekor qilinishi mumkin:\n1) ikkinchi taraf shartnomani jiddiy ravishda buzsa;\n2) ushbu Kodeks, boshqa qonunlar va shartnomada nazarda tutilgan o‘zga hollarda.\nTaraflardan birining shartnomani buzishi ikkinchi tarafga u shartnoma tuzishda umid qilishga haqli bo‘lgan narsadan ko‘p darajada mahrum bo‘ladigan qilib zarar yetkazishi shartnomani jiddiy buzish hisoblanadi.\nBir taraf shartnomani bajarishdan to‘la yoki qisman bosh tortib, qonun yohud taraflarning kelishuvida bunga yo‘l qo‘yilsa, shartnoma tegishlicha bekor qilingan yoki o‘zgartirilgan hisoblanadi.\n<b>LexUZ sharhi</b>\n<b>Qarang:</b> mazkur Kodeksning 353, 354, 357, 364, 367, 370, 377, 383 — 385-moddalari, O‘zbekiston Respublikasining 29.08.1998-yildagi “Xo‘jalik yurituvchi subyektlar faoliyatining shartnomaviy-huquqiy bazasi to‘g‘risida”gi Qonunining 2, 10 — 16-moddalari.\n<b>Qo‘shimcha ma’lumot uchun qarang:</b> Oliy sudi Plenumining 02.05.1997-yildagi “Xususiylashtirilgan turar joylarga egalik qilish, ulardan foydalanish va ularni tasarruf qilish bilan bog‘liq ishlar bo‘yicha sud amaliyoti haqida”gi 3-son qarorining 9-bandi, Oliy xo‘jalik sudi Plenumining 18.12.2009-yildagi “Xo‘jalik shartnomalarini tuzish, o‘zgartirish va bekor qilishni tartibga soluvchi fuqarolik qonun hujjatlari normalarini qo‘llashning ayrim masalalari to‘g‘risida”gi qarori 18-bandining uchinchi — oltinchi xatboshilari, 25, 26-bandlari.`)
    }
    else if (msg.includes('302')) {
        ctx.replyWithHTML(`<b><u>302-modda.</u> Kafolatning chaqirib olinmasligi</b>\nAgar kafolatda boshqacha tartib nazarda tutilgan bo‘lmasa, u kafil tomonidan chaqirib olinishi mumkin emas.\n<b>LexUZ sharhi</b>\n<b>Qarang:</b> mazkur Kodeksning 259, 299 — 301, 303 — 310-moddalari.\nQo‘shimcha ma’lumot uchun qarang: O‘zbekiston Respublikasi Oliy sudi va Oliy xo‘jalik sudi Plenumining 22.12.2006-yildagi “Kredit shartnomalaridan kelib chiqadigan majburiyatlar bajarilishini ta’minlash to‘g‘risidagi fuqarolik qonun hujjatlarini qo‘llashning ayrim masalalari haqida”gi 13/150-son qarorining 40-bandi.`)
    }
    else if (msg.includes('306')) {
        ctx.replyWithHTML(`<b><u>306-modda.</u> Benefitsiarning talabini ko‘rib chiqishda kafilning majburiyatlari</b>\nKafil benefitsiarning talabini olganidan so‘ng bu haqda darhol prinsipalni xabardor qilishi va unga talabning nusxasini barcha tegishli hujjatlar bilan topshirishi kerak.\nKafil benefitsiarning talabini unga ilova qilingan hujjatlar bilan birga kafolatda ko‘rsatilgan muddatda ko‘rib chiqishi, muddat ko‘rsatilmaganda esa — mutanosib muddatda bu talab hamda unga ilova qilingan hujjatlar kafolat shartlariga mos kelishi yoki kelmasligini aniqlash uchun oqilona jonkuyarlik ko‘rsatishi kerak.\n<b>LexUZ sharhi</b>\n<b>Qarang:</b> mazkur Kodeksning 234, 235, 237, 241, 259, 299 — 305, 307 — 310-moddalari.`)
    }
    else if (msg.includes('321')) {
        ctx.replyWithHTML(`<a href="https://t.me/shnkuz/32?single">Скачать </a>321-сон қарори`)
    }
    else if (msg.includes('акт скр')) {
        ctx.replyWithHTML(`<a href="https://t.me/shnkuz/48">Скачать</a> АКТ Скрытых Работ\n<a href="https://t.me/shnkuz/49">Скачать</a> Образец АКТ Скрытых Работ\n<a href="https://t.me/shnkuz/50">Скачать</a> Яширин ишлар далолатномаси`)
    }
    else if (msg.includes('м-29')) {
        ctx.replyWithHTML(`<a href="https://t.me/shnkuz/43">Скачать</a> М-29\n<a href="https://t.me/shnkuz/42">Скачать</a> М-29\n<a href="https://t.me/shnkuz/40">Скачать mini</a> М-29\n<a href="https://t.me/shnkuz/41">Скачать Образец</a> М-29`)
    }
    else if (msg.includes('поле')) {
        ctx.replyWithHTML(`<a href="https://t.me/shnkuz/47">Скачать Образец</a> МИНИФУТБОЛЬНОЕ ПОЛЕ,  БАСКЕТБОЛЬНОЕ ПОЛЕ`)
    }
    else if (msg.includes('qaror')) {
        ctx.replyWithHTML(`<b>ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ ФУҚАРОЛИК КОДЕКСИ</b><a href="https://lex.uz/docs/111189">\nLex.UZ сайтига Ўтиш</a> Биринчи қисм\n<b>ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ ФУҚАРОЛИК КОДЕКСИ</b><a href="https://lex.uz/docs/180552">\nLex.UZ сайтига Ўтиш</a> ИККИНЧИ ҚИСМ\n<a href="https://lex.uz/docs/180552#:~:text=671-%D0%BC%D0%BE%D0%B4%D0%B4%D0%B0.%20%D0%9B%D0%BE%D0%B9%D0%B8%D2%B3%D0%B0,%D0%B1%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%20%D1%83%D1%87%D0%B8%D0%BD%D1%87%D0%B8%20%D1%85%D0%B0%D1%82%D0%B1%D0%BE%D1%88%D0%B8%D1%81%D0%B8.">Ўтиш манзили</a> 671-modda.\n<a href="https://lex.uz/docs/111189#:~:text=382-%D0%BC%D0%BE%D0%B4%D0%B4%D0%B0.%20%D0%A8%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8,%D1%91%D0%BA%D0%B8%20%D1%9E%D0%B7%D0%B3%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B8%D0%BB%D0%B3%D0%B0%D0%BD%20%D2%B3%D0%B8%D1%81%D0%BE%D0%B1%D0%BB%D0%B0%D0%BD%D0%B0%D0%B4%D0%B8.">Ўтиш манзили</a> 382-modda.\n<a href="https://lex.uz/docs/111189#:~:text=302-%D0%BC%D0%BE%D0%B4%D0%B4%D0%B0.%20%D0%9A%D0%B0%D1%84%D0%BE%D0%BB%D0%B0%D1%82%D0%BD%D0%B8%D0%BD%D0%B3,%D0%BE%D0%BB%D0%B8%D0%BD%D0%B8%D1%88%D0%B8%20%D0%BC%D1%83%D0%BC%D0%BA%D0%B8%D0%BD%20%D1%8D%D0%BC%D0%B0%D1%81.">Ўтиш манзили</a> 302-modda.\n<a href="https://lex.uz/docs/111189#:~:text=306-%D0%BC%D0%BE%D0%B4%D0%B4%D0%B0.%20%D0%91%D0%B5%D0%BD%D0%B5%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D1%80%D0%BD%D0%B8%D0%BD%D0%B3,%D0%B6%D0%BE%D0%BD%D0%BA%D1%83%D1%8F%D1%80%D0%BB%D0%B8%D0%BA%20%D0%BA%D1%9E%D1%80%D1%81%D0%B0%D1%82%D0%B8%D1%88%D0%B8%20%D0%BA%D0%B5%D1%80%D0%B0%D0%BA.">Ўтиш манзили</a> 306-modda.\n<a href="https://t.me/shnkuz/46">Скачать</a> 321-сон қарори.`)
    }
    else if (msg.includes('смонт')) {
        ctx.replyWithHTML(`<a href="https://t.me/shnkuz/54">Скачать Образец</a> АКТ смонтированного оборудования, инвентаря и материалов.\n<a href="https://t.me/shnkuz/51">Скачать</a> ВЕДОМОСТЬ смонтированного оборудования\n<a href="https://t.me/shnkuz/52">Скачать Образец</a> ВЕДОМОСТЬ смонтированного оборудования\n<a href="https://t.me/shnkuz/56">Скачать ШНК 3.01.04-04</a> ПРИЕМКА В ЭКСПЛУАТАЦИЮ ЗАКОНЧЕННЫХ СТРОИТЕЛЬСТВОМ ОБЪЕКТОВ`)
    }
    else {ctx.reply(`Bu haqida ma'lumot topilmadi.\nIltimos kirilchada yoki ruschada bexato yozib ko'ring!`)}
})
