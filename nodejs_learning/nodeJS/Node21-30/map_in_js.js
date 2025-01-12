var j=new Map();
j.set(101,"Ronadlo");
j.set(102,"Messi");
j.set(103,"Neymar");
j.set("k","mbappe");
j.forEach(function(a,b)
{
console.log(`Value is ${a}`);
console.log(`Key is ${b}`);
})

var k=j.entries();
var elem=k.next();
while(!elem.done)
{
// console.log(elem);
[p,q]=elem.value;
console.log(`Key is ${p} value is ${q}`);
elem=k.next();
}





var k="cool";
var m={
[k]:"great"
};
console.log(m);
console.log(m.cool);

console.log(`*************************************************`);
function someu()
{
this[k]="great";
}
var to=new someu();
console.log(to);