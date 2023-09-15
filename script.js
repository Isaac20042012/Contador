const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

if (localStorage.getItem("Isaac")) {
  p1.innerHTML = localStorage.getItem("Isaac");
  function addP1() {
    let points = Math.round(localStorage.getItem("Isaac"));
    localStorage.removeItem("Isaac");
    localStorage.setItem("Isaac", points + 1);
    p1.innerHTML = localStorage.getItem("Isaac");
  }
  function removeP1() {
    let points = Math.round(localStorage.getItem("Isaac"));
    localStorage.removeItem("Isaac");
    localStorage.setItem("Isaac", points - 1);
    p1.innerHTML = localStorage.getItem("Isaac");
  }
} else {
  localStorage.setItem("Isaac", 0);
  p1.innerHTML = localStorage.getItem("Isaac");
}

if (localStorage.getItem("Edimir")) {
  p1.innerHTML = localStorage.getItem("Edimir");
  function addP2() {
    let points1 = Math.round(localStorage.getItem("Edimir"));
    localStorage.removeItem("Edimir");
    localStorage.setItem("Edimir", points1 + 1);
    p2.innerHTML = localStorage.getItem("Edimir");
  }
  function removeP2() {
    let points1 = Math.round(localStorage.getItem("Edimir"));
    localStorage.removeItem("Edimir");
    localStorage.setItem("Edimir", points1 - 1);
    p2.innerHTML = localStorage.getItem("Edimir");
  }
} else {
  localStorage.setItem("Edimir", 0);
  p2.innerHTML = localStorage.getItem("Edimir");
}
