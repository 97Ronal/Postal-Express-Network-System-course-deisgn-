//最远点函数
function farest(mygoods) {
  var mygoods2
  var myreturn
  mygoods2 = mygoods.split("|")
  var myfu = distance(mygoods2[0], 0);
  var mysi = 0;
  var myreturn;
  for (var i = 0; i < mygoods2.length; i++) {
    if (distance(mygoods2[i], 0) >= myfu) {
      myfu = distance(mygoods2[i], 0);
      mysi = i;
    }
  }
  myreturn = mygoods2[mysi]
  return myreturn;
}
//将地址传出去