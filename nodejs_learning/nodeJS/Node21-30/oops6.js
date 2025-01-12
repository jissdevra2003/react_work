let box={
length:20,
breadth:200
};
let box2={
height:100
};
console.log(box2);
let box1=box2;
box1.height=120;
console.log(box1);
console.log(box2);


let box3={...box,...box2};
console.log(box3);

