require('dotenv').config()
const { Markup } = require('telegraf')
const { bot } = require('./bot')


bot.action('six', ctx => {

    ctx.deleteMessage();
    let text33 = `<b>Сборники сметных норм на пусконаладочные работы</b>
    
    <u>Сборник 1</u>	Электротехнические устройства	<a href="https://mc.uz/wp-content/up/Oa/pppjyR3pVuIZ90lbe2keBVRe4K71tT.rar">Скачать</a>
    <u>Сборник 2</u>	Автоматизированные системы управления, пожарная автоматика и  охранная сигнализация	<a href="https://mc.uz/wp-content/up/PV/JZV4xB5pkEeRpiYq25FLGa8QqH1Zv4.rar">Скачать</a>
    <u>Сборник 3</u>	Системы вентиляции и кондиционирования воздуха	<a href="https://mc.uz/wp-content/up/cZ/xE01jMxYfhRBy2oa1sTMDcxNfZta12.rar">Скачать</a>
    <u>Сборник 4</u>	Подъемно-транспортное оборудование	<a href="https://mc.uz/wp-content/up/4C/H7x4IiTbsLMOofaTQRpoiLchfGhjAL.rar">Скачать</a>
    <u>Сборник 5</u>	Металлообрабатывающее оборудование	<a href="https://mc.uz/wp-content/up/4h/qCj77xAwIuA7AMPPMhtd8IyglguiZO.rar">Скачать</a>
    <u>Сборник 6</u>	Холодильные и компрессорные установки	<a href="https://mc.uz/wp-content/up/aI/OpnWnpP236lLrV0gYJzPqmOXHLO9Cx.rar">Скачать</a>
    <u>Сборник 7</u>	Теплоэнергетическое оборудование	<a href="https://mc.uz/wp-content/up/1n/CRlEBFZTv5zdIgP6ffvb8EpCjhueR3.rar">Скачать</a>
    <u>Сборник 8</u>	Деревообрабатывающее оборудование	<a href="https://mc.uz/wp-content/up/eW/50Xhp2KXKhn7pwDXhTvehRaRHP3dDW.rar">Скачать</a>
    <u>Сборник 9</u>	Сооружения водоснабжения и канализации	<a href="https://mc.uz/wp-content/up/Cu/cWI7U7SCSqDVLBzD1W8g5VKyBy9FVb.rar">Скачать</a>
    <u>Указания по применению сборников ресурсных сметных норм на пусконаладочные работы</u>		<a href="https://mc.uz/wp-content/up/OG/6juvHWPDrnkXsG4DXwfRT6YeGleh8z.rar">Скачать</a>
    `;
    ctx.replyWithHTML(text33,  
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