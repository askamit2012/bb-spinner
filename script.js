const spinBtn = document.getElementById("spin-button");
let coloredCircle = document.querySelector(".colored-circle");
let spinAgainBtn = document.getElementById("spin-again-btn");
let prizeModal = document.querySelector("#prize-modal");
let prizeSpan = document.querySelector("#prize-span");
let prizeArray = [
  {
    id: 6,
    color: "green",
    colorCode: "#2CCCC1",
    value: "100",
  },
  {
    id: 5,
    color: "blue",
    colorCode: "#8E84E1",
    value: "200",
  },
  {
    id: 4,
    color: "purple",
    colorCode: "#D382E7",
    value: "300",
  },
  {
    id: 3,
    color: "red",
    colorCode: "#DB5F7D",
    value: "400",
  },
  {
    id: 2,
    color: "brick",
    colorCode: "#E38974",
    value: "500",
  },
  {
    id: 1,
    color: "yellow",
    colorCode: "#EBC845",
    value: "100",
  },
];

function spinBtnHandler(e) {
  let rotatingFactor = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  console.log(rotatingFactor);
  let rotatingDegree = 360 * 3 + rotatingFactor * 60;
  coloredCircle.style.transform = `rotate(${rotatingDegree}deg)`;
  setTimeout(() => {
    showPrize(rotatingFactor);
  }, 4000);
}

function showPrize(rotatingFactor) {
  let prizeVal = 0;
  prizeModal.classList.add("show-prize-modal");

  prizeArray.forEach((prize) => {
    if (prize.id === rotatingFactor) {
      prizeVal = prize.value;
      prizeModal.style.backgroundColor = prize.colorCode;
      //   spinAgainBtn.style.background = prize.colorCode;
      spinAgainBtn.style.color = "#fff";
    }
  });
  prizeSpan.innerHTML = `You Won ${prizeVal} rupees!`;
}

function spinAgain() {
  prizeModal.classList.remove("show-prize-modal");
  window.location.reload();
}

spinBtn.addEventListener("click", (e) => spinBtnHandler(e));
spinAgainBtn.addEventListener("click", spinAgain);
