var inputTxt = document.getElementById("inputTxt");
var nextBtn = document.getElementById("next");
var amountReceived = document.getElementById("amountReceived");
var calcBtn = document.getElementById("calculate");
var secondBox = document.getElementById("secondBox");
const getNextElement = () => {
  secondBox.style.display = "block";
  nextBtn.style.display = "none";
};
const calculateChange = (billAmount, receivedAmount) => {
  var denominations = [2000, 500, 100, 20, 10, 5, 1];
  var currentBalance = Number(receivedAmount) - Number(billAmount);
  var changeToBeReturned = [];
  for (let i = 0; i < denominations.length; i++) {
    if (denominations[i] < currentBalance) {
      var currentDenomination = denominations[i];
      var notes = Math.floor(currentBalance / currentDenomination);
      changeToBeReturned.push(notes);
      currentBalance = currentBalance % currentDenomination;
    } else {
      changeToBeReturned.push(0);
    }
  }

  console.log(changeToBeReturned);
  // return changeToBeReturned;
};
nextBtn.addEventListener("click", getNextElement);
calcBtn.addEventListener(
  "click",
  calculateChange(inputTxt.value, amountReceived.value)
);
