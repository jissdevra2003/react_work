//arrow function
console.log(this);
const kk= (x,y) => (x+y);
console.log(kk(4,4))

const k=function()
{
console.log(this);

}
k();
const m= () =>{
y="Football"
console.log(this.y);

}
m();

//return an object using arrow function 
//use ()
const yy=()=> ({userName:"pesU912"});
console.log(yy());
const t=yy();
console.log(t.userName);

const obj = {
    k: function() {
        console.log(this);
    }
};
obj.k();  // Logs `obj`, because `this` refers to the calling object

