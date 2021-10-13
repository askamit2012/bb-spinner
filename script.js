const spinBtn = document.getElementById("spin-button");
let coloredCircle = document.querySelector(".colored-circle");

let modalContainer = document.getElementById("modal-container");
let modal = document.querySelector(".modal");
let modalSVG = document.querySelector(".modal-svg");
let modalRect = document.querySelector("#modal-rect");
let couponCode = document.querySelector("#coupon-code");
let copyCouponIcon = document.querySelector(".copy-icon");
let prizeMoney = document.querySelector("#prize-money");
var prizeIndex = 0;
let prizeArray = [
  {
    id: 1,
    color: "yellow",
    colorCode: "#EBC845",
    value: "100",
    couponCode: "BB100",
  },
  {
    id: 2,
    color: "brick",
    colorCode: "#E38974",
    value: "200",
    couponCode: "BB200",
  },
  {
    id: 3,
    color: "red",
    colorCode: "#DB5F7D",
    value: "300",
    couponCode: "BB300",
  },
  {
    id: 4,
    color: "purple",
    colorCode: "#D382E7",
    value: "400",
    couponCode: "BB400",
  },
  {
    id: 5,
    color: "blue",
    colorCode: "#8E84E1",
    value: "500",
    couponCode: "BB500",
  },
  {
    id: 6,
    color: "green",
    colorCode: "#2CCCC1",
    value: "600",
    couponCode: "BB600",
  },
];

function spinBtnHandler(e) {
  let rotatingFactor = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  console.log("RF", rotatingFactor);
  let rotatingDegree = 7200 + rotatingFactor * 60;
  coloredCircle.style.transform = `rotate(${rotatingDegree}deg)`;

  showPrize(rotatingFactor);
}

function showPrize(rotatingFactor) {
  let prizeVal = 0;
  setTimeout(() => {
    modalContainer.classList.add("six");
  }, 7000);

  prizeArray.forEach((prize, index) => {
    if (prize.id === rotatingFactor) {
      prizeVal = prize.value;
      couponCode.innerText = prize.couponCode;
      prizeMoney.innerText = `₹ ${prize.value}`;
      modal.style.zIndex = 100000;
      modalRect.style.fill = prize.colorCode;
      modalSVG.style.fill = prize.colorCode;
      prizeIndex = prize.id;
    }
  });
}

spinBtn.addEventListener("click", (e) => spinBtnHandler(e));
copyCouponIcon.addEventListener("click", function () {
  console.log(navigator);
  navigator.clipboard.readText(couponCode.innerText);
  // alert(`code copied: ${prizeArray[prizeIndex - 1].couponCode}`);
});
