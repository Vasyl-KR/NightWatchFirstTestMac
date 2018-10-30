var logger = require('../MyLogger.js');

var retailCommands = {
    setSearchValue: function (name) {
        logger.Mylogger.info('Setting product name...');
        return this.setValue('@searchBar', name);
    },

    submitSearchValue : function () {
        logger.Mylogger.info('Submiting search form...');
        return this.submitForm('@searchBar');
    }

};

var constants


module.exports = {
    url: 'https://www.retailmenot.com/',

    sections: {
        navigateBar: {
            selector: 'header.site-header',
            commands: [retailCommands],
            elements: {
                searchBar: {
                    selector: '.js-search-query'
                },
                searchBarXPath: {
                    selector: '//input[@type = "search"]',
                    locateStrategy: 'xpath'
                },
                cashBackItem: {
                    selector: 'a[href="/cashback"]'
                },
                giftCardDealsItem: {
                    selector: 'a[href="/giftcards"]'
                },
                logInButton: {
                    selector: '[tabindex]'
                }
            }
        }
    }
};