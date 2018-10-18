module.exports = {

    after : function(browser) {
        browser.end();
    },
    'NegativeLogIn' : function (browser) {

        var retail = browser.page.RetailMeNotHomePage();
        var register = browser.page.RegisterPage();

        retail.navigate()
            .click('@logInButton')
            .click('[data-qa="log-in-link"]');
        register
            .sendKeys('@emailInput','notExist@email.com')
            .sendKeys('@passwordInput', 'notExist')
            .click('@logInButton');
        //    .waitForElementVisible('@errorField',10000);


        register
         //   .assert.visible('@errorField')
         //   .assert.containsText('@errorField', 'Email and/or password is incorrect')
            .assert.title('Log in');

    },

};