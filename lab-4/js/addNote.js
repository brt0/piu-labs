function addNote(stage){
    const note = document.createElement("div")
    note.classList.add('kanban');

    note.innerHTML='<input type="text" placeholder="Title" maxlength="14">\
          <blockquote contenteditable="true">\
            <p>Describe your task</p>\
          </blockquote>\
          <span><a onclick="deleteNote(this.closest(\'.kanban\').getAttribute(\'id\'))">&#10006;</a></span>\
          <span><a onclick="">←</a></span>\
          <span><a onclick="">→</a></span>\
          <span><a onclick="reColor(this.closest(\'.kanban\').getAttribute(\'id\'))">🖌</a></span>'

    note.id = newID();
    note.style.backgroundColor = randColor();


    console.log(stage)
    document.getElementById(stage).append(note);

}