function restore() {
  chrome.storage.sync.get({
    items: ["window.location.host.split('.').slice(-2,-1)[0] + '@example.com'"]
  }, (item) => {
    var ul = document.getElementById("list")
    while(ul.firstChild.id != "add") {
      ul.removeChild(ul.firstChild)
    }
    var addInput = document.getElementById("add").querySelector("input")
    addInput.value = ""
    addInput.focus()

    item.items.forEach((item) => {
      var input = document.createElement("input")
      input.value = item
      var x = document.createElement("button")
      x.appendChild(document.createTextNode("x"))
      x.addEventListener("click", () => { input.value = "" })
      var li = document.createElement("li")
      li.appendChild(input)
      li.appendChild(x)
      ul.insertBefore(li, ul.lastChild)
    })
  })
}

function save() {
  var ul = document.getElementById("list")
  var newItems = []
  ul.querySelectorAll("input").forEach((child)=> {
    if (child.value) {
      newItems.push(child.value)
    }
  })
  return chrome.storage.sync.set({items: newItems}, restore);
}

document.getElementById("save").addEventListener("click", save)
document.addEventListener("DOMContentLoaded", restore);
