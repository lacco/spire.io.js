/**
 * @fileOverview Billing Resource class definition
 */

/**
 * Represents a billing subscription in the spire api.
 *
 * @class Billing Resource
 *
 * @constructor
 * @extends Resource
 * @param spire {object} Spire object
 * @param data {object} Billing data from the spire api
 */
Spire.Billing = function (spire, data) {
  this.spire = spire;
  this.data = data;
  this.resourceName = 'billing';
}

var Resource = Spire.Resource,
    Billing = Spire.Billing;

Billing.prototype = new Resource();
