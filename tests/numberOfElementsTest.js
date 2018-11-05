var pageConst = require('../pages/googlePage.js');

module.exports = {

    after : function(browser) {
        browser.end();
    },
    'numberCheck' : function (browser) {

        browser
            .page.googlePage().navigate()
            .assert.elementsNumber(pageConst.elements.inputButtons.selector, 9)
            .clickLuckyButton();

    },
};