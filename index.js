// DOM elements
const availableBalance = document.getElementById("availableBalance");
const history = document.getElementById("historyCards");
let isValid = false;
// Handle donation logic and update balance
function donationClick(inputAmount, totalamount) {
  if (parseFloat(availableBalance.innerHTML) <= inputAmount) {
    document.getElementById("my_modal_5").showModal();
    isValid = false;

    return totalamount;
  }

  if (!isNaN(inputAmount) && inputAmount > 0) {
    totalamount = totalamount + inputAmount;
    availableBalance.innerHTML = parseFloat(
      availableBalance.innerHTML - inputAmount
    );
    document.getElementById("my_modal_4").showModal();
    isValid = true;
    return totalamount;
  } else {
    document.getElementById("my_modal_3").showModal();
    isValid = false;
  }
}
// Navigation buttons
const donationButton = document.getElementById("donationBtn");
const historyButton = document.getElementById("historyBtn");
console.log(historyButton);

historyButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent <a> default behavior
  document.getElementById("historySection").classList.remove("hidden");
  document.getElementById("donationSection").classList.add("hidden");
  donationButton.classList.remove("bg-[#B4F461]");
  historyButton.classList.add("bg-[#B4F461]");
});
donationButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent <a> default behavior
  document.getElementById("donationSection").classList.remove("hidden");
  document.getElementById("historySection").classList.add("hidden");
  historyButton.classList.remove("bg-[#B4F461]");
  donationButton.classList.add("bg-[#B4F461]");
});

// For each donation card, handle donate button click
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const currentDate = new Date().toLocaleString("en-GB");

  const title = card.querySelector(".title");
  const donateButton = card.querySelector(".donate-btn");
  const donationAmountInput = card.querySelector("input.input");
  const donationTotalSpan = card.querySelector(".donationTotal");

  donateButton.addEventListener("click", () => {
    const total = donationClick(
      parseFloat(donationAmountInput.value),
      parseFloat(donationTotalSpan.innerHTML)
    );
    // Add donation to history
    if (isValid) {
      history.innerHTML += ` <div class="card bg-base-100  shadow-sm">
        <div class="card-body">
          <h2 class="card-title text-green-700"><span>${donationAmountInput.value}</span> Taka is Donated <span>${title.innerHTML} </span></h2>
          <p>
            date: <span>${currentDate}</span>
          </p>
        </div>
      </div>`;
    } else {
      history.innerHTML += ` <div class="card bg-base-100  shadow-sm">
        <div class="card-body">
          <h2 class="card-title text-red-700"><span></span> Donation failed  <span>${title.innerHTML} </span></h2>
          <p>
            date: <span>${currentDate}</span>
          </p>
        </div>
      </div>`;
    }
    donationTotalSpan.innerHTML = total;
    donationAmountInput.value = "";
  });
});
