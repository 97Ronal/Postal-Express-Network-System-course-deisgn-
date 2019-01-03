// 1.算两点,两点(忽略是否联通)返回之间距离，否则返回-1

function distance(a, b) {
  var mydistance
  a -= 1
  b -= 1;
  mydistance = Math.sqrt(((aim[a]._x - aim[b]._x) * (aim[a]._x - aim[b]._x)) + ((aim[a]._y - aim[b]._y) * (aim[a]._y - aim[b]._y)));
  return (mydistance);
}