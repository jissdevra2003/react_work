let rectangle={
length:29,
breadth:30
}

let box={
...rectangle,
height:10
}
console.log(box);
let bulb={
_wattage:0,
set wattage(w)
{
_wattage=w;
},
get wattage()
{
return _wattage
}

}

bulb.wattage=100;
console.log(bulb.wattage);
let bb=Object.freeze(bulb);

bulb._wattage=120;

console.log(bulb);
console.log(bb);
bb.wattage=1201;
console.log(bb);