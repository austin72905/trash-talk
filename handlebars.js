//handlebars-helper 因為handlebars很笨，無法做複雜的if判斷式，要handlebars-helper的幫助

const Handlebars = require('handlebars')


Handlebars.registerHelper(
  'if_checked', function (object, value, options) {
    if (object == value) {
      return options.fn(this)
    }
    else {
      return options.inverse(this)
    }

  }
)

/*return options.fn(this) ---> if object==value 結果為true
return options.inverse(this) ---> if object==value 結果為flase
於模板中
{{#if_checked object value}}

checked --->if object == value 結果為true時呈現

{{/if_checked}}
*/
