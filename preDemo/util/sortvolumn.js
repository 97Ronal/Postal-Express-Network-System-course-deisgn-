function sortvolumn(mycho) {
  var mycho2 = mycho.split("|");
  var myreal;
  var mysortedv;
  var mysortedv1;
  for (var j = 0; j < mycho2.length; j++) {
    myreal[j] = goods[mycho2[j]].volumn;
  }
  //让myreal的数组长度加一，目的是循环语句中myreal[mys]=1.
  myreal.length += 1;
  var mys = myreal.length - 1;
  var myone = 1;
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
  return (mysortedv1);
}