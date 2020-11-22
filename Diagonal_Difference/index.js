/**
 * Function that returns the absolute difference between the sum of diagonal
 * values
 *
 * For more details:
 * {@link https://www.hackerrank.com/challenges/diagonal-difference/}
 *
 * @param {Array.<number, number>} arr Two dimension array
 * @return {number}
 */
function diagonalDifference(arr) {
  const length = arr.length
  const diagRtoLValues = []
  const diagLtoRValues = []
  let stop = length - 1

  for (let i = 0; i < length; i++) {
    diagRtoLValues.push(arr[i][i])
    diagLtoRValues.push(arr[i][stop])
    stop = stop - 1
  }

  const diagRtoLSum = diagRtoLValues.reduce((a, b) => a + b)
  const diagLtoRSum = diagLtoRValues.reduce((a, b) => a + b)
  return Math.abs(diagRtoLSum - diagLtoRSum)
}
