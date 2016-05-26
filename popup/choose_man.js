/*
Given the name of a man, get the URL to the corresponding image.
*/
function manNameToURL(manName) {
  switch (manName) {
    case "git":
      return chrome.extension.getURL("men/git");
    case "ls":
      return chrome.extension.getURL("men/ls");
    case "grep":
      return chrome.extension.getURL("men/grep");
  }
}

/*
Listen for clicks in the popup.

If the click is not on one of the men, return early.

Otherwise, the text content of the node is the name of the man we want.

Inject the "manup.js" content script in the active tab.

Then get the active tab and send "manup.js" a message
containing the URL to the chosen man's image.
*/
document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("man")) {
    return;
  }

  var chosenMan = e.target.textContent;
  var chosenManURL = manNameToURL(chosenMan);

  chrome.tabs.executeScript(null, {
    file: "/content_scripts/manup.js"
  });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {manURL: chosenManURL});
  });

});