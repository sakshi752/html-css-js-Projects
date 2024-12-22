const noteCont = document.getElementById("notesCont");
const noteForm = document.getElementById("noteForm");
const notes = []
const isEdit = false;
let currIndex = null;

const saveToLocalStorage = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
};

const addNote = (addNote, dateInput) => {
    const newNote = { note: addNote.value, date: formatDateDDMMYYYY(dateInput.value) }
    notes.push(newNote);

    renderNote(newNote, notes.length - 1);

    dateInput.value = ""
    addNote.value = ""

    saveToLocalStorage()

}
const editNote = (index) => {
    const noteInput = noteForm.querySelector('#note-input');
    const dateInput = noteForm.querySelector('#note-date');
    const submitBtn = noteForm.querySelector('#submit-btn');

    isEditing = true;
    currIndex = index;

    const [day, month, year] = notes[index].date.split('/');

    submitBtn.textContent = "Edit Note";
    noteInput.value =  notes[index].note
    dateInput.value =  `${year}-${month}-${day}`;
 }
const deleteNote = (index, element) => {
    noteCont.removeChild(element);
    notes.splice(index, 1);
    if (notes.length === 0) {
        localStorage.removeItem("notes")
    } else {
        saveToLocalStorage()
    }

    refreshNotes()
}
const renderNote = (note, index) => {
    const newNoteCont = document.createElement('div')
    newNoteCont.innerHTML = `
    <p>${note.note}</p>
    <p>${note.date}</p>
    <div>
    <button class = "deleteNotes" data-index=${index}>Delete Note</button>
        <button class = "editNotes" data-index=${index}>Edit Note</button>
    </div>    
    `
    const deleteBtn = newNoteCont.querySelector('.deleteNotes');
    deleteBtn.addEventListener('click', () => deleteNote(index, newNoteCont))

    const editBtn = newNoteCont.querySelector('.editNotes');
    editBtn.addEventListener('click', () => editNote(index))

    noteCont.appendChild(newNoteCont)
}
const formatDateDDMMYYYY = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
}

const refreshNotes = () => {
    noteCont.innerHTML = ''
    notes.forEach((note, index) => {
        renderNote(note, index)
    })
}

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const noteInput = noteForm.querySelector('#note-input');
    const dateInput = noteForm.querySelector('#note-date');
    const submitBtn = noteForm.querySelector('#submit-btn');

    if (noteInput.value === "" || noteInput.value === "") {
        alert("Enter inputs");
        return;
    }
    if (isEdit) {
        const updatedNote = {
            note: noteInput.value,
            date: formatDateDDMMYYYY(dateInput.value)
        }
        notes[currIndex] = updatedNote;
        saveToLocalStorage()
        refreshNotes()

        submitBtn.textContent = "Add Todo";
        isEditing = false;
        currentEditIndex = null;

        todoInput.value = "";
        dateInput.value = "";
    } else {
        addNote(noteInput, dateInput)
    }
})

window.onload = () => {
    const localNotes = JSON.parse(localStorage.getItem("notes"))

    if (localNotes && Array.isArray(notes)) {
        localNotes.forEach((note, index) => {
            notes.push(note)
            renderNote(note, index)
        })
    }
}
