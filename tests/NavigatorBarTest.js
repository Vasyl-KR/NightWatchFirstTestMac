module.exports = {

    after : function(browser) {
        browser.end();
    },
    'ItemsClickTest' : function (browser) {

        var retail = browser.page.RetailMeNotPage();


        retail.navigate()
            .assert.title('RetailMeNot: Coupons, Cash Back, Gift Card Deals, Genie & More')
            .click('@cashBackItem')
            .click('@giftCardDealsItem');

    },


};