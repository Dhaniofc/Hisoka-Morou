//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	hardianto: 'https://hardianto.xyz',
	violetics: 'https://api.violetics.pw',
	invibot: 'https://api-invibot.herokuapp.com',
	xziyy: 'https://ziy.herokuapp.com',
        LolHuman: 'https://api.lolhuman.xyz',
	danisenpai: 'https://x-restapi.herokuapp.com',
	leyscoders: 'https://leyscoders-api.herokuapp.com',
        Adiofficial: 'http://api.adiofficial.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01',
	'https://hardianto.xyz': 'hardianto',
	'https://api.violetics.pw': 'beta',
        'https://api.lolhuman.xyz': 'You Apikey',
	'https://ziy.herokuapp.com': 'xZiyy',
	'https://api-invibot.herokuapp.com': 'APIKEY',
        'https://x-restapi.herokuapp.com': 'BETA',
	'https://leyscoders-api.herokuapp.com': 'IkyOgiwara',
        'http://api.adiofficial.xyz': 'PutriCntq',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//
global.owner = ['6285773557984','6281382420312','6288292024190','6285335877178']
global.premium = ['6288292024190']
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Ｓｕｃｃｅｓ．．．',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.hisoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
