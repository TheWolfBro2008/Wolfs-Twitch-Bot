const tmi = require("tmi.js");

// Replace these with your actual bot info
const botUsername = "your_bot_username";
const oauthToken = "oauth:your_access_token_here";
const channelName = "your_channel_name";

const client = new tmi.Client({
  identity: {
    username: botUsername,
    password: oauthToken
  },
  channels: [channelName]
});

client.connect().then(() => {
  console.log(`✅ Connected to Twitch chat as ${botUsername}`);
}).catch(console.error);

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  const msg = message.trim().toLowerCase();

  switch (msg) {
    case "!hello":
      client.say(channel, `Hi @${tags.username}!`);
      break;
    case "!help":
      client.say(channel, "Commands: !hello, !help, !youtube, !twitch, !tip, !discord, !itch, !website, !merch, !psn, !steam, !xbox, !riot");
      break;
    case "!youtube":
      client.say(channel, "Check out the YouTube channel at https://www.youtube.com/@your-channel");
      break;
    case "!twitch":
      client.say(channel, "Watch the stream here: https://twitch.tv/your-twitch-channel");
      break;
    case "!tip":
      client.say(channel, "You can tip me at: Tipping Link");
      break;
    case "!discord":
      client.say(channel, "Join our Discord: discord server invite");
      break;
    case "!itch":
      client.say(channel, "Check out my games on itch.io: https://your-username.itch.io/");
      break;
    case "!website":
      client.say(channel, "Visit my website: https://example.com/");
      break;
    case "!merch":
      client.say(channel, "Buy merch here: Merch link");
      break;
    case "!psn":
      client.say(channel, "My PSN ID is: Playstation username");
      break;
    case "!steam":
      client.say(channel, "Add me on Steam: https://steamcommunity.com/id/your-steam-account");
      break;
    case "!xbox":
      client.say(channel, "My Xbox Gamertag is: Xbox Username");
      break;
    case "!riot":
      client.say(channel, "My Riot ID is: Example#Tag");
      break;
  }
});
