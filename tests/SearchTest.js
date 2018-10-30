var pageConst = require('../pages/RetailMeNotHomePage.js');

module.exports = {

    after : function(browser) {
        browser.end();
    },
    'RetailMeNotSearch' : browser => {

        browser.
        page.RetailMeNotHomePage()
            .navigate().section.navigateBar
            .assert.title(pageConst.expected.TITLE)
            .setSearchValue(pageConst.expected.PRODUCT)
            .submitSearchValue().api.page.SearchPage()
            .assertSearchText(pageConst.expected.PRODUCT);


    }

};