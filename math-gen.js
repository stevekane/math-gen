var throwUnless = require('power-throw').throwUnless

var validOperators = ["+", "-", "*", "/"];

var randomInt = function (max) {
  return Math.floor(Math.random() * max);
};

var generateProblem = function (operator, numTerms, maxValue) {
  throwUnless("Invalid operator!", validOperators.indexOf(operator) > -1);
  throwUnless("numTerms must be number greater than 0", numTerms > 0);
  throwUnless("numTerms must be number greater than 0", maxValue > 0);
  var terms = []
    , question
    , answer;

  for (var i=0; i < numTerms; i++) {
    terms.push(randomInt(maxValue));  
  }

  question = terms.join(operator);
  answer = eval(question);

  return {
    question: question,
    answer: answer
  };
};

module.exports = generateProblem;
