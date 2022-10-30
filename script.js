const displayedNotes = document.querySelector('#notes1')
const addNewButton = document.querySelector('#add-new')
const saveAllButton = document.querySelector('#save-all')
const customNote = `<div class="note">
<div class="note-header">
  <input type="text" placeholder="Not başlığı">
  <div class="buttons">
    <button class="delete-note"><i class="uil uil-trash"></i></button>
  </div>
</div>
<textarea placeholder="Notunuzu yazınız..." name="" id=""></textarea>
</div>
`

let notesToStorage = [[],[]]
let notesFromStorage = []
let allNotes = document.querySelectorAll('.notes1 .note textarea')
let allNotesTitles = document.querySelectorAll('.notes1 .note .note-header input')
if (localStorage.getItem('sticky-notes')) {
  console.log('not var')
  notesFromStorage = JSON.parse(localStorage.getItem('sticky-notes'))
  
for (let i = 0; i < notesFromStorage[0].length; i++) {
  addNewNote();
}
allNotes = document.querySelectorAll('.notes1 .note textarea')
allNotesTitles = document.querySelectorAll('.notes1 .note .note-header input')
allNotesTitles.forEach((element, index) => {
  element.value = notesFromStorage[0][index]
});

allNotes.forEach((element, index) => {
  element.value = notesFromStorage[1][index]
});
  
} else {
  notesFromStorage = []
}


addNewButton.addEventListener('click', addNewNote)
function addNewNote() {
  let aNote = document.createElement('div')
  aNote.innerHTML = customNote;
  displayedNotes.appendChild(aNote)
  let deleteNote = aNote.querySelector('.delete-note')
  deleteNote.addEventListener('click', ()=>{
    aNote.remove();
  })
}

saveAllButton.addEventListener('click', () => {
  allNotesTitles = document.querySelectorAll('.notes1 .note .note-header input')
  allNotes = document.querySelectorAll('.notes1 .note textarea')

   allNotes.forEach((element, index) => {
    notesToStorage[1][index] = element.value
  });

  allNotesTitles.forEach((element, index) => {
    notesToStorage[0][index] = element.value
  });
  console.log(notesToStorage)
  localStorage.setItem('sticky-notes', JSON.stringify(notesToStorage))
 
})
//const deleteNote = document.querySelectorAll('.delete-note')
//console.log(deleteNote)

// deleteNote.addEventListener('click', ()=>{
//   console.log('hey')
// })
// let willDelete;
// deleteNote.forEach((element,index) =>{
//   element.addEventListener('click', ()=>{
//     willDelete= document.querySelectorAll('.note')
//     willDelete[index].remove()
//     console.log('tıkladın')
//   })
// })