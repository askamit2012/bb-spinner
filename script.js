const spinBtn = document.getElementById("spin-button");
let coloredCircle = document.querySelector(".colored-circle");

let modalContainer = document.getElementById("modal-container");
let modal = document.querySelector(".modal");
let modalSVG = document.querySelector(".modal-svg");
let modalRect = document.querySelector("#modal-rect");
let couponCode = document.querySelector("#coupon-code");
let copyCouponIcon = document.querySelector(".copy-icon");
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
  let rotatingDegree = 360 * 20 + rotatingFactor * 60;
  coloredCircle.style.transform = `rotate(${rotatingDegree}deg)`;

  showPrize(rotatingFactor);
}

function showPrize(rotatingFactor) {
  let prizeVal = 0;
  // prizeModal.classList.add("show-prize-modal");
  setTimeout(() => {
    modalContainer.classList.add("six");
  }, 7000);

  prizeArray.forEach((prize) => {
    if (prize.id === rotatingFactor) {
      prizeVal = prize.value;
      // prizeModal.style.backgroundColor = prize.colorCode;
      // modal.style.color = "#fff";
      modal.style.zIndex = 100000;
      modalRect.style.fill = prize.colorCode;
      modalSVG.style.fill = prize.colorCode;
      // modal.style.color = "#fff";
      // modalRect.style.stroke = "#fff";
      //   spinAgainBtn.style.background = prize.colorCode;
      // spinAgainBtn.style.color = "#fff";
      //   spinAgainBtn.style.borderBottom = "2px solid red";
    }
    // couponCode.select();
    // couponCode.setSelectionRange(0, 99999);
    // navigator.clipboard.writeText(couponCode.value);
    // alert("Copied the text: " + couponCode.value);
  });
}

spinBtn.addEventListener("click", (e) => spinBtnHandler(e));
copyCouponIcon.addEventListener("click", function () {
  console.log("please copy the Coupon!");
});
