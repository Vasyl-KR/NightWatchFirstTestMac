var logger = require('../MyLogger.js');
var _ = require('lodash');

var retailCommands = {
    setSearchValue: function (name) {
        logger.Mylogger.info('Setting product name...');
        return this.setValue('@searchBar', name);
    },

    submitSearchValue : function () {
        logger.Mylogger.info('Submitting search form...');
        return this.submitForm('@searchBar');
    },

};
var footerCommands = {
    AssertHrefs: function () {
        var links = [];
        this.api.elements(this.client.locateStrategy, '.site-footer-nav a', function (result) {
            for (let i in result.value) {
                this.elementIdAttribute(result.value[i].ELEMENT, 'href', function (result) {
                     links[i]=result.value;
                });
                //logger.Mylogger.info(links);
            }
        }).perform(function () {
                var client = this.api.page.RetailMeNotHomePage();
               // logger.Mylogger.info(links);
                var randomLink = _.sample(links);
                logger.Mylogger.info(`Randomly chosen this link ${randomLink} ...`);
                logger.Mylogger.info('Clicking on the link ...');
                var selector = `.site-footer-nav a[href*=\'${_.replace(randomLink, client.url, '')}\']`;
                client.section.footer.click(selector)
                    .assert.urlEquals(randomLink, 'Verifying that url right');


             /*   for (var i in links) {

                    var selector = `.site-footer-nav a[href*=\'${_.replace(randomLink, client.url, '')}\']`;
                    client.section.footer.click(selector)
                        .verify.urlEquals(links[i])
                        .api.page.RetailMeNotHomePage().navigate();

                } */

        }
        );

    },
    linkClick: function () {

    },

    getInfo: function () {

    }
};


var constant = {
    TITLE : 'RetailMeNot: Coupons, Cash Back, Gift Card Deals, Genie & More',
    PRODUCT : 'Amazon'
}


module.exports = {
    url: 'https://www.rmnstage.com/',
    expected: constant,
    sections: {
        navigateBar: {
            selector: 'header.site-header',
            commands: [retailCommands],
            elements: {
                searchBar: {
                    selector: '.js-search-query'
                },
                searchBarXPath: {
                    selector: '//input[@type = "search"]',
                    locateStrategy: 'xpath'
                },
                cashBackItem: {
                    selector: 'a[href="/cashback"]'
                },
                giftCardDealsItem: {
                    selector: 'a[href="/giftcards"]'
                },
                logInButton: {
                    selector: '[tabindex]'
                }

            }
        },
        footer : {
          selector : 'div footer',
          commands: [footerCommands],
          elements: {
              footerLinks : '.site-footer-nav a'
          }
        }
    }
};