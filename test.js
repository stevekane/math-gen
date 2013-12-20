var test = require('tape')
  , mathgen = require('./math-gen');

test("returns correct expression and answer for +, -, *, /", function (t) {
  t.plan(4);

  var add = mathgen("+", 2, 10)
    , sub = mathgen("-", 2, 10)
    , mul = mathgen("*", 2, 10)
    , div = mathgen("/", 2, 10);

  t.ok(add.question.indexOf("+") > -1, "add contains addition operator");
  t.ok(sub.question.indexOf("-") > -1, "sub contains subtraction operator");
  t.ok(mul.question.indexOf("*") > -1, "mult contains multiplication operator");
  t.ok(div.question.indexOf("/") > -1, "div contains division operator");
});

test("throws if operator is not valid, numTerms or max value are < 0 or not defined",
function (t) {
  t.plan(5);

  t.throws(function () {
    mathgen("%", 2, 10)
  }, "throws when invalid operator supplied");
  t.throws(function () {
    mathgen("+", 1)
  }, "throws when maxValue missing");
  t.throws(function () {
    mathgen("+")
  }, "throws when numTerms missing");
  t.throws(function () {
    mathgen("%", 0, 2)
  }, "throws when numTerms isnt greater than 0");
  t.throws(function () {
    mathgen("%", 3, 0)
  }, "throws when maxValue isnt greater than 0");
});
