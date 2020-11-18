/**
 *
 * @param {Array} a Array of three numbers
 * @param {Array} b Array of three numbers
 */

function compareTriplets(a, b) {
  const isValidFirstParam = a.every(n => n < 100)
  const isValidSecParam = b.every(n => n < 100)
  if (!isValidFirstParam || !isValidSecParam) return

  const scores = [0, 0]
  let i = 0

  while (i < 3) {
    if (a[i] > b[i]) scores[0] = scores[0] + 1
    else if (a[i] < b[i]) scores[1] = scores[1] + 1
    i = i + 1
  }

  return scores
}
