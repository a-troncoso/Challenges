/**
 * Function that returns a staircase based on a number receive as param
 *
 * For more details:
 * {@link https://www.hackerrank.com/challenges/staircase/}
 *
 * @param {Number} n Number that represents height and base of staircase
 */
function staircase(n) {
  const space = " "
  const hash = "#"
  const breakLine = "\n"

  let charController = 1
  let line = ""
  let result = ""

  while (charController <= n) {
    line = space.repeat(n - charController).concat(hash.repeat(charController))

    if (charController < n) line = line.concat(breakLine)

    result = result.concat(line)
    charController = charController + 1
  }

  console.log(result)
}
