const test = require('tape')
const tsk = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(tsk)
})
