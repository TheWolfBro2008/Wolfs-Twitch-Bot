const oAuth = "your-Access-Token-Here";
const nick = "Your bot's Twitch Channel";
const channel = "your channel";

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443");

socket.addEventListener("open", () => {
  socket.send(`PASS oauth:${oAuth}`);
  socket.send(`NICK ${nick}`);
  socket.send(`JOIN #${channel}`);
  document.getElementById("serverOutput").innerText += "Connected!\n";
});

socket.addEventListener('message', (event) => {
  document.getElementById("serverOutput").innerText += event.data + "\n";

  const message = event.data;

  // Respond to PING first
  if (message.startsWith("PING")) {
    socket.send("PONG :tmi.twitch.tv");
    return; // Exit early
  }

  // Process chat messages
  if (message.includes("PRIVMSG")) {
    // Extract the actual chat message text
    const msgText = message.split("PRIVMSG")[1].split(":")[1].trim().toLowerCase();

    if (msgText === "!hello") {
      socket.send(`PRIVMSG #${channel} :Hi!`);
    } else if (msgText === "!help") {
      socket.send(`PRIVMSG #${channel} :Commands: !hello, !help, !youtube, !twitch, !tip, !discord, !itch, !website, !merch, !psn, !steam, !xbox, !riot.`);
    } else if (msgText === "!youtube") {
      socket.send(`PRIVMSG #${channel} :Check out the YouTube channel at https://www.youtube.com/@your-channel`);
    } else if (msgText === "!twitch") {
      socket.send(`PRIVMSG #${channel} :Watch the stream here: https://twitch.tv/your-twitch-channel'wwwwwwww);
    } else if (msgText === "!tip") {
      socket.send(`PRIVMSG #${channel} :'You can tip me at: Tipping Link`);
    } else if (msgText === "!discord") {
      socket.send(`PRIVMSG #${channel} :Join our Discord: discord server invite`);
    } else if (msgText === "!itch") {
      socket.send(`PRIVMSG #${channel} :Check out my games on itch.io: https://your-username.itch.io/`);
    } else if (msgText === "!website") {
      socket.send(`PRIVMSG #${channel} :Visit my website: https://example.com/`);
    } else if (msgText === "!merch") {
      socket.send(`PRIVMSG #${channel} :Buy merch here: Merch link`);
    } else if (msgText === "!psn") {
      socket.send(`PRIVMSG #${channel} :My PSN ID is: Playstation username`);
    } else if (msgText === "!steam") {
      socket.send(`PRIVMSG #${channel} :Add me on Steam: https://steamcommunity.com/id/your-steam-account`);
    } else if (msgText === "!xbox") {
      socket.send(`PRIVMSG #${channel} :My Xbox Gamertag is: Xbox Username`);
    }else if (msgText === "!riot") {
      socket.send(`PRIVMSG #${channel} :My Riot ID is: Example#Tag`);
    }
  }
});


socket.addEventListener('error', (error) => {
  document.getElementById("serverOutput").innerText += "Socket error\n";
  console.error(error);
});

socket.addEventListener('close', () => {
  document.getElementById("serverOutput").innerText += "Disconnected\n";
});
