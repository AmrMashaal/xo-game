let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turnHtml = document.querySelector(".turn");
let winner = document.querySelector(".winner");
let turn = "x";
let check = false;

function change(e) {
  if (turn === "x" && e.innerHTML === "") {
    turn = "o";
    e.innerHTML = "x";
    turnHtml.innerHTML = "o";
  } else if (turn === "o" && e.innerHTML === "") {
    turn = "x";
    e.innerHTML = "o";
    turnHtml.innerHTML = "x";
  }
}

function win(e) {
  if (
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML &&
    box1.innerHTML !== ""
  ) {
    setTimeout(function () {
      winner.classList.add("show");
    }, 500);
    winner.innerHTML = `winner is ${box1.innerHTML}`;
    box1.classList.add("done");
    box2.classList.add("done");
    box3.classList.add("done");
  } else if (
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML &&
    box1.innerHTML !== ""
  ) {
    setTimeout(function () {
      winner.classList.add("show");
    }, 500);
    winner.innerHTML = `winner is ${box1.innerHTML}`;
    box1.classList.add("done");
    box5.classList.add("done");
    box9.classList.add("done");
  } else if (
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML &&
    box1.innerHTML !== ""
  ) {
    setTimeout(function () {
      winner.classList.add("show");
    }, 500);
    winner.innerHTML = `winner is ${box1.innerHTML}`;
    box1.classList.add("done");
    box4.classList.add("done");
    box7.classList.add("done");
  } else if (
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML &&
    box2.innerHTML !== ""
  ) {
    setTimeout(function () {
      winner.classList.add("show");
    }, 500);
    winner.innerHTML = `winner is ${box2.innerHTML}`;
    box2.classList.add("done");
    box5.classList.add("done");
    box8.classList.add("done");
  } else if (
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML &&
    box3.innerHTML !== ""
  ) {
    setTimeout(function () {
      winner.classList.add("show");
    }, 500);
    winner.innerHTML = `winner is ${box3.innerHTML}`;
    box3.classList.add("done");
    box5.classList.add("done");
    box7.classList.add("done");
  } else if (
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML &&
    box3.innerHTML !== ""
  ) {
    setTimeout(function () {
      winner.classList.add("show");
    }, 500);
    winner.innerHTML = `winner is ${box3.innerHTML}`;
    box3.classList.add("done");
    box6.classList.add("done");
    box9.classList.add("done");
  } else if (
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML &&
    box4.innerHTML !== ""
  ) {
    setTimeout(function () {
      winner.classList.add("show");
    }, 500);
    winner.innerHTML = `winner is ${box4.innerHTML}`;
    box4.classList.add("done");
    box5.classList.add("done");
    box6.classList.add("done");
  } else if (
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML &&
    box7.innerHTML !== ""
  ) {
    setTimeout(function () {
      setTimeout(function () {
        winner.classList.add("show");
      }, 500);
    }, 500);
    winner.innerHTML = `winner is ${box7.innerHTML}`;
    box7.classList.add("done");
    box8.classList.add("done");
    box9.classList.add("done");
  } else if (
    box1.innerHTML !== "" &&
    box2.innerHTML !== "" &&
    box3.innerHTML !== "" &&
    box4.innerHTML !== "" &&
    box5.innerHTML !== "" &&
    box6.innerHTML !== "" &&
    box7.innerHTML !== "" &&
    box8.innerHTML !== "" &&
    check === false
  ) {
    winner.classList.add("show");
    winner.innerHTML = "draw";
  }
}

box.forEach(function (e) {
  e.onclick = function () {
    change(e);
    win(e);
  };
});

reset.onclick = function remove() {
  box.forEach(function (e) {
    e.innerHTML = "";
    winner.classList.remove("show");
    e.classList.remove("done");
  });
};
