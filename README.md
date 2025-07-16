# TwitchBot

A customizable Twitch chat bot built with Node.js. This bot supports built-in commands and can be easily extended with new commands to enhance your Twitch channel interaction.

---

## Features

- Connects to Twitch chat via IRC
- Built-in commands for moderation, fun, and information
- Easily add your own custom commands
- Supports OAuth token authentication

---

## Built-in Commands

| Command     | Description                          |
|-------------|------------------------------------|
| `!hello`    | Bot responds with a greeting              |
| `!help`     | Displays a list of all commands!          |
| `!youtube`  | Posts your youtube link (replace in file) |
| `!twitch`   | Posts your Twitch link (replace in file)  |
| `!tip`      | Posts your tipping link (replace in file) |
| `!discord`  | Posts your Discord server link (replace in file) |
| `!itch`     | Posts you itch.io link (replace in file) |
| `!website`  | Posts your website link (replace in file) |
| `!merch`    | Posts your merch link (replace in file) |
| `!psn`      | Posts your PlayStation Network Username (replace in file) |
| `!steam`    | Posts your Steam Account link (replace in file) |
| `!xbox`     | Posts your Xbox Live Username (replace in file) |
| `!riot`     | Posts your Riot Account Username#Tag (replace in file) |


---

## Getting Started

### Prerequisites

- A Twitch account
- A Twitch OAuth token with chat permissions (read & send messages)
- Setting Twitch Account as Moderator

### How to get your Twitch OAuth Token

1. Go to [https://twitchtokengenerator.com/](https://twitchtokengenerator.com)]
2. Click "Bot Token" and authorize the app
3. Copy the Access Token

**Note:** Keep this token private.

---

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/twitchbot.git
cd twitchbot
```
2. Open repository

3. Open main.js 

4. Replace
```JavaScript
const oAuth = "your-Access-Token-Here";
```
With your access token from the first step

5. Replace
```JavaScript
const nick = "Your bot's Twitch Channel";
```
With the name of the channel that your bot is using (Just the user name!).

6. Replace
```JavaScript
const channel = "your channel";
```
With the name of the Twitch Channel that you would like the bot to work on! (Please Note: I am not responsible for any missue like using it to spamn another Twitch Channel. If you chat bot gets banned, that is your fault!)

7. Edit Commands to your liking!

8. To host follow the Hosting option below!

## Hosting
(Please note all of the options I am listing are free but there are more!)

1. Self Hosted
You can choose to self host by just running 'index.html' in a browser. This is the safest option and quickest.

2. Web Hosted
You can also host it on the web 24/7 for free! Follow these steps:
  1. Go to https://infinityfree.com
  2. Create an Account
  3. Choose "Create Account" on the dashbord
  4. Create a Free account
  5. Follow the steps by infinity free
  6. Open up the "File Manager"
  7. Upload both 'index.html' and 'main.js'
  8. Your all set! Open the site and you should see the terminal and your chat bot should work!
