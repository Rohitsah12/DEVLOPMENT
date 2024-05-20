// const callback = (n)=>{
//     return n ** 2;
// };

// function cube(callback,n){
//     return callback(n)*n;
// };
// console.log(cube(callback,3));

// function gret(){
//     console.log("Hello");
// }
// setInterval(gret,1000)
// setInterval(() => {
//     console.log("Hello");
// }, 10000);

// setTimeout(() => {
//     console.log("Hello")
// }, 5000);

//Map
// const Num=[1,2,4,5,6]
// const total=Num.map((num)=>num*num);
// console.log(total);

//Filter
const country=["Finland","Ireland","Pakistan"]
const counti=country.filter((country)=>country.endsWith("land"));
console.log(counti);