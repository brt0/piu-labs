import { randColor, newID} from "./helpers.js";


export function deleteShape(shapeID){
    document.getElementById(shapeID).remove();
    store.deleteSquare;
}


export function addSquare(){
    const shape = document.createElement("div")
    shape.classList.add('shape');
    shape.classList.add('square');

    shape.innerHTML="<a><span class=\"delete\"><b>&#10006;</b></span></a>\
                     <a><span class=\"paint_single\" style=\"left:60px; top:-40px;\"><b>&#128396;</b></span></a>"

    shape.dataset.id = newID();
    shape.id = shape.dataset.id;
    shape.style.backgroundColor = randColor();

    console.log(shape.dataset.id);
    document.getElementById("container").append(shape);
    //store.addSquare();
}

export function addCircle(){
    const shape = document.createElement("div")
    shape.classList.add('shape');
    shape.classList.add('circle');

    shape.innerHTML="<a><span class=\"delete\"><b>&#10006;</b></span></a>\
                     <a><span class=\"paint_single\" style=\"left:60px; top:-40px;\"><b>&#128396;</b></span></a>"

    shape.dataset.id = newID();
    shape.id = shape.dataset.id;
    shape.style.backgroundColor = randColor();

    console.log(shape.dataset.id);
    document.getElementById("container").append(shape);
    //store.addSquare();
}

export function reColor(shapeID){
    document.getElementById(shapeID).style.backgroundColor = randColor();
}

export function reColorAll(color){

    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape) =>{
        shape.style.backgroundColor = color;
    });
}