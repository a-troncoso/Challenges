/**
 * Function that prints the ratios of its elements that are positive, negative and zero
 *
 * For more details:
 * {@link https://www.hackerrank.com/challenges/plus-minus}
 *
 * @param {Array.<number>} arr Array of numbers
 * @return {number}
 */
function plusMinus(arr) {
  const length = arr.length
  const qPositives = arr.filter(n => n > 0).length
  const qNegatives = arr.filter(n => n < 0).length
  const qZeros = arr.filter(n => n === 0).length

  const positiveProportion = (qPositives / length).toFixed(6)
  const negativeProportion = (qNegatives / length).toFixed(6)
  const zeroProportion = (qZeros / length).toFixed(6)

  console.log(positiveProportion)
  console.log(negativeProportion)
  console.log(zeroProportion)
}
