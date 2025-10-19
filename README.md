# 🎃 Devil Game - Chrome Extension

A spooky choose-your-own-adventure Halloween game in a Chrome extension!

## 🎮 Game Description

Enter a haunted mansion on Halloween night and make choices that determine your fate! Each decision leads you down a different path, with multiple endings ranging from triumphant victories to tragic fates.

## 📁 Files Included

- `manifest.json` - Chrome extension configuration
- `popup.html` - Main game interface
- `popup.css` - Spooky Halloween styling
- `popup.js` - Game logic and story data
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons (need to be created)

## 🚀 How to Install

1. **Create Icons** (temporary step):
   - You need to create three icon images: 16x16, 48x48, and 128x128 pixels
   - Name them `icon16.png`, `icon48.png`, and `icon128.png`
   - You can use any Halloween/spooky themed icons (pumpkin, ghost, devil, etc.)
   - Or use an online icon generator to create simple placeholder icons

2. **Load the Extension in Chrome**:
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top right)
   - Click "Load unpacked"
   - Select the "devil game" folder
   - The extension should now appear in your extensions list!

3. **Play the Game**:
   - Click the Devil Game icon in your Chrome toolbar
   - Read the story and make your choices
   - Try to find all the different endings!

## 🎯 Game Features

- **Branching Narrative**: Over 30+ unique story nodes
- **Multiple Endings**: Find happy endings, sad endings, and everything in between
- **Beautiful UI**: Spooky Halloween-themed design with smooth animations
- **Choices Matter**: Each decision leads to different consequences
- **Replayability**: Multiple paths to explore and endings to discover

## 🎨 Story Paths

The game features multiple entry points:
- 🚪 **Front Door**: The traditional approach
- 🪟 **Broken Window**: The risky route
- 🔧 **Plumbing System**: The sneaky way

Each path branches into unique scenarios with different challenges and opportunities!

## 🏆 Endings

Try to discover all the different endings:
- 🌟 Hero endings (save the spirits!)
- 😰 Escape endings (barely made it out!)
- 💀 Tragic endings (not everyone survives...)
- 🎯 Special endings (unique achievements!)

## 🛠️ Customization

Want to modify the story? Edit `popup.js`:
- The `story` object contains all story nodes
- Each node has `text`, `choices`, and optionally `ending` properties
- Add new nodes by creating new entries in the story object
- Connect them by setting the `next` property in choices

## 📝 Notes

- The game saves no data - each playthrough is fresh
- Click "Start Over" at any ending to play again
- The extension works offline once loaded

## 🎃 Happy Haunting!

Enjoy your spooky adventure in the Devil Game!

