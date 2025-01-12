const nums=[1,2,3,4,5,6,7,87,8,9,10];
const newNums=nums
               .map((num)=> { return num*10;})
               .map((num)=> num+4)
               .filter((num)=> num>50);
console.log(newNums);