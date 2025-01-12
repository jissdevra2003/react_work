//stack
var stack=new Array();
stack.push(10);
stack.push(900);
stack.push(1507);
stack.push(789);
for(var i=0;i<stack.length;i++) console.log(stack[i]);
console.log("Length of stack :",stack.length);
var t=stack.pop();
console.log("Popped value :",t);
console.log(stack);
console.log("After pop opearation length of stack is :",stack.length);
var jj=[12,67,56];
jj.unshift(90);//insert at top in queue
console.log("Elements in array jj :",jj);  