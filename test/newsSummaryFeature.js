var chai = require('chai');
var expect = chai.expect;
// var server = require("http-server/bin/http-server");
var Browser = require('zombie');
var assert = require('assert');
Browser.localhost('newssummary.com', 8080);

describe('Browser working', function() {

  var browser = new Browser();

  it('should be successful', function() {
    browser.visit('/', function(){
      browser.assert.success();
    });
  });

  it('should display Today\'s headlines', function(done) {

    // Test still broken because of async - options either to
    // 1) use browser.wait, passing in a function which returns
    // a specific DOM element (https://stackoverflow.com/questions/19101258/why-does-the-zombie-js-browser-return-empty-html-when-using-bootstrap)
    // Have tried this, but the test always seems to time out before the article is loaded.
    // or
    // 2) wait for browser event 'loaded' to fire, however, according to the docs,
    // this only waits for 'some' scripts to be fully loaded

    browser.visit('/');
    browser.on("loaded", function(){
      expect(browser.text('#article-0')).to.equal("Private school teacher banned for using racist language")
      done();
    })

  });
});
