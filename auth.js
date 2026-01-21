/* ===== KAPDEWALA AUTH SYSTEM ===== */

// Demo OTP
const DEMO_OTP = "1234";

// SEND OTP
function sendOTP(){
  const mobile = document.getElementById("mobile").value;

  if(mobile.length !== 10){
    alert("10 digit mobile number dalo");
    return;
  }

  sessionStorage.setItem("otp_sent","yes");
  document.getElementById("otpBox").style.display = "block";
  alert("OTP sent successfully (Demo)");
}

// VERIFY OTP
function verifyOTP(){
  const otp = document.getElementById("otpInput").value;

  if(otp === DEMO_OTP){
    localStorage.setItem("kw_user","loggedin");
    alert("Login successful ✅");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong OTP ❌");
  }
}

// LOGIN CHECK (Protected Pages)
function requireLogin(){
  if(localStorage.getItem("kw_user") !== "loggedin"){
    window.location.href = "login.html";
  }
}

// LOGOUT
function logout(){
  localStorage.removeItem("kw_user");
  window.location.href = "login.html";
}

// SIMPLE NAV
function go(page){
  window.location.href = page;
}
