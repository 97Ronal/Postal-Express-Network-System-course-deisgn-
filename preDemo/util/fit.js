//筛选合适的点；
function fit(mycho) {
  var string2;
  var mystring;
  var mystring1;
  myb = sortvolumn(mycho);
  var myb1 = myb.split("|");
  var myweight = goods[myb1].weight;
  for (var i = 0; i < myb1.length; i++) {
    if (mysum <= 1) {
      mysum = mysum + myvolumn[i];
      mynum = i;
    }
    //将满足体积条件的点传送到myvolumn1,点的个数即为mynum;
    myvolumn1[i] = myvolumn[i];
  }
  for (var j = 0; j < myvolumn1.length; j++) {
    if (mysum1 <= 50) {
      mysum1 = myweight[j] + mysum1;
      mynum1 = j;
    }
  }
  //将超出限制的最重点逐一删除；					
  while (mynum1 < mynum) {
    for (var j = 0; j < myvolumn1.length; j++) {
      if (mysum1 <= 50) {
        mysum1 = myweight[j] + mysum1;
        mynum1 = j;
      }
      myweight1[j] = myweight[j];
    }

    mydot = heaviest(myweight1);
    //用最重的函数，和baoremove来剔除掉限制条件外的点；			  
    string2 = myvolumn1.baoremove(mydot);
    myum1 = string2.length;
  }
  //将超出限制的点剔除后，得到数组string2,开始加入点；			 
  var mysum3 = 0;
  var mysum2 = 0;
  var myweight3;
  var myvolumn3;
  for (var j = 0; j < string2.length; j++) {
    myweight3[j] = goods[string2[i]].weight;
    myvolumn3[j] = goods[string2[i]].volumn;
  }
  //算出总的体积和重量；			
  for (var i = 0; i < string2; i++) {
    mysum3 = mysum3 + myweight3[i];
    mysum2 = mysum2 + myvolumn[i];
  }
  //将string2转化成字符串mycho=mycho.substr(0,mycho.length-1);；
  var string3;
  for (var j = 0; j < string2.length; j++) {
    string3 += String[string2[j]] + "|";
  }
  string3 = string3.substr(0, mycho.length - 1);
  string3[string3.length - 1] = "";
  var k = 0;

  while (mysum3 + goods[k].weight <= 1 & mysum2 + goods[k] <= 50) {
    for (var m = 0; m < string2.length; m++) {
      if (k = string[m]) {
        break;
      }
    }
    string3 = string3 + "k";
  }
  return fit(string3);
}