//every function in arrays
//var x=[10,20,30,40,50,60,70,80,90,100]  
//har element even hh to hmara function ture return krega har bar to 
//every ka jwab bhi true hoga
var x=[10,20,30,40,25,60,70,80,90,100];
//odd element milega hmara function false return krega to every bhi false jwab dedega or 
//aage k elements nhi dega  check krega krne k liye hmare function ko
function isEven(n)
{
console.log("isEven got called with argument :"+n);
return n%2==0;
}
console.log(x.every(isEven));

