var j=new Map();
j.set(11,"Jiss");
j.set(12,"Thomas");
j.set(13,"Daenerys");
j.set(14,"Sansa");
var vals=j.values();
var elem=vals.next();
while(!elem.done)
{
console.log(elem.value);
elem=vals.next();
}
console.log(`4th way to iterate`)
for(var tt of j)
{
console.log(tt);
}