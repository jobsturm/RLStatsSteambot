var ChatBot = require("steam-chat-bot").ChatBot;

var NewTrierBot = new ChatBot('RocketLeague_statbot', 'KladblokSchilderijMicrofoonSpaBlauw', {
    sentryFile: 'bot.newtrier2017.sentry',
    logFile: 'bot.newtrier2017.log',
    autoReconnect: true,
    guardCode: '4X4XJ',
    consoleLogLevel: 'silly',
    displayName: 'Rocket League Stats bot',
    steamapikey: 'C6A6A18DEE989FA0DDD8B045E5BACA4A',
    disableWebserver: false,
    webServerPort: 9090
});


var ntchatid = '108103848177745018';
var testchatid = '103582791438731217';
var phoenixchatid = '103582791439828295';
var ntadmin = '76561198091343023';
var ntadmin2 = '76561198088267448';

var ntadmins = [ntadmin, ntadmin2]

var roomNames = {
    "108103848177745018": "Rocket League Stats room"
}

NewTrierBot.addTriggers([
    {
        name: "MuteCommand",
        type: "BotCommandTrigger",
        options: {
            matches: ["!mute", "!pause"],
            exact: true,
            callback: ["mute"] // calls ChatBot.mute()
        }
    },
    {
        name: "UnmuteCommand",
        type: "BotCommandTrigger",
        options: {
            matches: ["!unmute"],
            exact: true,
            user: ntadmins,
            callback: function (bot) {
                bot.unmute();
            }
        }
    },
    {
        name: 'Playgame',
        type: 'PlayGameTrigger',
        options: {
            appid: '252950'
        }
    },
    {
        name: 'lol',
        type: 'ChatReplyTrigger',
        options: {
            matches: ['lel', 'lul'],
            responses: ['LUUUL'],
        }
    },
    {
        name: 'rlStat',
        type: 'rlStatTrigger',
        option: {
            matches: ["!rlstats"],
            exact: true
        }
    },
    {
        name: 'AcceptFriendRequestTrigger',
        type: 'AcceptFriendRequestTrigger'
    }

]);

NewTrierBot.connect();

setTimeout(function () {
    NewTrierBot.joinChat(ntchatid, true);
}, 1500);