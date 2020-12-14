
// let app = new Vue({
//     el:'#capa',
//     data: {
//         year: new Date().getFullYear(),
//     }
// });

// SKILLS
var skill = document.querySelectorAll('.skill');
var sliderSkill, skillAtual, totalSkill, time;
var barras = document.querySelectorAll(".barra");
var niveis = document.querySelectorAll(".nivel");

function mostrarSkill(s){
    skill[s].classList.add("display");
    barra();
}

function iniciarSkills(){
    skillAtual = 0;
    totalSkill = skill.length-1;
    sliderSkill = document.querySelector(".skills");
    mostrarSkill(skillAtual);
    time = setInterval(mudaSkill, 6000);
    
}

function animaScroll() {
  console.log("Animou");
}

function barra(){
    for(let i = 0; i < barras.length; i++){
        niveis[i].style.width = barras[i].getAttribute("nivel");
    }
}

// CERTIFICADOS
var imgs=[];
var slider;
var imgAtual;
var totalImgs;
var tmp;

function preCarregamento(){
    for(let i = 0; i < 13; i++){
        imgs[i] = new Image();
        imgs[i].src = "./images/certificados/certificado"+i+".png";
    }
}

function carregarImg(img){
    slider.style.backgroundImage = "url('"+imgs[img].src+"')";
}

function iniciar(){
    preCarregamento();
    imgAtual = 0;
    totalImgs = imgs.length-1;
    slider = document.querySelector(".certificados");
    carregarImg(imgAtual);
    tmp = setInterval(mudaCert, 3000);
}

function mudaCert(ir = 1){
    imgAtual += ir;
    if(imgAtual > totalImgs){
        imgAtual = 0;
    }
    if(imgAtual < 0){
        imgAtual = totalImgs;
    }
    carregarImg(imgAtual);    
}
window.addEventListener('load', iniciar);

// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /* Loop through a collection of all HTML elements: */
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("w3-include-html");
//     if (file) {
//       /* Make an HTTP request using the attribute value as the file name: */
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//           if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//           if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//           /* Remove the attribute, and call this function once more: */
//           elmnt.removeAttribute("w3-include-html");
//           includeHTML();
//         }
//       }
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /* Exit the function: */
//       return;
//     }
//   }
// }
