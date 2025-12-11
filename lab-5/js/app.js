import { randColor } from './helpers.js';
import {addSquare,addCircle, deleteShape, reColor, reColorAll} from './ui.js';

const counterSquares = document.querySelector('#squares');
const counterCircles = document.querySelector('#circles');
const incBtn = document.querySelector('#addSquare');
const resetBtn = document.querySelector('#addCircle');

console.log(store.squares);


document.getElementById("addSquare").addEventListener("click", ()=> addSquare());
document.getElementById("addCircle").addEventListener("click", ()=> addCircle());
document.getElementById("paint_all").addEventListener("click", ()=> reColorAll(randColor()));



const deleteButtons = document.querySelectorAll("delete");
 deleteButtons.forEach(element => {
     element.addEventListener("click", ()=> deleteShape(this.closest('.shape').getAttribute('id')));
 });

 const paint = document.querySelectorAll("paint_single");
 paint.forEach(element => {
     element.addEventListener("click", ()=> reColor(this.closest('.shape').getAttribute('id')));
 });

 