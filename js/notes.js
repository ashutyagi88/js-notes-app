const addbtn = document.getElementById("add_btn");

const addNewNote = () => {
  const add_note = document.createElement("div");
  add_note.classList.add("note");

  add_note.innerHTML = `<div class="notes shadow">
  <div class="tools">
    <button class="edit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  </div>
  <div class="content hidden"></div>
  <textarea></textarea>
</div>
`;

const editbtn = add_note.querySelector(".edit");
const deletebtn = add_note.querySelector(".delete");
const note = add_note.querySelector(".notes");

const content = note.querySelector(".content");
const text_area = note.querySelector("textarea");
const notes = add_note.querySelector('.notes');
console.log(notes);

editbtn.addEventListener("click", () => {
  content.classList.toggle("hidden");
  text_area.classList.toggle("hidden");
  notes.classList.toggle("shadow");
});

deletebtn.addEventListener('click' ,() =>
{
     note.remove();
})

text_area.addEventListener("input", (e) => {
  const { value } = e.target;
  content.innerHTML = marked(value);
});


document.body.appendChild(add_note);
};



addbtn.addEventListener("click", () => {
  addNewNote();
});
