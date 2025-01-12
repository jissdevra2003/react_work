function displayContents(p)
{
if(Array.isArray(p))
{
var i=0;
while(i<p.length)
{
var j=p[i];
if(Array.isArray(j)) displayContents(j);
else console.log(j);
i++;
}
}
else 
{
console.log(p);
}
}
 
var x=new Array(5);
x[0]=new Array(5);
x[1]=180;
x[2]=new Array(10);
x[3]=[100,200,300];
x[4]=new Array(3);
x[4][0]=new Array(10,20,30);
x[4][1]=1222;
x[4][2]=new Array(100,1000);
displayContents(x);
