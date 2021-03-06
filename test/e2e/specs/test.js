// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#hello')
      .assert.containsText('p', 'tildetv is a new way to enjoy media on the internet.')
      .assert.elementCount('h1', 1)
      .useXpath()
      .click("//a[contains(text(), 'playlist')]")
      .useCss()
      .pause(1000)
      .assert.elementPresent('#videos')
      .useXpath()
      .click("//a[text()='add videos']")
      .useCss()
      .pause(1000)
      .assert.elementPresent('#howto')
      .assert.containsText('#howto', 'adding stuff to tildetv')
      .end()
  }
}
