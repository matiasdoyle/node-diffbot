var assert = require('assert'),
    Diffbot = require('../lib/diffbot');

var diffbot = new Diffbot('52dc70c241bde985fed528f496c574ac');

var options = {
  url : 'http://devcloud.me/node-diffbot/test'
};

describe('Diffbot', function () {
  describe('#article', function () {
    it('should return valid JSON result', function (done) {
      diffbot.article(options, function (err, data) {
        assert.deepEqual(typeof data, 'object');
        done();
      });
    });

    it('should throw an error if an URL was not supplied.', function () {
      try {
        diffbot.article({}, function (err, data) {
          assert.fail();
        });
      } catch (e) {
        assert.deepEqual(typeof e, 'object');
      }
    });
  });
});