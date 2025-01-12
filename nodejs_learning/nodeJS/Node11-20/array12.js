//sort 
var x=[100,2,345,23,123,456,76,87,8990];
x.sort();   //sort function will sort the array in alphabetical terms.
console.log(x);
//console.log(y);
var a=['jiss','thomas','walter','skylar'];
a.sort();
console.log(a);

//in order to sort according to numbers we have to give sort function an anonymous function address
var kk=[123,45,566,76,545,4444,98];
kk.sort(function(i,j)   //now this will sort according to the numbers
{
// if(i==j) return 0;
// if(i<j) return -1;
// if(i>j) return 1;
return i-j;
});
console.log(kk);

//lambda expression as anonymous function to sort
var yy=[655,2333,454,2123,6767,45,2,111];

yy.sort((i,j)=>i-j);  //lambda expression

console.log(yy);