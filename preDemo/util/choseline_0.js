// （8.）决策函数。在没有时间限制的条件下，此决策函数适合于一问和三文的情况。对此情况下，限制条件减弱，只要符合其他条件。
//决策路线函数(无时间限制)，返回扇区内走完所以点的路线的字符串（单用地杰斯特拉）
function chooseline_0(mygoods) {
  var goodsnum = mygoods.split("|");
  var n = goodsnum.length;
  var lines = new Array(n);
  var mystart = 0;
  var mychoose = "0=>";
  while (n != 0) {
    for (var i = 0; i < n; i++) {
      lines[i] = linedistance(start, goodsnum[i]);
    }
    var minm
    var mindis = lines[0]
    for (var i = 0; i < n; i++) {
      if (lines[i] < mindis) {
        minm = i;
        mindis = lines[i];
      }
    }
    mystart = minm;
    goodsnum.baoremove(minm);
    n = goodsnum.length;
    if (n != 0) {
      mychoose += String(mystart) + "=>";
    } else {
      mychoose += String(mystart);
    }
  }
  return mychoose;
}