/**
 * This function receives an array of arrays as its only parameter returns a new
 * array with the columns and rows switched
 * @param {array} matrix - Give matrix to transpose
 * @return {array} Transposed matrix
 */
const transpose = function(matrix) {
  const emptyArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const holder = [];
    for (let j = 0; j < matrix.length; j++) {
      holder.push(matrix[j][i]);
    }
    emptyArray.push(holder);
  }
  return emptyArray;
};

module.exports = transpose