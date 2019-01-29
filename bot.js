// const Discord = import("discord.io");
// const auth = import("./auth.json");

const Discord = require("discord.js");

const auth = require("./auth.json");


var bot = new Discord.Client();

console.log(bot);
console.log(bot.login(auth.token));

bot.on("ready", () => {
    console.log(`Bot connected. \n`);
});

bot.on("message", ( message ) => {
    var content = message.content;
    if ( content.substring(0,1) === "!" ) {
        var text = content.substring(1).split(" ");

        var command = text[0];
            switch ( command ) {
                case "auta":
                    message.reply('Tämänhetkiset tuetut komennot ovat: \n' +
                            '!auta \n' +
                            '!kirjoita jotain\\_tekstiä, korvaa välilyönnit \\_ merkillä! \n');
                    break;

                    case "kirjoita":
        				var viesti = '';
                        console.log(text.toString());
        				var textToWrite = text[1];
                        textToWrite = textToWrite.toLowerCase();
                        console.log(textToWrite);
        				for ( var i = 0; i < textToWrite.length; i++ ) {
        					if ( textToWrite.charAt(i) == '_' )
        						viesti += '   ';
        					else
        						viesti += ':regional_indicator_'+ textToWrite.charAt(i) +':';
        				}

        				message.reply(viesti);

        				break;
            }
        }
});
