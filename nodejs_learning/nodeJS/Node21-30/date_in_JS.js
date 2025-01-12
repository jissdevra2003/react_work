const x=[100,200,456,765,67];
// const y=x.splice(1,2,1000,2000);
// console.log(x);
// console.log(y);
const y=[1000,2000,3000];
for(var i=0;i<y.length;i++)
{
x.splice(x.length,0,y[i]);
}
console.log(`${x}`);

const old_footballers=["Ronaldo","Messi","David beckham"];
const young_footballers=["mbappe","musiala","writz","yamal"];
//spread example
const footballers=[...old_footballers,...young_footballers];
console.log(footballers);
