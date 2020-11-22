let Discord = require('discord.js') 
let client = new Discord.Client()
let prefix = '/'

client.on('ready', () => {
  console.log('I am online')
  client.user.setActivity('with Faroo Tits')
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);

})

client.login('Nzc5OTcxNzg3NTk2NDk2OTUx.X7oTVQ.5aZwB0__cTswYmiKtT_3DBjWq4o')
