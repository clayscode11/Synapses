let notes = [];

function openNoteDialog() {
  const dialog = document.getElementById("noteDialog");
  const titleInput = document.getElementById("noteTitle");
  const contentInput = document.getElementById("noteContent");

  dialog.showModal();
  titleInput.focus();
}

function closeNoteDialog() {
  document.getElementById("noteDialog").close();
}

function saveNote(event) {
  event.preventDefault();

  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();

  notes.unshift({
    id: generateId,
    title: title,
    content: content,
  });

  saveNotes();
}

function generateId() {
  return Date.now().toString();
}

function saveNotes() {
  localStorage.setItem("Synapses", JSON.stringify(notes));
}

function renderNotes() {
  const notesContainer = document.getElementById("notesContainer");

  if (notes.length === 0) {
    notesContainer.innerHTML = `
    <div class="empty-state">
      <h2>No Notes Yet</h2>
      <p>Create your first notes to get started!</p>
      <button class="add-note-button" onclick="openNoteDialog()">+Add Your First Note</button>
    </div>
    `;
    return;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("noteForm").addEventListener("submit", saveNote);

  document
    .getElementById("noteDialog")
    .addEventListener("click", function (event) {
      if (event.target === this) {
        closeNoteDialog();
      }
    });
});
