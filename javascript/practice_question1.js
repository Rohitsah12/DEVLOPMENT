// function fullName(firstName,lastName){
//     return firstName+ " "+ lastName
// }
// console.log(fullName("Rohit","sah"))

// function addNumbers(a,b){
//     return a+b;
// }
// console.log(addNumbers(4,5))

// function areaofrectangle(length,width){
//     return length*width
// }
// result=areaofrectangle(4,5)
// console.log(`${result} is a area of given rectangle`)
// const perimeterOfRectangle = (length,width)=> (2*(length+width))
// console.log(perimeterOfRectangle(2,2))

// const volumeOfARectangularPrism = (length,width,height)=>(length*width*height)

// console.log(volumeOfARectangularPrism(4,5,6));

// const areaOfCircle = (radius) => (Math.PI*radius*radius)
// console.log(areaOfCircle(5));

// const circumferenceOfCircle=(radius)=>(2*Math.PI*radius)
// console.log(circumferenceOfCircle(5));

// const density=(mass,volume)=> (Math.floor(mass/volume))
// console.log(density(4,2));

// const speed=(distance,time)=> (distance/time)
// console.log(speed(4,4));

// const weight=(mass , gravity)=> (mass * gravity)
// console.log(weight(4,5));

// const temperaure = (celsius_temperature) => ((celsius_temperature*9/5)+32)
// console.log(temperaure(32));

// const bmi = (weight,height) =>{
//     result =weight/(height*height)
//     if(result<18.5) return "UnderWeight";
//     else if(result>=18.5 && result<=24.9) return "Healthy weight";
//     else if(result>=25.0 && result<=29.9) return "OverWeight";
//     else return "Obesity";
// }
// console.log(bmi(50,5))
// const season=(month)=>{
//     if(month<=3) return "SUMMER";
//     else if(month>3 && month<=6) return "WINTER";
//     else if(month>6 && month<=9) return "SPRING";
//     else if(month>9 && month<=12) return "SUTUMN";
//     else return "Month is invalid";
// }
// console.log(season(5))

// const findMax=(a,b,c)=>{
//     if(a>b){
//         if(a>c) return "a";
//         else return "c";
//     }
//     else{
//         if(b>c) return "b";
//         else return "c";
//     }
// }
// console.log(findMax(0,10,5))

// const solveLinEquation = (a, b, c, x, y) => {
//     return a * x + b * y + c;
// };

// console.log(solveLinEquation(2, 3, -6, 1, 2)); 


// const solveQuadratic = (a, b, c) => {
//     const discriminant = b * b - 4 * a * c;
//     if (discriminant > 0) {
//         const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return [root1, root2];
//     } else if (discriminant === 0) {
//         const root = -b / (2 * a);
//         return [root];
//     } else {
//         const realPart = -b / (2 * a);
//         const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//         return [
//             { real: realPart, imaginary: imaginaryPart },
//             { real: realPart, imaginary: -imaginaryPart }
//         ];
//     }
// };

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}


// const printArray = (array) => {
//     array.forEach((value) => {
//         console.log(value);
//     });
// };

// printArray([1,2,3,4,5])

// const swap=(a,b) => {
//     let temp=a;
//     a=b;
//     b=temp;
//     return [a,b];
// };
// console.log(swap(3,4))

// const reverseArray = (array) => {
//     const reversedArray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }
//     return reversedArray;
// };

// const sampleArray = [1, 2, 3, 4, 5];
// console.log(reverseArray(sampleArray));


