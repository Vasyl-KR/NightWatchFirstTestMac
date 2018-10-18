module.exports = {
    url: 'https://www.retailmenot.com/',
    elements: {
        searchBar: {
            selector: '.js-search-query'
        },
        searchBarXPath: {
            selector:'//input[@type = "search"]',
            locateStrategy : 'xpath'
        },
        cashBackItem: {
            selector: 'a[href="/cashback"]'
        },
        giftCardDealsItem: {
            selector: 'a[href="/giftcards"]'
        },
        logInButton : {
            selector: '[tabindex]'
        }

    }
};