// （3）首先将最远点在没有筛选条件下有（1）程序得到，
// 然后有两点即可以和等待帅选点求出筛选点距中心线的角度，和三十度角
// （六十度的二分之一）进行比较，可以求出是否在规定扇区内。
// 如若在既可以考虑此点，进行下一步。
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
