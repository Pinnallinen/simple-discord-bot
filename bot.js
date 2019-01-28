// const Discord = import("discord.io");
// const auth = import("./auth.json");

const Discord = require("discord.io");

const auth = require("./auth.json");



// Initializing the bot
// var bot = new Discord.Client({
//    token: auth.token,
//    autorun: true
// });
//
// bot.on("ready", ( event ) => {
//     console.log("test");
//     console.log(`Bot connected. \n Logged in as: ${bot.username} id:  ${bot.id}`);
// });

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    console.log("test");
    console.log(bot.username + ' - (' + bot.id + ')');
});


bot.on("message", ( user, userID, channelID, message, event ) => {
    //
    console.log("test");
    try {
        if ( message.substring(0, 1) === "!" ) {
            var args = message.substring(1).split(' ');
            var command = args[0];
            command = command.toLowerCase();

            switch ( command ) {
                case "auta":
                    bot.sendMessage({
                        to: channelID,
                        message: 'Tämänhetkiset tuetut komennot ovat: \n' +
                                '!auta \n' +
                                '!kirjoita jotain\\_tekstiä, korvaa välilyönnit \\_ merkillä! \n'
                    });
                    break;

                    case "kirjoita":
        				var viesti = '';
        				var kirjoitettava = args[1];
        				for ( var i = 0; i < kirjoitettava.length; i++ ) {
        					if ( kirjoitettava.charAt(i) == '_' )
        						viesti += '   ';
        					else
        						viesti += ':regional_indicator_'+ kirjoitettava.charAt(i) +':';
        				}
        				bot.sendMessage({
        					to: channelID,
        					message: viesti
        				});
        				break;

            }
        }
    }
    catch ( error ) {
        console.log(error);
    }
});
