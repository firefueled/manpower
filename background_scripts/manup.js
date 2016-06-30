function filterMen() {

}

function manned(details) {
  regexFilter = /^man ([\w\s]+)$/
  res = regexFilter.exec(details.url)
  
  if (res && res.size > 1) {
    manTime()
  }
}

function listenToMen() {
  console.log('listen')
  browser.webNavigation.onBeforeNavigate.addListener(
    manned
  )
}

/**
 * Do manly stuff
 */
function manTime() {
  console.log('mantime!')
}

listenToMen()