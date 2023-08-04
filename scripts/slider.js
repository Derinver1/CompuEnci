const slider0=document.getElementById("slider0");
const slider1=document.getElementById("slider1");
const slider2=document.getElementById("slider2");
const carouselImg1=document.getElementById("carouselImg1");
const carouselImg2=document.getElementById("carouselImg2");
const Gpanel0=document.getElementById("slider0G");
const Gpanel1=document.getElementById("slider1G");
const Gpanel2=document.getElementById("slider2G");
const gBtnAnterior=document.getElementById("gBtnAnterior");
const gBtnSiguiente=document.getElementById("gBtnSiguiente");
const imagenActual=document.getElementById("imgActual");
const imagenAnterior=document.getElementById("imgAnterior");
const imagenSiguiente=document.getElementById("imgSiguiente");
const imagen1=document.getElementById("imagen1");
const imagen2=document.getElementById("imagen2");
const imagen3=document.getElementById("imagen3");
const imagen4=document.getElementById("imagen4");
const imagen5=document.getElementById("imagen5");
const imagen6=document.getElementById("imagen6");
const imagen7=document.getElementById("imagen7");
const imagen8=document.getElementById("imagen8");
const imagen9=document.getElementById("imagen9");
const botonMenu=document.getElementById("botonMenu");
const elMenu=document.getElementById("elMenu");

const sliderItems=["images/sliderItem1.png","images/sliderItem2.png","images/sliderItem3.png","images/sliderItem4.png"];
let nextImg=1; 
slider1.addEventListener("animationend",()=>{
	carouselImg1.src=sliderItems[nextImg];
    nextImg++;
    if(nextImg==3){
        nextImg=0;
    }
    carouselImg2.src=sliderItems[nextImg];
    slider1.classList.remove("izq");
    slider2.classList.remove("izq");
});
function slide(){
    slider1.classList.add("izq");
    slider2.classList.add("izq");
}
setInterval(slide,2000);

const galleryItems=["images/galleryImg1.jpg","images/galleryImg2.png","images/galleryImg3.png","images/galleryImg4.jpg","images/galleryImg5.png","images/galleryImg6.jpg","images/galleryImg7.jpg","images/galleryImg8.jpg","images/galleryImg9.jpg"];
let nextPhoto=1;
let currentPhoto=0;
let prevPhoto=8;
gBtnSiguiente.addEventListener("click",()=>{
	Gpanel1.classList.add("izqG");
	Gpanel2.classList.add("izqG");
});
gBtnAnterior.addEventListener("click",()=>{
	Gpanel1.classList.add("derG");
	Gpanel0.classList.add("derG");
})
Gpanel1.addEventListener("animationend",()=>{
	if(Gpanel1.classList.contains('izqG')){
		imagenActual.src=galleryItems[nextPhoto];
		nextPhoto++;
		prevPhoto++;
		currentPhoto++;
		if (nextPhoto==9) {
			nextPhoto=0;
		}
		if(currentPhoto==9){
			currentPhoto=0;
		}
		if(prevPhoto==9){
			prevPhoto=0;
		}
		imagenAnterior.src=galleryItems[prevPhoto];
		imagenSiguiente.src=galleryItems[nextPhoto];
		Gpanel1.classList.remove("izqG");
		Gpanel2.classList.remove("izqG");
	}
	if(Gpanel1.classList.contains('derG')){
		imagenActual.src=galleryItems[prevPhoto];
		nextPhoto--;
		prevPhoto--;
		currentPhoto--;
		if (nextPhoto==-1) {
			nextPhoto=8;
		}
		if(currentPhoto==-1){
			currentPhoto=8;
		}
		if(prevPhoto==-1){
			prevPhoto=8;
		}
		imagenAnterior.src=galleryItems[prevPhoto];
		imagenSiguiente.src=galleryItems[nextPhoto];
		Gpanel0.classList.remove("derG");
		Gpanel1.classList.remove("derG");
	}
	switch(currentPhoto){
		case 0:
			imagen1.classList.add("galActual");
			imagen2.classList.remove("galActual");
			imagen9.classList.remove("galActual");
			break;
		case 1:
			imagen2.classList.add("galActual");
			imagen3.classList.remove("galActual");
			imagen1.classList.remove("galActual");
			break;
		case 2:
			imagen3.classList.add("galActual");
			imagen4.classList.remove("galActual");
			imagen2.classList.remove("galActual");
			break;
		case 3:
			imagen4.classList.add("galActual");
			imagen5.classList.remove("galActual");
			imagen3.classList.remove("galActual");
			break;
		case 4:
			imagen5.classList.add("galActual");
			imagen6.classList.remove("galActual");
			imagen4.classList.remove("galActual");
			break;
		case 5:
			imagen6.classList.add("galActual");
			imagen7.classList.remove("galActual");
			imagen5.classList.remove("galActual");
			break;
		case 6:
			imagen7.classList.add("galActual");
			imagen8.classList.remove("galActual");
			imagen6.classList.remove("galActual");
			break;
		case 7:
			imagen8.classList.add("galActual");
			imagen9.classList.remove("galActual");
			imagen7.classList.remove("galActual");
			break;
		case 8:
			imagen9.classList.add("galActual");
			imagen1.classList.remove("galActual");
			imagen8.classList.remove("galActual");
			break;
	}
})

botonMenu.addEventListener("click",()=>{
	if(elMenu.classList.contains("menuDelMovilMostrar")){
		elMenu.classList.remove("menuDelMovilMostrar");
	}else{
		elMenu.classList.add("menuDelMovilMostrar");
	}
})