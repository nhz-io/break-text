const breakText = require('.')

const test = ['foo', '\n', '   ', '123', '  ', '\n', '\n', '\n', ':-)', '  ']

const testString = test.join('')

const result = breakText(testString)

result.forEach((l, i) => {
    if (l !== test[i]) throw Error
})