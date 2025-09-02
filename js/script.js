// Valid login data
const phoneNumber = 01314832124;
const pinNumber = 6464;

// Login button functionality
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // Accessing login data
  const mobileNumberValue = document.getElementById("phone-number").value;

  const pinNumberValue = document.getElementById("pin-number").value;

  // Converting login credentials to number
  const mobileNumberValueConvert = parseInt(mobileNumberValue);
  const pinNumberValueConvert = parseInt(pinNumberValue);

  // Giving conditional to login
  if (
    mobileNumberValueConvert === phoneNumber &&
    pinNumberValueConvert === pinNumber
  ) {
    window.location.href = "../home.html";
  } else {
    alert("Please put right credentials for login");
  }
});
