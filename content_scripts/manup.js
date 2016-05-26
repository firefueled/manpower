/*
manup():
* removes every node in the document.body,
* then inserts the chosen beast
* then removes itself as a listener 
*/
function manup(request, sender, sendResponse) {
  removeEverything();
  insertMan(request.manRL);
  chrome.runtime.onMessage.removeListener(manup);
}

/*
Remove every node under document.body
*/
function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

/*
Given a URL to a beast image, create and style an IMG node pointing to
that image, then insert the node into the document.
*/
function insertMan(manURL) {
  var manDiv = document.createElement("div");
  manDiv.innerHTML = manURL;
  document.body.appendChild(manDiv);
}

/*
Assign manup() as a listener for messages from the extension.
*/
chrome.runtime.onMessage.addListener(manup);