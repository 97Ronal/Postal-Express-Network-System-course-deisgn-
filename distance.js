// 1.算两点,两点(忽略是否联通)返回之间距离，否则返回-1

function distance(a,b){
    var mydistance
    a-=1
    b-=1;
    mydistance=Math.sqrt(((aim[a]._x - aim[b]._x)*(aim[a]._x - aim[b]._x))+((aim[a]._y - aim[b]._y)*(aim[a]._y - aim[b]._y)));
    return(mydistance);
 }


//2.最远点函数
function farest(mygoods)
{
  var mygoods2
  var myreturn
  mygoods2=mygoods.split("|")
  var myfu=distance(mygoods2[0],0);
  var mysi=0;
  var myreturn;
  for(var i=0;i<mygoods2.length;i++){
    if(distance(mygoods2[i],0)>=myfu)
    { 
      myfu=distance(mygoods2[i],0);
  mysi=i;
    }
  }
  myreturn=mygoods2[mysi]    
  return myreturn;
}
 //将地址传出去

//  （3）首先将最远点在没有筛选条件下有
//  （1）程序得到，然后有两点即可以和等待帅选点求出筛选点距中心线的角度，
//   和三十度角（六十度的二分之一）进行比较，可以求出是否在规定扇区内。
//   如若在既可以考虑此点，进行下一步。

//i为等待筛选点，b为最远点，出发点已定，来确定i和出发点的夹角。

function angel(i,b)
{
var mya=distance(i,b); 
var myb=distance(0,i);
var myc=distance(0,b);
var mys=(myb*myb+myc*myc-mya*mya)/(2*myb*myc);
var angel=Math.acos(mys);
  return(angel)
}


function mychoice(b)
{
  var mysi;
  var mycho;
  var mylast;
  for(i=0;i++;i<=50){
    if(angel(i,b)<=bigangle/2){ 
      mysi=i;
      //加入分隔符，但最后一个数还是”|“  
      mycho+=String(mysi)+"|";
    }
  }  
  mycho=mycho.substr(0,mycho.length-1);
  //来去除最后个分隔符，用length函数来判断长度   
  mycho[mycho.length-1]="";
  //这是筛选出的字符串。 
  return mycho;
}

 