var chai = require('chai');
var expect = chai.expect;
var server = require("http-server/bin/http-server");
var Browser = require('zombie');
Browser.localhost('newssummary.com', 8080);

describe('Browser working', function() {

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  it('should be successful', function() {
    browser.assert.success();
  });

  it('should display Today\'s headlines', function() {
    expect(browser.html()).to.include("Private school teacher banned for using racist language");
    expect(browser.html()).to.include("Complaints system could be extended after MP bullying claims");
    expect(browser.html()).to.include("Even in the era of super-clubs, football’s pleasure principle still holds");
    expect(browser.html()).to.include("Pep Guardiola fined £20,000 by FA for wearing yellow ribbon in FA Cup");
  });

});
