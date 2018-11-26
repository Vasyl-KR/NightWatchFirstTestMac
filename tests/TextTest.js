var pageConst = require('../pages/RetailMeNotHomePage.js');


module.exports = {

    after : browser => {
        browser.end();
    },
    'RetailMeNotSearch' : browser => {

        browser
            .page.RetailMeNotHomePage()
            .navigate()
            .section.navigateBar
            .assert.title(pageConst.expected.TITLE)
            .submitSearchValue()
            .assertTexts('@foot');


    }

};