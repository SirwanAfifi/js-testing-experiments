const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils.getWinner, 'getWinner');
  utils.getWinner = jest.fn((p1, p2) => p2);

  const winner = thumbWar('Sirwan', 'Kaywan');

  expect(winner).toBe('Sirwan');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Sirwan', 'Kaywan'],
    ['Sirwan', 'Kaywan'],
  ]);

  // cleanup
  winner.getWinner.mockRestore();
})
