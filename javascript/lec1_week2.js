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
// const country=["Finland","Ireland","Pakistan"]
// const counti=country.filter((country)=>country.endsWith("land"));
// console.log(counti);

// const names=["Anurag","Vijay","ROhit","Parv","Nischay"]
// let [name1,name2,,name4,name5]=names;
// console.log(name1,name2,name3,name4,name5);

// const Rectangle={
//     width:4,
//     height:4,
//     area:16,
// };
// let {width,height,area}=Rectangle;
// console.log(width,height,area);  

//spread and rest
// const names=[1,2,3,4,5,6,7,8,9,10,11]
// let [num1,num2,...vijay]=names;
// console.log(num1,num2,vijay);
// console.log(vijay);

//mith(...args) //S R //Array


//mith(...args) //S R=> Array
// mith(1,2,3,4,5,6,7,8,9)

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
let [e,pi,gravity,humanBodyTemp,waterBoilingTemp]=constants;
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp);
let [fin,est,sw,den,nor]=countries;
console.log(fin,est,sw,den,nor);
let {width,height,area,perimeter}=rectangle;
console.log(width,height,area,perimeter);

let [brook,alex,david,john,sara,martha,thomas]=users
console.log(brook,alex,david,john,sara,martha,thomas);





