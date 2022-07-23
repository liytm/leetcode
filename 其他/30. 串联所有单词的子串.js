/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  let ans = 0
  let lastIndex = -1
  for (let i = 0; i < costs.length; i++) {
    let cur = costs[i]
    let count = Number.MAX_VALUE
    let index = 0
    console.log('lastIndex', lastIndex)
    for (let j = 0; j < 3; j++) {
      console.log('j', j)
      const cost = cur[j]
      if (count >= cost) {
        if (lastIndex === -1) {
          console.log('sds')
          console.log('count === cost', count === cost)

          count = count === cost ? count : cost
          console.log('count', count)
          if (count !== cost) {
            index = j
          }
        } else if (j !== lastIndex) {
          count = cost
          index = j
        }
      }
    }
    console.log('count', count)
    lastIndex = index
    ans += count
  }
  return ans
}
console.log(
  minCost([
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19]
  ])
)
