/**
 * Function that returns the sum of array values
 *
 * For more details:
 * {@link https://www.hackerrank.com/challenges/simple-array-sum}
 *
 * @param {Array.<number>} ar Array to take values
 * @return {number}
 */
function simpleArraySum(ar) {
  return ar.reduce((a, b) => a + b)
}
