module.exports = function check(str, bracketsConfig) {
  let strArray = str.split('')
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        strArray[i] == bracketsConfig[j][0] &&
        strArray[i + 1] == bracketsConfig[j][1]
      ) {
        strArray.splice(i, 2)
        i = i - 2
      }
    }
  }
  if (strArray.length) {
    return false
  } else {
    return true
  }
}
