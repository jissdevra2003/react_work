//queue ,push, shift , unshift
var queue=new Array();
queue.push(900);
queue.push(90);
queue.push(890);
queue.push(67);
console.log("Elements in queue :",queue);
var t=queue.shift();   //remove from queue (first in first out)
console.log("Removed value from queue :",t);
queue.push(1222);
queue.push(65);
queue.push(23);
queue.push(101);
queue.push(102);
console.log("*****************");
console.log("Length of queue :",queue.length);
while(queue.length>0)
{
var f=queue.shift();
console.log("Removed element from queue :",f);
}
console.log("Length of queue after removing elements :",queue.length);
queue.unshift(700);
console.log(queue.length);
console.log(queue);
queue.unshift(690);  //insert at top
console.log(queue);