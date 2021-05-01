var inputTxt = document.getElementById("inputTxt");
var nextBtn = document.getElementById("next");
var amountReceived = document.getElementById("amountReceived");
var calcBtn = document.getElementById("calculate");
var secondBox = document.getElementById("secondBox");
var tableResult = document.getElementsByClassName("result");
var table = document.querySelector(".result-table");
var errorMsg = document.querySelector(".errormsg");
var calcError = document.querySelector(".calc-error");

table.style.setProperty("display", "none");
const getNextElement = () => {
  if (/^\d+$/.test(inputTxt.value)) {
    if (inputTxt.value === 0) {
      errorMsg.innerHTML = "Bill Amount cannot be zero!";
    } else {
      secondBox.style.display = "block";
      nextBtn.style.display = "none";
      errorMsg.style.setProperty("display", "none");
    }
  } else {
    errorMsg.innerHTML = "Please enter a number";
  }
};
var denominations = [2000, 500, 100, 20, 10, 5, 1];
var changeToBeReturned = [];
const calculateChange = () => {
  var billAmount = inputTxt.value;
  var receivedAmount = amountReceived.value;

  var currentBalance = receivedAmount - billAmount;
  if (/^\d+$/.test(billAmount) && /^\d+$/.test(receivedAmount)) {
    if (receivedAmount < billAmount || receivedAmount === billAmount) {
      calcError.innerHTML =
        "Amount received is insufficient/no change to be returned!";
    } else {
      calcError.style.setProperty("display", "none");
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
    }
  } else {
    console.log("input a number!");
    table.style.setProperty("display", "none");
    calcError.innerHTML = "Please enter valid input";
  }

  console.log(/^\d+$/.test(billAmount));
  changeToBeReturned = [];
  // return changeToBeReturned;
};
nextBtn.addEventListener("click", getNextElement);
calcBtn.addEventListener("click", calculateChange);
