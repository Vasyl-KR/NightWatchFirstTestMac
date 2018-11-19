var util = require('util');
var EventEmitter = require('events');
var logger = require('../../MyLogger.js');

function getElementsText() {
    EventEmitter.call(this);
}

util.inherits(getElementsText, EventEmitter);

getElementsText.prototype.command = function(selector) {
    var self = this;
   // const api = this.client.api;

    var elText = [];
    this.api.elements(this.client.locateStrategy, selector, function (result) {
        for (let i in result.value) {
            this.elementIdText(result.value[i].ELEMENT, function (result) {
                elText[i] = result.value;
              // logger.Mylogger.info(elText[i]);
            });
        }
    }).perform(function () {
         self.emit('complete');
         return elText;
    });
    this.emit('complete');
};

module.exports = getElementsText;