const slider0=document.getElementById("slider0");
const slider1=document.getElementById("slider1");
const slider2=document.getElementById("slider2");

const sliderItems=["images/sliderItem1.png","images/sliderItem2.png","images/sliderItem3.png","images/sliderItem4.png"];
let nextImg=1; 
slider1.addEventListener("animationend",()=>{
    slider1.style.backgroundImage=`url(${sliderItems[nextImg]})`;
    nextImg++;
    if(nextImg==4){
        nextImg=0;
    }
    slider2.style.backgroundImage=`url(${sliderItems[nextImg]})`;
    slider1.classList.remove("izq");
    slider2.classList.remove("izq");
});
function slide(){
    slider1.classList.add("izq");
    slider2.classList.add("izq");
}
setInterval(slide,2000);
