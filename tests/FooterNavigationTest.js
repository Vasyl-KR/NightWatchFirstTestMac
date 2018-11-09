module.exports = {

    after : browser => {
        browser.end();
    },
    'Footer Navigation' : browser => {

        browser
            .page.RetailMeNotHomePage()
            .navigate().section.footer
            .AssertHrefs();


    }

};