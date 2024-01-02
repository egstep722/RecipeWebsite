'use strict';

// search bar
const search = document.getElementById("search");
const rnames = document.getElementsByClassName("rname");

search.addEventListener("keyup", (event) => {
  const { value } = event.target;
  const converge = value.toLowerCase();

  for (const nameEle of rnames) {
    let rname = nameEle.textContent.toLowerCase();
    if (rname.includes(converge)) {
      nameEle.style.display = "flex";
    } else {
      nameEle.style.display = "none";
    }
  }
});



