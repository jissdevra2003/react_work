//encapsulation in JS

function Bulb(w)
{
var wattage=w;
this.setWattage=function(w)
{
wattage=w;
}
this.getWattage=function()
{
return wattage;
}

}
Bulb.prototype.getBrand=function()
{
return `Bulb of wattage ${this.getWattage()} is of brand Philips`;
}
var b=new Bulb();
b.setWattage(90);
console.log(b.getWattage());
var b1=new Bulb(30);
console.log(b1.getBrand());
