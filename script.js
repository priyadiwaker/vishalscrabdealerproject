

card = document.querySelector(".items");
function createcard([img, name, price]){
    var clutter = `
    <div class="card">
    <div class="content">
       <div class="img1">
           <img src="${img}" alt="">
       </div>
       <div class="text">
           <h4>${name}</h4>
           <h3>${price}<span>Rs/Kg</span></h3>
           <a class="phone phone2" href="tel:919981047400">call now</a>
       </div>
    </div>
 </div>
    `;
    card.innerHTML += clutter;
}

var card1 = [
    "/images/iron2.avif",
    "iron",
    "30"
]
var card2 = [
    "/images/armature_fieldcoil.avif",
    "Armature fieldcoil",
    "65"
]
var card3 = [
    "/images/Structural_iron.avif",
    "Structural iron",
    "30"
]
var card4 = [
    "/images/tin.jpg",
    "tin",
    "18"
]
var card5 = [
    "/images/steel.jpg",
    "steel",
    "45"
]
var card6 = [
    "/images/copper.avif",
    "copper",
    "450"
]
var card7 = [
    "/images/brass.jpg",
    "brass",
    "280"
]
var card8 = [
    "/images/aluminium.avif",
    "aluminium",
    "70"
]
var card9 = [
    "/images/copper_cable.jpg",
    "copper cable",
    "68"
]
var card10 = [
    "/images/newspapre.webp",
    "newspaper",
    "11"
]
var card11 = [
    "/images/books.webp",
    "books",
    "8"
]
var card12= [
    "/images/battery.webp",
    "battery",
    "48"
]
var card13= [
    "/images/aluminium_cable.jpg",
    "aluminium cable",
    "28"
]

createcard(card1);
createcard(card2);
createcard(card3);
createcard(card4);
createcard(card5);
createcard(card6);
createcard(card7);
createcard(card8);
createcard(card9);
createcard(card10);
createcard(card11);
createcard(card12);
createcard(card13)















