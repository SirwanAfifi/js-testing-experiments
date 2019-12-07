const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Sirwan", "Shaho");
assert.strictEqual(winner, "Sirwan");
