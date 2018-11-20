var pageConst = require('../pages/RetailMeNotHomePage.js');
var logger = require('../MyLogger.js');

module.exports = {

    after : browser => {
        browser.end();
    },
    'RetailMeNotSearch' : browser => {

        browser
            .page.RetailMeNotHomePage()
            .navigate().section.navigateBar
            .assert.title(pageConst.expected.TITLE)
            .setSearchValue(pageConst.expected.PRODUCT)
            .submitSearchValue()
            //.api.page.SearchPage()
            .assertTexts();
            //.assertSearchText(pageConst.expected.PRODUCT);


    }

};