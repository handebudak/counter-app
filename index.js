let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let savedCounts = document.getElementById("saved-counts");
let count = 0;

const increment = () => {
  count += 1;
  countEl.textContent = count;
};

const save = () => {
  let countStr = count + " - ";
  savedCounts.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
};
