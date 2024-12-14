import fetch from 'node-fetch';




const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_audios

  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝙀𝙀𝘼 • 𝙎𝙏𝙊𝙍𝙀𝗘* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝘽𝙪𝙚𝙣𝙖𝙨, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯



┏━━━━━━━━━━━━━━━━┓
┃*𝙈𝙚𝙣𝙪 𝘼𝙪𝙙𝙞𝙤𝙨*  
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *- ${_translate.plugins.menu_audios.texto1}*
┣ 𝙑𝙊𝙕⤳ _Quien es tu sempai botsito_
┣ 𝙑𝙊𝙕⤳ _Te diagnostico con gay_
┣ 𝙑𝙊𝙕⤳ _No digas eso papu_
┣ 𝙑𝙊𝙕⤳ _A nadie le importa_
┣ 𝙑𝙊𝙕⤳ _Fiesta del admin_
┣ 𝙑𝙊𝙕⤳ _Fiesta del administrador_ 
┣ 𝙑𝙊𝙕⤳ _Vivan los novios_
┣ 𝙑𝙊𝙕⤳ _Feliz cumpleaños_
┣ 𝙑𝙊𝙕⤳ _Noche de paz_
┣ 𝙑𝙊𝙕⤳ _Buenos dias_
┣ 𝙑𝙊𝙕⤳ _Buenos tardes_
┣ 𝙑𝙊𝙕⤳ _Buenos noches_
┣ 𝙑𝙊𝙕⤳ _Audio hentai_
┣ 𝙑𝙊𝙕⤳ _Chica lgante_
┣ 𝙑𝙊𝙕⤳ _Feliz navidad_
┣ 𝙑𝙊𝙕⤳ _Vete a la vrg_
┣ 𝙑𝙊𝙕⤳ _Pasa pack Bot_
┣ 𝙑𝙊𝙕⤳ _Atencion grupo_
┣ 𝙑𝙊𝙕⤳ _Marica quien_
┣ 𝙑𝙊𝙕⤳ _Murio el grupo_
┣ 𝙑𝙊𝙕⤳ _Oh me vengo_
┣ 𝙑𝙊𝙕⤳ _tio que rico_
┣ 𝙑𝙊𝙕⤳ _Viernes_
┣ 𝙑𝙊𝙕⤳ _Baneado_
┣ 𝙑𝙊𝙕⤳ _Sexo_
┣ 𝙑𝙊𝙕⤳ _Hola_
┣ 𝙑𝙊𝙕⤳ _Un pato_
┣ 𝙑𝙊𝙕⤳ _Nyanpasu_
┣ 𝙑𝙊𝙕⤳ _Te amo_
┣ 𝙑𝙊𝙕⤳ _Yamete_
┣ 𝙑𝙊𝙕⤳ _Bañate_
┣ 𝙑𝙊𝙕⤳ _Es puto_
┣ 𝙑𝙊𝙕⤳ _La biblia_
┣ 𝙑𝙊𝙕⤳ _Onichan_
┣ 𝙑𝙊𝙕⤳ _Mierda de Bot_
┣ 𝙑𝙊𝙕⤳ _Siuuu_
┣ 𝙑𝙊𝙕⤳ _Epico_
┣ 𝙑𝙊𝙕⤳ _Shitpost_
┣ 𝙑𝙊𝙕⤳ _Rawr_
┣ 𝙑𝙊𝙕⤳ _UwU_
┣ 𝙑𝙊𝙕⤳ _:c_
┣ 𝙑𝙊𝙕⤳ _a_
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};
handler.command = /^(menu2|menú2|menuaudio|menuaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
