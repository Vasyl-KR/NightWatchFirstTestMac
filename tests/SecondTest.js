module.exports = {

    'RetailMeNotSearch' : function (browser) {

        var retail = browser.page.RetailMeNotPage();


        retail.navigate()
            .assert.title('RetailMeNot: Coupons, Cash Back, Gift Card Deals, Genie & More')
            .setValue('@searchBar', 'XZ');
            browser.keys(browser.Keys.ENTER);

        browser.pause(2000).end();

    }

};