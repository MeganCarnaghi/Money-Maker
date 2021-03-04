// variable for the make money button
const button = document.getElementById("makeMoney");
// variable for the div where the coins will be placed
const coinContainer = document.querySelector(".main__coins");
// Variable for the money total P
const moneyTotal = document.querySelector(".moneyTotal__p");
let total = null;

//Event listener for the button
button.addEventListener("click", (e) => {
  e.preventDefault();
  // variable for the number in the "How many?" input
  const quantity = parseInt(document.getElementById("coinNum").value);
  // variable for the coin type
  const coin = document.getElementById("coinType").value;

  // loop through the quantity and create a new div/coin for each one
  for (i = 0; i < quantity; i++) {
    // create a new div
    const newDiv = document.createElement("div");

    //append the fiv to the coinCointainer div
    coinContainer.appendChild(newDiv);

    // Switch statement for coin types
    switch (coin) {
      case "penny":
        newDiv.classList.add("penny");
        newDiv.textContent = "P";
        total += 1;
        moneyTotal.textContent = `${total} cents`;
        break;
      case "nickel":
        newDiv.classList.add("nickel");
        newDiv.textContent = "N";
        total += 5;
        moneyTotal.textContent = `${total} cents`;
        break;
      case "dime":
        newDiv.classList.add("dime");
        newDiv.textContent = "D";
        total += 10;
        moneyTotal.textContent = `${total} cents`;
        break;
      case "quarter":
        newDiv.classList.add("quarter");
        newDiv.textContent = "Q";
        total += 25;
        moneyTotal.textContent = `${total} cents`;
        break;
    }
  }
  document.getElementById("coinNum").value = "0";
});

// Remove a penny when it is clicked on.
function pennyRemover(event) {
  const penny = event.target;
  if (penny.classList.contains("penny")) {
    penny.remove();
    total -= 1;
    moneyTotal.textContent = `${total} cents`;
  }
}

// Remove a nickel when it is clicked on.
function nickelRemover(event) {
  const nickel = event.target;
  if (nickel.classList.contains("nickel")) {
    nickel.remove();
    total -= 5;
    moneyTotal.textContent = `${total} cents`;
  }
}

// Remove a dime when it is clicked on.
function dimeRemover(event) {
  const dime = event.target;
  if (dime.classList.contains("dime")) {
    dime.remove();
    total -= 10;
    moneyTotal.textContent = `${total} cents`;
  }
}

// Remove a quarter when it is clicked on.
function quarterRemover(event) {
  const quarter = event.target;
  if (quarter.classList.contains("quarter")) {
    quarter.remove();
    total -= 25;
    moneyTotal.textContent = `${total} cents`;
  }
}

// Event listeners for coins
document.addEventListener("click", pennyRemover);
document.addEventListener("click", nickelRemover);
document.addEventListener("click", dimeRemover);
document.addEventListener("click", quarterRemover);
