/**
 * Function that returns sum of array of numbers
 *
 * For more details:
 * {@link https://www.hackerrank.com/challenges/a-very-big-sum}
 * 
 * @param {Array.<number>} ar Array of numbers
 * @return {number}
 */
function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b)
}
