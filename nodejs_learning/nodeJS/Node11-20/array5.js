function Footballer()
{
this.name="Ronaldo";
this.jerseyNumber=7;
this.team="Real Madrid";
}
var rf=new Footballer();
console.log(rf.name);
console.log(rf.jerseyNumber);
console.log(rf.team);
console.log("*******************");
console.log(rf["name"]);    //rf.name
console.log(rf["jerseyNumber"]);  //rf.jerseyNumber
console.log(rf["team"]); // rf.team
rf.age=27;
console.log(rf.age);
rf["Country"]="Portugal";  //rf.country="Protugal";
console.log(rf);
