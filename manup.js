// var filter = {
//   url:
//   [
//     {hostContains: "man ls"}
//   ]
// }

// function manned(details) {
//   regexFilter = /^man ([\w\s]+)$/;
//   res = regexFilter.exec(details.url);
  
//   if (res && res.size > 1) {
//     manTime();
//   }
// }

// function listenToMen() {
//   alert('listen');
//   browser.webNavigation.onBeforeNavigate.addListener(manned, filter);
// }

// /**
//  * Do manly stuff
//  */
// function manTime() {
//   alert('mantime!');
// }
chrome.commands.getAll(function(commands) {
  commands.forEach(function(command) {
    console.log(command);
  });
});

chrome.commands.onCommand.addListener(function(command) {
  console.log("onCommand event received for message: ", command);
});
// listenToMen();