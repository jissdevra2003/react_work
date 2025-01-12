var Bulb=(function()
{
var code=0;
var ds={};
function BulbFactory(br)
{
code++;
this.code=code;
ds[this.code]={};
ds[this.code].brand=br;
this.aFunction=function()
{
console.log(ds[this.code].brand);
}

}
BulbFactory.prototype.bFunction=function()
{
console.log(ds[this.code].brand);
}
return BulbFactory;
}
)();
var b=new Bulb("taiwan");
b.aFunction();
b.bFunction();
var t=new Bulb("Philips");
t.aFunction();
t.bFunction();
b.aFunction()
b.bFunction();