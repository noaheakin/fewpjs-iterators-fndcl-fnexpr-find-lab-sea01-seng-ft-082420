const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(stats) {
  let result = stats.find( stat => stat.result === "W" )
  return result ? result.year : undefined
}