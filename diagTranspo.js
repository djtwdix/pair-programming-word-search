/**
 * This function receives an array of arrays as its only parameter returns new
 * arrays containing the diagonal lines of the matrix
 * @param {array} matrix - Give matrix to transpose
 * @return {array} Transposed matrix
 */
const diagonal = function(matrix) {
  const emptyArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const holder = [];
    let iterator = 0
    for (let j = 0; j < matrix.length; j++) {
    if (matrix[j][i + iterator] !== undefined) {
     holder.push(matrix[j][i + iterator]);
    }
      iterator++
    }
    emptyArray.push(holder);
  }
  for (let i = matrix[0].length - 1; i >= 0; i--) {
    const holder = [];
    let iterator = 0;
    for (let j = matrix.length - 1; j >= 0; j--) {
    if (matrix[j][i - iterator] !== undefined) {
     holder.push(matrix[j][i - iterator]);
    }
      iterator++
    } 
    emptyArray.push(holder);
  } 
  return emptyArray;
};

module.exports = diagonal