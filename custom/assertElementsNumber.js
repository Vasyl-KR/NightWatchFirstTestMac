var logger = require('../MyLogger.js');
const util = require('util');


exports.assertion = function(selector, number, msg) {

    let MSG_ELEMENT_NOT_FOUND = 'Element could not be located.';
    this.message = msg || util.format('Testing if selector <%s> contains this number of elements: "%s".', selector, number);

    this.expected = function() {
        return number;
    };

    this.pass = function(value) {
        return value === number;
    };

    this.failure = function(result) {
        let failed = (result === false) ||
            // no such element
            result && (result.status === -1 || result.value === null);

        if (failed) {
            this.message = msg || util.format(MSG_ELEMENT_NOT_FOUND, selector, expectedText);
        }
        return failed;
    };

    this.value = function(result) {
        logger.Mylogger.info(result.value);
        return result.value.length;
    };

    this.command = function(callback) {
        return this.api.elements(this.client.locateStrategy, selector, callback);
    };


};
