/**
 * Function that returns the minimum and maximum values that can be calculated by summing exactly four of the five integers
 *
 * For more details:
 * {@link https://www.hackerrank.com/challenges/mini-max-sum/}
 *
 * @param {Array.<number>} arr
 */
function miniMaxSum(arr) {
  const clonedArray = [...arr]
  clonedArray.sort()

  const maxSum = clonedArray.slice(1).reduce((a, b) => a + b)
  const minSum = clonedArray
    .slice(0, clonedArray.length - 1)
    .reduce((a, b) => a + b)

  console.log(`${minSum} ${maxSum}`)
}
