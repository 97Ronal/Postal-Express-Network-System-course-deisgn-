//离a最近的直接联通的点,s是不能包括的点，该函数服务于“迪杰斯特拉算法”
function nearestgoods(a, s) {
  var mym = new Array(4);
  var s2 = s.split("|")
  //离a点距离最短的点的游标h
  var m = 0;
  var mymin;
  //先给mymin赋值（不能是S里面的数，也不能是自己本身）
  for (var j = 0; j <= aimnum; j++) {
    //表示S中是否已有该点
    var existornot = "not";
    for (var i = 0; i < s2.length; i++) {
      if (s2[i] == j) {
        existornot = "yes";
        break;
      }
    }
    //如果存在跳出本次J的循环
    if (existornot == "yes") {
      continue;
    }

    if (pass[a][j] == 1 & a != j) {
      mymin = distance(a, j);
      m = j;
      break;
    }
  }
  //判断是否存在最小值
  var nearby = "no";
  if (mymin != null) {
    //找出最小值
    for (var j = 0; j <= aimnum; j++) {
      //表示S中是否已有该点
      existornot = "not";
      for (var i = 0; i < s2.length; i++) {
        if (s2[i] == j) {
          existornot = "yes";
          break;
        }
      }
      //如果存在跳出本次J的循环
      if (existornot == "yes") {
        continue;
      }
      if (pass[a][j] == 1 & a != j) {
        nearby = "yes"
        if (distance(a, j) <= mymin) {
          mymin = distance(a, j);
          m = j;
        }
      }
    }
  }
  if (nearby == "yes") {
    if (s.length == 0) {
      s += String(m);
    } else {
      s += "|" + String(m);
    }
    mym[0] = m;
    mym[1] = s;
    mym[2] = nearby;
    mym[3] = a;
    return (mym);
  } else {
    mym[0] = m;
    mym[1] = s;
    mym[2] = nearby;
    mym[3] = null;
    return (mym);
  }
  else{
      mym[0]=m;
    mym[1]=s;
    mym[2]=nearby;
    mym[3]=null;
    return(mym);
  }
}



 function fastway(a, b) {
   //每个点来此的路线记录 如 line[1] 记录的是 1点来自哪个点
   var line = new Array();
   line[0] = a;
   //地杰斯特拉算法的S集合，记录以求出最短距离的点
   var s = "";
   var re;
   var s2;
   //最终返回记录路线
   var myfastway;
   re = nearestgoods(a, s);
   if (re[0] == b) {
     myfastway = String(a) + "=>" + String(b);
   } else {
     line[re[0]] = re[3];
     while (re[0] != b) {
       re = nearestgoods(a, s);
       if (re[0] != null) {
         line[re[0]] = re[3];
         s += "|" + String(s2min[s2minsign]);
       }
       if (re[2] == "no") {
         //去S中的值做循环
         s2 = s.split("|");
         var s2min = new Array();
         for (var j = 0; j < s2.length; j++) {
           //开始=》求s2[j]点到哪个点距离最小（要求S中不存在）
           var m = 0;
           var mymin;
           for (var j4 = 0; j4 <= aimnum; j4++) {
             if (pass(s2[j], j4) == 1 & s2[j] != j4) {
               mymin = distance(s2[j], j4);
             }
           }
           if (mymin != null) {
             for (var j2 = 0; j2 <= aimnum; j2++) {
               //表示S中是否已有该点
               var existornot = "not";
               for (var j3 = 0; j3 < s2.length; j3++) {
                 if (s2[j3] == j2) {
                   existornot = "yes";
                   break;
                 }
               }
               //求该点最短距离
               if (pass(s2[j], j2) == 1 & j2 != s2[j] & existornot == "not") {
                 if (distance(j2, s2[j]) <= mymin) {
                   mymin = distance(j2, s2[j]);
                   m = j2;
                 }
               }
             }
           }
           //结束=》求s2[j]到哪个点距离最小
           //取得记录S2[J]的发散点中最短距离
           s2min[j] = m;
           s2mindis[j] = distance(m, s2[j]);
         }
         var s2minsign = 0;
         var s2minmin = s2mindis[0];
         for (var i = 0; i < s2.length; i++) {
           if (s2mindis[i] < s2minmin) {
             s2minmin = s2mindis[i];
             s2minsign = i;
           }
         }
         s += String(s2min[s2minsign]) + "|";
         s = s.substr(0, s.length - 1);
         re[0] = s2min[s2minsign];
         line[s2min[s2minsign]] = s2minsign;
       }
       //从B点出发，用LINE数组往回寻找A，从而得出B到A的最短距离
       var mystar = null;
       var myend = b
       myfastway = String(b) + "<="
       while (myend == b) {
         myend = line[myend];
         if (myend == a) {
           myfastway += String(myend)
         } else {
           myfastway += String(myend) + "=>"
         }
       }
       //翻转开始 （原来的myfastway是倒叙的，现在翻转字符串）
       myfastway2 = myfastway.split("=>")
       var myfastway3 = new Array(myfastway2.length);
       var mymax = myfastway2.length - 1;
       for (var i = 0; i < myfastway2.length; i++) {
         myfastway3[i] = myfastway2[mymax];
         mymax = mymax - 1;
       }
       myfastway = null;
       for (i = 0; i < myfastway2.length; i++) {
         if (i == myfastway2.length - 1) {
           myfastway += String(myfastway2[i])
         } else {
           myfastway += String(myfastway2[i]) + "=>"
         }
       }
       //翻转结束	           
     }
     return (myfastway);
   }
 }