function addPoem() {
  let ul = document.getElementById("list");
  let li = document.createElement("li");
  let poem = document.getElementById("poem");
  let poemName = poem;

  li.appendChild(poemName);
  ul.appendChild(li);
}
