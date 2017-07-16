// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

let url = ''

module.exports = {
  'start': browser => {
    url = browser.globals.devServerURL
    browser
      .url(url)
      .waitForElementVisible('#app', 5000)
      .pause(1000)
      .end()
  }
}
