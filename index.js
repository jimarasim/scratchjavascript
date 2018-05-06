var Samples = require('./Samples.js');
var samples = new Samples();

samples.outputConsoleLog('hello');
samples.outputConsoleLog(samples.printCharactersBackwards('backwards'));
samples.outputConsoleLog(samples.printSentenceBackwards('the quick brown fox jumped over the lazy dog'));
samples.outputConsoleLog(samples.firstNonRepeatingCharacter('abbbcdddeeefff'));