module.exports = {

    after : function(browser) {
        browser.end();
    },
    'CashBackClickTest' : function (browser) {

        var retail = browser.page.RetailMeNotHomePage();


        retail.navigate()
            .click('@cashBackItem')
            .assert.containsText('h3.top-offers-section-title', 'Featured Cash Back Offers')
            .click('@giftCardDealsItem');

    },
    'GiftCardDealsClickTest' : function (browser) {

        var retail = browser.page.RetailMeNotHomePage();


        retail.navigate()
            .click('@giftCardDealsItem')
            .assert.containsText('h3.top-offers-section-title', 'Featured Gift Card Deals');

    },

};