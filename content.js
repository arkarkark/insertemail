chrome.storage.sync.get("items", function(items) {
  items = items.items
  var v = document.activeElement.value
  var value = null
  var first = null
  items.forEach((item) => {
    itemValue = eval(item)
    value = value || itemValue
    first = first || itemValue
    if (v == itemValue) {
      value = null
    }
  })
  value = value || first
  document.activeElement.value = value
})
