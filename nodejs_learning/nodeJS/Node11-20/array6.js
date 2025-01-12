var x=[];
x[0]=100;
x[1]=190;
x[2]=789;
console.log(x.length)
for(var i=0;i<x.length;i++) console.log(x[i]);
delete x[1];
console.log("After deletion");
for(var i=0;i<x.length;i++) console.log(x[i]);
console.log(x.length);