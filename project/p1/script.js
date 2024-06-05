// document.body.addEventListener("click",function(){
//     const randomColor = "#" + Math.floor(Math.random()*1672216).toString(16);
//     console.log(randomColor);
//     document.body.style.backgroundColor=randomColor;
// });

document.querySelector("button").addEventListener("click",function(){
    const randombutton = "#" + Math.floor(Math.random()*1672216).toString(16);
    console.log(randombutton);
    document.body.style.backgroundColor=randombutton;
});