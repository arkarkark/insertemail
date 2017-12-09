console.log("I'm a background page!")

function handleMenuClick() {
  console.log("CLICKY!", arguments)
  chrome.tabs.executeScript({file: 'content.js'});
}


var menu = chrome.contextMenus.create({
  id: "Add Email Address",
  title: "Add Email Address",
  contexts: ["editable"],
})

chrome.contextMenus.onClicked.addListener(handleMenuClick)
