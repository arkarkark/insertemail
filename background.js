/* global chrome */

function handleMenuClick() {
  chrome.tabs.executeScript({file: "content.js"});
}

chrome.contextMenus.create({
  id: "Add Email Address",
  title: "Add Email Address",
  contexts: ["editable"],
})

chrome.contextMenus.onClicked.addListener(handleMenuClick)
chrome.commands.onCommand.addListener(function(command) {
  if (command == "insert-email") {
    chrome.tabs.executeScript({file: "content.js"});
  }
});
