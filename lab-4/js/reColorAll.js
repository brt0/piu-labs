function reColorAll(stageID){

    //var notes = document.getElementById(stageID).getElementsByClassName(".kanban");
    
    const stage = document.querySelector(stageID);
    const notes = stage.querySelectorAll('.kanban');
    const color = randColor();

    notes.forEach((note) =>{
        note.style.backgroundColor = color;
    });
}