var retailCommands = {
    setSearchValue: function (name) {
        return this.setValue('@searchBar', name);
    },
    submitSearchValue : function (browser) {
        return this.sendKeys('@searchBar', browser.Keys.ENTER);
    }
};


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