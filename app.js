console.log("This is Note tutorial.");

showNote();

// add a click listener to the addBtn to store data in localStore.

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  let addText = document.getElementById("noteText");
  let addTittle = document.getElementById("tittle");

  let note = localStorage.getItem("notes");
  let noteObj;
  if (note == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(note);
  }
  let myObj = {
    tittle: addTittle.value,
    text: addText.value,
  };
  noteObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  addText.value = "";
  addTittle.value = "";
  showNote();
});

// createing showNote Function to show content below.

function showNote() {
  let note = localStorage.getItem("notes");
  if (note == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(note);
  }

  let html = "";
  noteObj.forEach((elements, index) => {
    html += `<div class="card"> 
                <h1> ${elements.tittle} </h1>
                <p> ${elements.text}</p>
                <button id="${index}" onclick ="deleteNote(this.id)" class="dbtn">Delete Note </button> 
            </div>`;
  });

  let containerTxt = document.getElementById("notes");
  if (noteObj.length == 0) {
    containerTxt.innerHTML = `<strong> No note is here.`;
  } else {
    containerTxt.innerHTML = html;
  }
}

// create a deleteNote function to delete note.  

function deleteNote(index) {
  let note = localStorage.getItem("notes");
  if (note == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(note);
  }
  noteObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNote();
}

// add a click listener to search button for search query.

let sBtn = document.querySelector("#sBtn");
sBtn.addEventListener("click", () => {
  let sVal = document.getElementById("searchTxt").value.toLowerCase();

  let card = document.getElementsByClassName("card");
  Array.from(card).forEach((element) => {
    let heading = element.getElementsByTagName("h1")[0].innerText.toLowerCase();

    if (heading.includes(sVal)) {
      element.style.display = "block";
      element.style.color = "green";
    } else {
      element.style.display = "none";
    }
  });
});
