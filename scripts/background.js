require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY;


// Listener for browser action (extension icon click)
chrome.action.onClicked.addListener((tab) => {
  // Can be used to trigger popup or another action
  console.log("Extension icon clicked!");
});
