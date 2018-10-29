module.exports = {

    after : function(browser) {
        browser.end();
    },
    'RetailMeNotSearch' : browser => {

        const PRODUCT_NAME = 'Acer';

        var retail = browser.page.RetailMeNotHomePage();
        retail.navigate();
        var navigationBar = retail.section.navigateBar;

        navigationBar
            .assert.title('RetailMeNot: Coupons, Cash Back, Gift Card Deals, Genie & More')
            .setSearchValue(PRODUCT_NAME)
            .submitSearchValue(browser)
            .assert.containsText('h1.category-title', PRODUCT_NAME, 'Search failed');

    }

};