module.exports = {

    after : function(browser) {
        browser.end();
    },
    'RetailMeNotSearch' : function (browser) {

        var retail = browser.page.RetailMeNotPage();


        retail.navigate()
            .assert.title('RetailMeNot: Coupons, Cash Back, Gift Card Deals, Genie & More')
            .setValue('@searchBar', 'Acer');
            browser.keys(browser.Keys.ENTER);

    },
    'RetailMeNotSearch2' : function (browser) {

        var retail = browser.page.RetailMeNotPage();


        retail.navigate()
            .assert.title('RetailMeNot: Coupons, Cash Back, Gift Card Deals, Genie & More')
            .setValue('@searchBarXPath', 'Acer');
        browser.keys(browser.Keys.ENTER);

    }

};