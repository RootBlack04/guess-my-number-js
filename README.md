# Guess My Number (JS)

A small JavaScript game where you guess a secret number between **1 and 20**.  
This repository is an educational implementation based on the project from **Jonas Schmedtmann’s course** (“The Complete JavaScript Course”).  
I built it to practice DOM manipulation, event handling, and basic game logic.

> ⚠️ Attribution  
> This is **not** an original game idea. It’s a personal learning exercise inspired by the course project.  
> Course author: Jonas Schmedtmann.

---

## 🚀 Demo
Open `index.html` directly in your browser, or serve it with a simple static server.

```bash
# Option 1: VS Code Live Server (recommended)
# Right-click index.html → "Open with Live Server"

# Option 2: Node http-server
npm i -g http-server
http-server .

```
---
🎮 How to Play

Enter a number (1–20) in the input field.

Click Check!

You’ll see feedback: “Too high!”, “Too low!”, or “Correct Number!”.

Your score starts at 20 and decreases with each wrong guess.

Click Again! to restart with a new secret number, and try to beat your highscore.

##🧩 Tech Stack

HTML, CSS

Vanilla JavaScript (DOM)
---
##📁 Files

index.html – structure and elements

style.css – styles (includes responsive tweaks for mobile)

script1.js – game logic and DOM interactions

##✅ Status

Basic desktop version complete.

Mobile layout improved (font sizes, spacing, stacking, tap targets).

🏗 Local Development

Just clone and open:
```bash
git clone https://github.com/RootBlack04/guess-my-number-js.git
cd guess-my-number-js
# open index.html in your browser or use a local server
```
##📜 License

MIT — feel free to learn from it and adapt.
Please keep the attribution to the original course author.
