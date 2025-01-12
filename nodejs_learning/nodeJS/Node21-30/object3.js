const pesUser={
name:"jiss",
konamiId:899990,
league:3,
details:function() 
{
console.log(`${this.name} with KONAMI id ${this.konamiId} is in the ${this.league} league`);

}
}
pesUser.details()
pesUser.name="Ronaldo";
pesUser.details();