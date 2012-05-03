/**
 * @fileOverview Message Resource class definition
 */

/**
 * Represents a message in the spire api.
 *
 * @class Message Resource
 *
 * @constructor
 * @extends Resource
 * @param {object} spire Spire object
 * @param {object} data Message data from the spire api
 */
Spire.Message = function (spire, data) {
  this.spire = spire;
  this.data = data;
  this.content = data.content;
  this.type = data.type;
  this.timestamp = data.timestamp
  this.resourceName = 'message';
}

var Resource = Spire.Resource,
    Message = Spire.Message;

Message.prototype = new Resource();

/**
 * <p>Updates (puts to) the message.
 *
 * @param {object} data Message data
 * @param {function (err, resource)} cb Callback
 */
Resource.prototype.update = function (data, cb) {
  var resource = this;
  this.request('update', data, function (err, data) {
    if (err) return cb(err);
    resource.data = data;
    resource.content = data.content;
    resource.timestamp = data.timestamp
    cb(null, resource);
  });
};

