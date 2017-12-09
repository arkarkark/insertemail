function getIndex(arr, index) {
  return arr.slice(index, index + 1)[0]
}

var hostParts = window.location.host.split(".")
var hostname = getIndex(hostParts, -2)

document.execCommand("insertText", false, hostname + "@mail.wtwf.com")
