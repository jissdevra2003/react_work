var x=[];
x["0"]=120;
x["1"]=130;
console.log(x.length);
x["abcd"]=200;  //x.abcd=200;
console.log(x.length);
console.log(x);

console.log("*******************");
var tt=[];
tt["ret"]=900;   //tt.ret=900(dynamically added property in the array type object)
tt["jhh"]=1290;
console.log(tt.length);
console.log(tt);
tt[5]=2390;
console.log(tt);
console.log("Length of tt array",tt.length);
for(var i=0;i<tt.length;i++) console.log(tt[i]);