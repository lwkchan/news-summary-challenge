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

});
