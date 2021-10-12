// console.log("Hello world!");
let modalContainer = document.getElementById("modal-container");

// const buttons = document.querySelector(".button");
// console.log(buttons);

// buttons.addEventListener("click", function (e) {
//   console.log("Hello button");
//   console.log(e.target);
//   var btnId = e.target.id;
//   console.log(btnId);
//   modalContainer.classList.add(btnId);
// });

setTimeout(() => {
  modalContainer.classList.add("six");
  setTimeout(function () {
    modalContainer.classList.remove("six");
  }, 2000);
}, 5000);
