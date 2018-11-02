
var googleCommands = {
    clickLuckyButton : function () {
        return this.click('@luckyButton');
    }

};

var constant = {
    TYPE : 'type',
    ARIA_LABEL : 'aria-label',
    ATTRIBUTE_VALUE : 'submit'
}

module.exports = {
    url: 'http://google.com',
    expected: constant,
    commands: [googleCommands],
    elements: {
      searchBar: { 
        selector: 'input[type=text]' 
      },
      submit: { 
        selector: 'button[name=btnG]' 
      },
      luckyButton : {
          selector: 'input[name = "btnI"]'
      },
        inputButtons : {
          selector : 'div input'
        }
    }
  };
  