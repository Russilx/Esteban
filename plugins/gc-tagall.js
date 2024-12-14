

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*MENSAJE:* ${pesan}`;
  let teks = `*✨You are never too old to set another goal or to dream a new dream✨*\n\n ${oi}\n\n➥ _*@tebi_.01:*_\n`;
  for (const mem of participants) {
    teks += `𝙴𝙴𝙰 ➭ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ *Bot EEA ⇝@ezequiel.caporalini_*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(todos)$/i;
handler.admin = true;
handler.group = true;
export default handler;
