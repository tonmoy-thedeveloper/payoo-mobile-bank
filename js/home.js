// Valid Information
const validPin = 1234;
const validAccountNumber = 12345678900;

// Add money functionality
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Add money button clicked");

    // Accessing all data
    const bankName = document.getElementById("bank").value;
    const accountNumber = parseInt(
      document.getElementById("bank-account-number").value
    );
    const amount = parseInt(document.getElementById("amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);

    // console.log(bankName, accountNumber, amount, pinNumber);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // console.log(availableBalance);
    if (accountNumber.length < 11) {
      alert("Please give valid 11 digit account number");
      return;
    }
    if (accountNumber !== validAccountNumber) {
      alert("Write valid account number");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Please Provide valid pin number");
      return;
    }
    const totalAvailableBalance = availableBalance + amount;

    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });

// Withdraw Money Functionality
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // Get Values
  const agentNumber = document.getElementById("agent-number").value;
  const amount = parseInt(document.getElementById("amount-withdraw").value);
  const pinNumber = parseInt(
    document.getElementById("withdraw-pin-number").value
  );
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  // Validation
  if (agentNumber.length < 11) {
    alert("Please provide the valid agent number");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Please provide a valid pin");
    return;
  }
  // Feature of withdraw
  const subtractBalance = availableBalance - amount;

  document.getElementById("available-balance").innerText = subtractBalance;
});

// Toggling Feature

document.getElementById("add-money").addEventListener("click", function () {
  console.log("Add money clicker");
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("add-money-section").style.display = "block";
});
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "block";
});
