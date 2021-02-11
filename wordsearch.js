const transpose = require("./matrixTranspo")
const diagonal = require("./diagTranspo")

/**
 * This function returns whether a given word is present in a given matrix of letters
 * @param {array} letters - Matrix of letters to search
 * @param {string} word - Word to search inside the matrix
 * @return {boolean} 
 */
const wordSearch = (letters, word) => { 
    // Function check if string exist in sub array
    const vertHoriSearch = (letters, word) => {
        // Convert every sub array in strings
        const horizontalJoin = letters.map(ls => ls.join(''))
        // For every line
        for (l of horizontalJoin) {
            // Check if the line includes the requested word
            if (l.includes(word)) {
                // If it does, return true
                return true;
            } 
            // Check if the line includes the requested word reversed
            if (l.split("").reverse().join("").includes(word)) {
                // If it does, return true
                return true
            }
        }
        // If the code has not returned true yet, return false
        return false;
    }
    // Check if the word exists horizontaly 
    if (vertHoriSearch(letters,word)) return true;
    // Check if the word exists verticaly
    if (vertHoriSearch(transpose(letters),word)) return true;
    // Check if the word exist diagonnaly 
    if (vertHoriSearch(diagonal(letters),word)) return true;
    if (vertHoriSearch(diagonal(letters.reverse()),word)) return true;
    // If the code has not returned true yet, return false
    return false;
}
module.exports = wordSearch

