var inputTxt = document.getElementById("inputTxt");
var nextBtn = document.getElementById("next");
var amountReceived = document.getElementById("amountReceived");
var calcBtn = document.getElementById("calculate");
var secondBox = document.getElementById("secondBox");
var tableResult = document.getElementsByClassName("result");
var table = document.querySelector(".result-table");
table.style.setProperty("display", "none");
const getNextElement = () => {
  secondBox.style.display = "block";
  nextBtn.style.display = "none";
};
var denominations = [2000, 500, 100, 20, 10, 5, 1];
var changeToBeReturned = [];
const calculateChange = () => {
  var billAmount = inputTxt.value;
  var receivedAmount = amountReceived.value;

  var currentBalance = receivedAmount - billAmount;

  for (let i = 0; i < denominations.length; i++) {
    if (denominations[i] <= currentBalance) {
      var currentDenomination = denominations[i];
      var notes = Math.floor(currentBalance / currentDenomination);
      changeToBeReturned.push(notes);
      currentBalance = currentBalance % currentDenomination;
    } else {
      changeToBeReturned.push(0);
    }
  }

  console.log(changeToBeReturned);
  table.style.removeProperty("display");
  changeToBeReturned.map((item, index) => {
    return (tableResult.item(index).innerHTML = item);
  });
  // console.log(tableResult.item(1).innerHTML);
  changeToBeReturned = [];
  // return changeToBeReturned;
};
nextBtn.addEventListener("click", getNextElement);
calcBtn.addEventListener("click", calculateChange);
