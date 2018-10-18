module.exports = {
    url: 'https://secure.retailmenot.com/accounts/login',
    elements: {
        titleLabel: {
            selector: '.form__heading'
        },
        emailInput: {
            selector:'#identifier',
        },
        passwordInput: {
            selector: '#password'
        },
        logInButton : {
            selector: 'button[type ="submit"]'
        },
        errorField : {
            selector : '.field__error.is-active'
        }

    }
};