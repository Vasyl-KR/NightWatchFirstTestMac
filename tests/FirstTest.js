module.exports = {

    'Demo test Google' : '' +function (browser) {

        var google = browser.page.googlePage();


        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'RetailMeNot')
            .click('@submit');

        browser.end();

    }

};