function chooseline_1(string3) {
  var mytime2 = string3.split("|");
  for (var i = 0; i < string3.length; i++) {
    mytime2[i] = goods[string3[i]].time;
  }
  for (var j = 0; j < string3.length; j++) {
    if (mytime2[j] = 0) {
      mytime2[i] = Number.MAX_VALUE
    }
  }
  var myreal;
  var mysortedv;
  var mysortedv1;
  for (var j = 0; j < mytime2.length; j++) {
    myreal[j] = goods[mycho2[j]].time;
  }
  //让myreal的数组长度加一,目的是循环语句中
  myreal.length += 1;
  var mys = myreal.length - 1;
  var myone = 50;
  for (var k = 0; k < myreal.length - 1; k++) {
    myreal[mys] = 1;
    for (var i = 0; i < myreal.length - 1; i++) {
      if (myreal[i < myone]) {
        myone = myreal[i];
        mys = i;
      }
    }
    //将货物标号传递给数组mysorted中；
    mysortedv[k] = mys;
  }
  mysortedv1 = mysortedv.join("|");

  //将优先级按时间排列的字符串传出；
  return (chooseline = mysortedv1);
}