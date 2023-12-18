const notesListEl = document.querySelector(".notes-list");

notesListEl.innerHTML = "Hallo 123";

const MOCK_NOTES = [
  {
    id: 1,
    title: "Notiz 1",
    content: "12345",
    lastUpdated: new Date().getTime(),
  },
  {
    id: 2,
    title: "Notiz 2",
    content: "12345",
    lastUpdated: new Date().getTime(),
  },
  {
    id: 3,
    title: "Notiz3",
    content: "12345",
    lastUpdated: new Date().getTime(),
  },
  {
    id: 4,
    title: "Notiz 4",
    content: "12345",
    lastUpdated: new Date().getTime(),
  },
  {
    id: 5,
    title: "Notiz 5",
    content: "12345",
    lastUpdated: new Date().getTime(),
  },
];

function displayNotesList() {
  const notes = MOCK_NOTES;

  let html = "";

  notes.forEach((note) => {
    html += `
        <div class="note-entry" data-id="${note.id}">
         <div class="note-title">${note.title}</div>
            <div class="note-teaser">
            ${note.content}
         </div>
         <div class="note-date">${note.lastUpdated}</div>
         </div>`;
  });

  notesListEl.innerHTML = html;
}

displayNotesList();
