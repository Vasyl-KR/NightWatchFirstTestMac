var pageConst = require('../pages/googlePage.js');

module.exports = {

    after : function(browser) {
        browser.end();
    },
    'attributeCheck' : function (browser) {

        browser
            .page.googlePage().navigate()
            .assert.assertElementsNumber('@inputButtons', 9)
            .clickLuckyButton();

    },
};