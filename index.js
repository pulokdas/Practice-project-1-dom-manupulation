const availableBalance = document.getElementById("availableBalance");
const history = document.getElementById("historyCards");
const currentDate = new Date().toLocaleString("en-GB");

// function for balance and donation amount handelling

function donationClick(inputAmount, totalamount) {
  if (parseFloat(availableBalance.innerHTML) >= inputAmount) {
    if (!isNaN(inputAmount) && inputAmount > 0) {
      totalamount = totalamount + inputAmount;
      availableBalance.innerHTML = parseFloat(
        availableBalance.innerHTML - inputAmount
      );

      return totalamount;
    } else {
      document.getElementById("my_modal_3").showModal();
      return totalAmount;
    }
  } else {
    alert("not enough balance");
    return totalamount;
  }
}

// donation cards and click handling

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const title = card.querySelector(".title");
  const donateButton = card.querySelector(".donate-btn");
  const donationAmountInput = card.querySelector("input.input");
  const donationTotalSpan = card.querySelector(".donationTotal");

  donateButton.addEventListener("click", () => {
    const total = donationClick(
      parseFloat(donationAmountInput.value),
      parseFloat(donationTotalSpan.innerHTML)
    );
    history.innerHTML += ` <div class="card bg-base-100  shadow-sm">
        <div class="card-body">
          <h2 class="card-title"><span>${donationAmountInput.value}</span> Taka is Donated <span>${title.innerHTML} </span></h2>
          <p>
            date: <span>${currentDate}</span>
          </p>
        
        </div>
      </div>`;
    console.log(title);
    console.log(donationTotalSpan);
    donationTotalSpan.innerHTML = total;
    donationAmountInput.value = " ";
  });
});

// navigation button or toggle button
