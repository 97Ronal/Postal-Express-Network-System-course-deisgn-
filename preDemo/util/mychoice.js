function mychoice(b) {
  var mysi;
  var mycho;
  var mylast;
  for (i = 0; i++; i <= 50) {
    if (angel(i, b) <= bigangle / 2) {
      mysi = i;
      //加入分隔符，但最后一个数还是”|“  
      mycho += String(mysi) + "|";
    }
  }
  mycho = mycho.substr(0, mycho.length - 1);
  //来去除最后个分隔符，用length函数来判断长度   
  mycho[mycho.length - 1] = "";
  //这是筛选出的字符串。 
  return (mycho);
}