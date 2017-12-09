var utilMd5=require("../utils/md5.js")
var utilRandom=require("../utils/random.js")
function token(){
  var d = new Date()
  var callTime = parseInt(d.getTime() / 1000)
  var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
  var random = utilRandom.random(16)
  var token = utilMd5.md5(callTime + random + key)
  return token
}
module.exports.token = token