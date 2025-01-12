console.log(process.argv);
const readline=require("readline");
const lineReader=readline.createInterface({
input:process.stdin,
output:process.stdout
});
lineReader.question("Enter your name:",(line)=>{
console.log(line);
lineReader.close();
});
console.log("Jiss is here ");