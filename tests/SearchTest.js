module.exports = {

    after : function(browser) {
        browser.end();
    },
    'RetailMeNotSearch' : function (browser) {

        var retail = browser.page.RetailMeNotHomePage();


        retail.navigate()
            .assert.title('RetailMeNot: Coupons, Cash Back, Gift Card Deals, Genie & More')
            .setValue('@searchBar', 'Acer')
            .sendKeys('@searchBar', browser.Keys.ENTER)
            .assert.containsText('h1.category-title', 'Acer', 'Search failed');

    },
    'RetailMeNotSearchXPath' : function (browser) {

        var retail = browser.page.RetailMeNotHomePage();


        retail.navigate()
            .assert.title('RetailMeNot: Coupons, Cash Back, Gift Card Deals, Genie & More')
            .setValue('@searchBarXPath', 'Acer')
            .sendKeys('@searchBarXPath', browser.Keys.ENTER);


    }

};