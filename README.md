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
| `!hello`    | Bot responds with a greeting        |
| `!uptime`   | Shows how long the stream has been live |
| `!discord`  | Posts your Discord server link (customize) |
| `!commands` | Lists available commands            |
| `!help`     | Shows help info about the bot       |

*(Replace these with your actual built-in commands and descriptions.)*

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- A Twitch account
- A Twitch OAuth token with chat permissions (read & send messages)

### How to get your Twitch OAuth Token

1. Go to [https://twitchapps.com/tmi/](https://twitchapps.com/tmi/)
2. Click "Connect with Twitch" and authorize the app
3. Copy the generated token (starts with `oauth:`)

**Note:** Keep this token private.

---

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/twitchbot.git
cd twitchbot
