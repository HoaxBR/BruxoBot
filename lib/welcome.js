var emojiStrip = require('emoji-strip')
const fs = require('fs-extra')

module.exports = welcome = async (client, event) => {
  if (event.who[0] == '1') { 
  await client.removeParticipant(event.chat, event.who); 
  }
 try {
  if ((event.action == 'add') && (iswel == true)) {
  const det = await client.getChatById(event.chat)
  const person = await client.getContact(event.who)
  const personname = person.pushname 
  const groupname = det.contact.formattedName 
  const unique = ``
  const url = emojiStrip(unique)
  console.log(url)
  const filename = ''
  await client.sendTextWithMentions(event.chat, ``)
  await client.sendFileFromUrl(event.chat, url, filename, '')
  } 

  } catch(err) {

  console.log(err)

  }

}
