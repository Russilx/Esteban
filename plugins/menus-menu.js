
import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `*┏━━━━━↝🥷🏼↜━━━━━┓*
*┃👑 𝗖𝗿𝗲𝗮𝗱𝗼𝗿: Esteban*
*┃📲 wa.me/5491125950331*
*┗━━━━━⇝⚔️⇜━━━━━┛*

 *┏━⚙️𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁⚙️━┓*
 *┣➤ 🟢 ${usedPrefix}enable*
 *┣➤ 🔴 ${usedPrefix}disable*
  ┗━━━━━━━━━━┛

   *┏━🎤𝙰𝚄𝙳𝙸𝙾𝚂🎤━┓*
 *┣➤  ${usedPrefix}Menu2*
  ┗━━━━━━━━━━┛

 *┏━━━❄️ 𝙶𝚁𝚄𝙿𝙾𝚂 ❄️━━━┓*
 *┣➤  ${usedPrefix}kick*
 *┣➤  ${usedPrefix}menuff*
 *┣➤  ${usedPrefix}grupo*
 *┣➤  ${usedPrefix}promote*
 *┣➤  ${usedPrefix}demote*
 *┣➤  ${usedPrefix}link*
 *┣➤  ${usedPrefix}todos*
 *┣➤  ${usedPrefix}setwelcome*
 *┣➤  ${usedPrefix}setbye*
 *┣➤  ${usedPrefix}hidetag*
 *┣➤  ${usedPrefix}fantasmas*
 *┣➤  ${usedPrefix}kickfantasmas*
 *┗━━━━━━━━━━━━━━━━┛*

 *┏━𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚇 𝙵𝙸𝙻𝚃𝚁𝙾━┓*
 *┣➤* 🎐 _${usedPrefix}sticker | s *imagen o video*_
 *┣➤* 🎐 _${usedPrefix}sticker | s *url de tipo jpg*_
 *┣➤* 🎐 _${usedPrefix}emojimix *😺+😆*_
 *┣➤* 🎐 _${usedPrefix}qc_
 *┣➤* 🎐 _${usedPrefix}scircle | círculo *imagen*_
 *┣➤* 🎐 _${usedPrefix}semoji | emoji *tipo emoji*_
 *┣➤* 🎐 _${usedPrefix}attp *texto*_
 *┣➤* 🎐 _${usedPrefix}attp2 *texto*_
 *┣➤* 🎐 _${usedPrefix}ttp *texto*_
 *┣➤* 🎐 _${usedPrefix}ttp2 *texto*_
 *┣➤* 🎐 _${usedPrefix}ttp3 *texto*_
 *┣➤* 🎐 _${usedPrefix}ttp4 *texto*_
 *┣➤* 🎐 _${usedPrefix}ttp5 *texto*_
 *┣➤* 🎐 _${usedPrefix}ttp6 *texto*_
 *┣➤* 🎐 _${usedPrefix}dado_
 *┣➤* 🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
 *┣➤* 🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 *┣➤* 🎐 _${usedPrefix}cs *:* cs2_
 *┗━━━━━━━━━━━━━━━━━━━━┛*

*┏━━━🎮 𝙹𝚄𝙴𝙶𝙾𝚂 🎮━━━┓*
*┣➤ 🕹️ ${usedPrefix}mates*
*┣➤ 🕹️ ${usedPrefix}ppt*
*┣➤ 🕹️ ${usedPrefix}prostituto <@tag>*
*┣➤ 🕹️ ${usedPrefix}prostituta <@tag>*
*┣➤ 🕹️ ${usedPrefix}gay2 <@tag>*
*┣➤ 🕹️ ${usedPrefix}lesbiana <@tag>*
*┣➤ 🕹️ ${usedPrefix}pajero <@tag>*
*┣➤ 🕹️ ${usedPrefix}pajera <@tag>*
*┣➤ 🕹️ ${usedPrefix}puto <@tag>*
*┣➤ 🕹️ ${usedPrefix}puta <@tag>*
*┣➤ 🕹️ ${usedPrefix}manco <@tag>*
*┣➤ 🕹️ ${usedPrefix}manca <@tag>*
*┣➤ 🕹️ ${usedPrefix}rata <@tag>*
*┣➤ 🕹️ ${usedPrefix}negro <@tag>*
*┣➤ 🕹️ ${usedPrefix}negra <@tag>*
*┣➤ 🕹️ ${usedPrefix}fea <@tag>*
*┣➤ 🕹️ ${usedPrefix}feo <@tag>*
*┣➤ 🕹️ ${usedPrefix}sinpoto <@tag>*
*┣➤ 🕹️ ${usedPrefix}sintetas <@tag>*
*┣➤ 🕹️ ${usedPrefix}sinpito <@tag>*
*┣➤ 🕹️ ${usedPrefix}adoptada <@tag>*
*┣➤ 🕹️ ${usedPrefix}adoptado <@tag>*
*┣➤ 🕹️ ${usedPrefix}love*
*┣➤ 🕹️ ${usedPrefix}los10*
*┣➤ 🕹️ ${usedPrefix}suitpvp*
*┣➤ 🕹️ ${usedPrefix}slot*
*┣➤ 🕹️ ${usedPrefix}simsimi*
*┣➤ 🕹️ ${usedPrefix}pregunta*
*┣➤ 🕹️ ${usedPrefix}cuando*
*┣➤ 🕹️ ${usedPrefix}ship5*
*┣➤ 🕹️ ${usedPrefix}abrazo*
*┣➤ 🕹️ ${usedPrefix}ship2*
*┣➤ 🕹️ ${usedPrefix}formarpareja*
*┣➤ 🕹️ ${usedPrefix}verdad*
*┣➤ 🕹️ ${usedPrefix}reto*
*┣➤ 🕹️ ${usedPrefix}cancion*
*┣➤ 🕹️ ${usedPrefix}pista*
*┣➤ 🕹️ ${usedPrefix}ruleta*
*┣➤ 🕹️ ${usedPrefix}zodiac*
*┣➤ 🕹️ ${usedPrefix}odio*
*┣➤ 🕹️ ${usedPrefix}ship*
*┣➤ 🕹️ ${usedPrefix}sorteo*
*┣➤ 🕹️ ${usedPrefix}minovia*
*┣➤ 🕹️ ${usedPrefix}minovio*
*┣➤ 🕹️ ${usedPrefix}kchero*
*┣➤ 🕹️ ${usedPrefix}kchero*
*┗━━━━━━━━━━━━━━━━┛*

*┏━━━🈴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂 🈴━━━┓*
*┣➤ 📥 ${usedPrefix}play*
*┣➤ 📥 ${usedPrefix}play.1*
*┣➤ 📥 ${usedPrefix}play2.2*
*┣➤ 📥 ${usedPrefix}ytv.2*
*┣➤ 📥 ${usedPrefix}yta.2*
*┣➤ 📥 ${usedPrefix}playlist*
*┣➤ 📥 ${usedPrefix}spotify*
*┣➤ 📥 ${usedPrefix}spotifydl*
*┣➤ 📥 ${usedPrefix}tiktok*
*┣➤ 📥 ${usedPrefix}instagram*
*┣➤ 📥 ${usedPrefix}mediafire*
*┣➤ 📥 ${usedPrefix}gdrive*
*┣➤ 📥 ${usedPrefix}twitter*
*┣➤ 📥 ${usedPrefix}yta*
*┣➤ 📥 ${usedPrefix}ytv*
*┣➤ 📥 ${usedPrefix}imagen*
*┣➤ 📥 ${usedPrefix}iaimagen*
*┣➤ 📥 ${usedPrefix}pinteres*
*┣➤ 📥 ${usedPrefix}igstory*
*┗━━━━━━━━━━━━━━━━━━━┛*

*┏━━━👀 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚁𝙴𝚂 👀━━━┓*
*┣➤ 📍 ${usedPrefix}toimg*
*┣➤ 📍 ${usedPrefix}tomp3*
*┣➤ 📍 ${usedPrefix}toptt*
*┣➤ 📍 ${usedPrefix}tovideo*
*┣➤ 📍 ${usedPrefix}tts*
*┗━━━━━━━━━━━━━━━━━━━━━━━┛*

*┏━━♓ 𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝚈 𝙻𝙾𝙶𝙾𝚂 ♓━━┓*
*┣➤ ❄️ ${usedPrefix}ytcomment*
*┣➤ ❄️ ${usedPrefix}hornycard*
*┣➤ ❄️ ${usedPrefix}itssostupid*
*┣➤ ❄️ ${usedPrefix}pixelar*
*┗━━━━━━━━━━━━━━━━━━━━━━━┛*

*┏━━💌 𝙵𝚁𝙰𝚂𝙴𝚂 𝚈 𝚃𝙴𝚇𝚃𝙾𝚂 💌━━┓*
*┣➤ 🥀 ${usedPrefix}piropo*
*┣➤ 🥀 ${usedPrefix}consejo*
*┣➤ 🥀 ${usedPrefix}fraseromantica*
*┗━━━━━━━━━━━━━━━━━━━━━┛*

*┏━━✨ 𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁𝙴𝚂 ✨━━┓*
*┣➤ 🔍 ${usedPrefix}xnxxsearch*
*┣➤ 🔍 ${usedPrefix}google*
*┣➤ 🔍 ${usedPrefix}letra*
*┣➤ 🔍 ${usedPrefix}wikipedia*
*┣➤ 🔍 ${usedPrefix}ytsearch*
*┣➤ 🔍 ${usedPrefix}playstore*
*┣➤ 🔍 ${usedPrefix}mercadolibre*
*┣➤ 🔍 ${usedPrefix}pornhubsearch*
*┗━━━━━━━━━━━━━━━━━━┛*

*┏━━🌝 𝙷𝙴𝚁𝚁𝙰𝙼𝙸𝙴𝙽𝚃𝙰𝚂 🌝━━┓*
*┣➤ 🍃 ${usedPrefix}clima*
*┣➤ 🍃 ${usedPrefix}afk*
*┣➤ 🍃 ${usedPrefix}ocr*
*┣➤ 🍃 ${usedPrefix}calc*
*┣➤ 🍃 ${usedPrefix}del*
*┣➤ 🍃 ${usedPrefix}whatmusic*
*┣➤ 🍃 ${usedPrefix}qrcode*
*┣➤ 🍃 ${usedPrefix}traducir*
*┗━━━━━━━━━━━━━━━━━━━━┛*

*┏━━━💎 𝙴𝙲𝙾𝙽𝙾𝙼𝙸𝙰𝚂 💎━━━┓*
*┣➤ 🍁 ${usedPrefix}verificar*
*┣➤ 🍁 ${usedPrefix}unreg*
*┣➤ 🍁 ${usedPrefix}minar*
*┣➤ 🍁 ${usedPrefix}buy*
*┣➤ 🍁 ${usedPrefix}work*
*┣➤ 🍁 ${usedPrefix}mendigar*
*┣➤ 🍁 ${usedPrefix}transfer*
*┗━━━━━━━━━━━━━━━━━━━┛*

*┏━━━𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙴𝚂 𝙾𝚆𝙽𝙴𝚁𝚂━━━┓*
*┣➤* 💎➺ _${usedPrefix}join *enlace*_
*┣➤* 💎➺ _${usedPrefix}unete *enlace*_
*┣➤* 💎➺ _${usedPrefix}dardiamantes *cantidad*_
*┣➤* 💎➺ _${usedPrefix}darxp *cantidad*_
*┣➤* 💎➺ _${usedPrefix}dargatacoins *cantidad*_
*┣➤* 💎➺ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
*┣➤* 💎➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
*┣➤* 💎➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
*┣➤* 💎➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
*┣➤* 💎➺ _${usedPrefix}idioma | language_
*┣➤* 💎➺ _${usedPrefix}cajafuerte_
*┣➤* 💎➺ _${usedPrefix}comunicar | broadcastall | bc *texto*_
*┣➤* 💎➺ _${usedPrefix}broadcastchats | bcc *texto*_
*┣➤* 💎➺ _${usedPrefix}comunicarpv *texto*_
*┣➤* 💎➺ _${usedPrefix}broadcastgc *texto*_
*┣➤* 💎➺ _${usedPrefix}comunicargrupos *texto*_
*┣➤* 💎➺ _${usedPrefix}borrartmp | cleartmp_
*┣➤* 💎➺ _${usedPrefix}delexp *@tag*_
*┣➤* 💎➺ _${usedPrefix}deloptimuscoins *@tag*_
*┣➤* 💎➺ _${usedPrefix}deldiamantes *@tag*_
*┣➤* 💎➺ _${usedPrefix}reiniciar | restart_
*┣➤* 💎➺ _${usedPrefix}Actualizar | update_
*┣➤* 💎➺ _${usedPrefix}addprem | +prem *@tag*_
*┣➤* 💎➺ _${usedPrefix}delprem | -prem *@tag*_
*┣➤* 💎➺ _${usedPrefix}listapremium | listprem_
*┣➤* 💎➺ _${usedPrefix}añadirdiamantes *@tag cantidad*_
*┣➤* 💎➺ _${usedPrefix}añadirxp *@tag cantidad*_
*┣➤* 💎➺ _${usedPrefix}añadircoins *@tag cantidad*_
*┗━━━━━━━━━━━━━━━━━━━━━━┛*`

    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen4
    } else if (idioma == 'pt-br') {
      pp = global.imagen7
    } else if (idioma == 'fr') {
      pp = global.imagen8
    }else if (idioma == 'en') {
      pp = global.imagen9
    } else if (idioma == 'ru') {
      pp = global.imagen10
    } else {
      pp = global.imagen4 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|comandos|ayuda)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
