function*generate()
{
yield 10;
yield 300;
yield 50;
console.log(`Thomas shelby`);
}
var k=generate();
var i=k.next();
console.log(i);
i=k.next();
console.log(i);
i=k.next();
console.log(i);
i=k.next();
console.log(i);