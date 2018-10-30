var logger = require('../MyLogger.js');
var searchCommands = {
    assertSearchText: function (name) {
        logger.Mylogger.info('Checking search...');
        return this.assert.containsText('@categoryTitle', name, 'Verify search');
    }
};

var constant = {
    PRODUCT : 'HP'
}


module.exports = {
    commands: [searchCommands],
    expected: constant,
    elements: {
        categoryTitle: {
            selector: 'h1.category-title'
        }
    }
};