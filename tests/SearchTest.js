var pageConst = require('../pages/RetailMeNotHomePage.js');

module.exports = {

    after : function(browser) {
        browser.end();
    },
    'RetailMeNotSearch' : browser => {


        var retail = browser.page.RetailMeNotHomePage();
        var search = browser.page.SearchPage();
        var navigationBar = retail.section.navigateBar;

        retail.navigate();
        navigationBar
            .assert.title(pageConst.expected.TITLE)
            .setSearchValue(pageConst.expected.PRODUCT)
            .submitSearchValue();
        search
            .assertSearchText(pageConst.expected.PRODUCT);


    }

};