/*
CREDIT ⦂▹ MR SUPUN FERNANDO
CREDIT ⦂▹ DARK SHADOW MODZ
CHANNEL ⦂▹ https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

Don't Remove Credit😒💔

**/


const axios = require('axios');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const {cmd , commands} = require('../command')

//============= SUPUN MD MENU ==============

cmd({
    pattern: "menu3",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let pan = `> 𝐇𝐈𝐑𝐀𝐍𝐘𝐀 𝐌𝐃`;
const url = "https://raw.githubusercontent.com/hiran-md/Darkwolf-DATA_BASE/refs/heads/main/Logo/DARK_WOLF-MD.webp"
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: conn.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg' } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '𝐇𝐈𝐑𝐀𝐍𝐘𝐀 𝐒𝐀𝐓𝐇𝐒𝐀𝐑𝐀',
          hasMediaAttachment: false
        }),
                body: {
                  text: `ԋιɾυɯα Mԃ GιƚԋυႦ? Rҽρσ\nB�? Mɾ.ԋιɾαɳყα ʂαƚԋʂαɾα`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
      "name": "quick_reply",
      "buttonParamsJson": `{"display_text":"Alive ?",
      "id": ".alive"}`
             },
                    {
     "name": "quick_reply",
     "buttonParamsJson": `{"display_text":"Ping ??",
     "id": ".ping"}`
             },
             {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":" 🏮ωнαтѕαρρ�?","url":"https://whatsapp.com/channel/0029Vb1TE4x6WaKwde5X8R2K","merchant_url":"https://whatsapp.com/channel/0029Vb1TE4x6WaKwde5X8R2K"}`
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":" 🏮Gιƚԋυ�?","url":"https://github.com/hiran-md/DARKWOLF-MD","merchant_url":"https://github.com/hiran-md/DARKWOLF-MD"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

/*
FIRST CREDIT BY SUPUN FERNANDO
OWNER OF DARK SHADOW MODZ

Don't Remove Credit 😒💥
**/
