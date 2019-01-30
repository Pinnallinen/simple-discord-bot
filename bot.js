// const Discord = import("discord.io");
// const auth = import("./auth.json");

const Discord = require("discord.js");

const auth = require("./auth.json");

const https = require("https");

var request = require('request');

var bot = new Discord.Client();

// Logging onto discord
bot.login(auth.token);

bot.on("ready", () => {
    console.log(`Bot connected. \n`);
    console.log(bot);
});

bot.on("message", ( message ) => {
    var content = message.content;
    if ( content.substring(0,1) === "!" ) {
        var text = content.substring(1).split(" ");

        var command = text[0];
            switch ( command ) {
                case "auta":
                    message.reply(`Tämänhetkiset tuetut komennot ovat:
!auta
!kirjoita :regional_indicator_j::regional_indicator_o::regional_indicator_t::regional_indicator_a::regional_indicator_i::regional_indicator_n: älä käytä erikoismerkkejä!
!vitsi kerron sinulle hauskan vitsin `);
                    break;

                    case "kirjoita":
        				var replyMs = "";
                        //console.log(text.toString());
                        //console.log(content);
        				var textToWrite = content.substring(10);
                        textToWrite = textToWrite.toLowerCase();
                        //console.log(textToWrite);
        				for ( var i = 0; i < textToWrite.length; i++ ) {
                            console.log(textToWrite.charAt(i));
        					if ( textToWrite.charAt(i) === " " )
        						replyMs += '   ';
                            else if ( textToWrite.charAt(i) >= "a" && textToWrite.charAt(i) <= "z" )
                                replyMs += ':regional_indicator_'+ textToWrite.charAt(i) +':';
        					else {
        						replyMs = "Viestissä on erikoismerkkejä!";
                                break;
                            }
        				}
        				message.reply(replyMs);
        				break;

                    case "vitsi":
                        var options = {
                            url: "http://icanhazdadjoke.com/",
                            method: "GET",
                            headers: {
                                "Accept": "text/plain"
                            }
                        }
                        request(options, (err, res, body) => {
                            if ( !err && res.statusCode === 200 )
                                message.reply(body);
                            else
                                message.reply("Jotain meni pieleen vitsin haussa.");
                        });
                        break;
            }
        }
});
