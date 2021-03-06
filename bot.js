
const Discord = require("discord.js");

// The secret token.
const auth = require("./auth.json");

// request used for a request from external API
var request = require('request');

var bot = new Discord.Client();

// Logging onto discord
// From github you can use the line below 
//bot.login("YOURTOKENHERE");
bot.login(auth.token);


bot.on("ready", () => {
    console.log(`Bot connected.`);
});

bot.on("message", ( message ) => {
    var content = message.content;
    if ( content.substring(0,1) === "!" ) {
        var text = content.substring(1).split(" ");

        var command = text[0];
            switch ( command ) {
                // Returns the list of the available commands as a reply
                case "auta":
                    message.reply(`Tämänhetkiset tuetut komennot ovat:
!auta
!kirjoita :regional_indicator_j::regional_indicator_o::regional_indicator_t::regional_indicator_a::regional_indicator_i::regional_indicator_n: älä käytä erikoismerkkejä!
!vitsi kerron sinulle hauskan vitsin `);
                    break;

                    // Returns the given text written with special characters
                    case "kirjoita":
        				var replyMs = "";
        				var textToWrite = content.substring(10);
                        textToWrite = textToWrite.toLowerCase();
        				for ( var i = 0; i < textToWrite.length; i++ ) {
        					if ( textToWrite.charAt(i) === " " )
        						replyMs += '   ';
                            else if ( textToWrite.charAt(i) >= "a" && textToWrite.charAt(i) <= "z" )
                                replyMs += ':regional_indicator_'+ textToWrite.charAt(i) +':';
        					else {
        						replyMs = "Viestissä on erikoismerkkejä!";
                                break;
                            }
        				}
        				message.channel.send(replyMs);
        				break;

                    // Returns a joke-message from an API
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
                                message.channel.send(body);
                            else
                                message.channel.send("Jotain meni pieleen vitsin haussa.");
                        });
                        break;
            }
        }
});
