/**
 * Function that returns
 *
 * For more details:
 * {@link https://www.hackerrank.com/challenges/birthday-cake-candles/}
 *
 * @param {Array.<number>} candles
 */
function birthdayCakeCandles(candles) {
  const mayor = Math.max(...candles)
  const t = candles.filter(item => item === mayor).length

  return t
}
