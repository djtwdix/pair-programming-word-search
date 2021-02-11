const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  const testMatrix = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ];
  it("should return false if the word is not present", function() {
    const result = wordSearch(testMatrix, 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(testMatrix, 'SEINFELD')

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically", function() {
    const result = wordSearch(testMatrix, 'QFQEYNA')

    assert.isTrue(result);
  });
  it("should return true if the word is present horizontal reverse", function() {
    const result = wordSearch(testMatrix, 'GRVET')

    assert.isTrue(result);
  });
  it("should return true if the word is present verticaly reverse", function() {
    const result = wordSearch(testMatrix, 'AYRRA')

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally top left to bottom right", function() {
    const result = wordSearch(testMatrix, 'WIFE')

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally bottom right to top left", function() {
    const result = wordSearch(testMatrix, 'PNSJFS')

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally bottom left to top right", function() {
    const result = wordSearch(testMatrix, 'EDTEYV')

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally top right to bottom right", function() {
    const result = wordSearch(testMatrix, 'LUESR')

    assert.isTrue(result);
  });
});
