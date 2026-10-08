[README (5).md](https://github.com/user-attachments/files/33203278/README.5.md)
# Villain Alias Generator

A small full stack web app that asks five personality questions and gives you a comic book villain alias, like "The Crimson Chessmaster" or "The Atomic Juggernaut".

Built with plain HTML, CSS, and JavaScript on the front end and a Node.js server (no framework) on the back end.

<img width="1034" height="710" alt="Screenshot 2026-10-07 at 8 52 18 PM" src="https://github.com/user-attachments/assets/bd3710f8-5530-4866-b1c5-2d60269445ab" />


## How it works

1. You answer five multiple choice questions. Each answer is secretly a **a**, **b**, or **c**.
2. When you click the button, the browser reads your answers and sends them to the server using `fetch`, like `/api?quest_1=a&quest_2=c&...`.
3. The server counts which letter you picked the most and uses it to choose a villain type:

   | Most picked | Villain type   | Example alias            |
   | ----------- | -------------- | ------------------------ |
   | **a**       | The Mastermind | The Silent Puppeteer     |
   | **b**       | The Brawler    | The Thunder Crusher      |
   | **c**       | The Trickster  | The Midnight Jester      |

4. The server picks a random first word and last word from that type's lists and sends the alias back as JSON.
5. The browser shows the alias on the page.

If there is a tie, the server picks the earliest letter (a, then b, then c).

## Getting started

### Requirements

- [Node.js](https://nodejs.org/)

### Install and run

```bash
# 1. Go into the project folder
cd Wu-tang_name_generator

# 2. Install the dependency
npm install figlet

# 3. Start the server
node server.js
```

Then open **http://localhost:8000** in your browser.

To stop the server, press `Ctrl + C` in the terminal. After you change `server.js`, stop and restart the server to see the changes. Changes to HTML, CSS, and `main.js` only need a browser refresh.

## Ideas for next steps

- Add a fourth villain type and a short description for each type
- Show a villain "power level" or catchphrase with the alias
- Add a "Play again" button that clears the answers
- Store results in a database and show the most common alias
- Deploy it online (Render or Railway both work with Node servers)

## Author

Lucious Lokko
