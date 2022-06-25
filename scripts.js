

var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
	if ((num = num.toString()).length > 9) return 'overflow';
	n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
	if (!n) return; var str = '';
	str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
	str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
	str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
	str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
	str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
	return str;
}


var locCaptcha = Math.floor(Math.random() * 100)
var locCaptcha2 = Math.floor(Math.random() * 100)
var OTP = Math.floor(Math.random() * 1000000)

var otpAttempts = 0;

function checkCaptcha() {

	var enterdCaptcha = document.getElementById("tb1").value;

	if (answer == enterdCaptcha) {
		alert("Captcha Matched...!");
		sessionStorage.setItem("OTP", OTP);
		console.log("Your otp for loan application is : " + OTP);
		document.getElementById("otpMsg").innerHTML = "OTP sent successfully....!";
		document.getElementById("btnSubmit").disabled = false;
	}
	else {
		alert("Captcha failed");
	}

}
var answer = 0;

function refreshCaptcha() {

	locCaptcha = Math.floor(Math.random() * 100)
	locCaptcha2 = Math.floor(Math.random() * 100)
	document.getElementById("captcha").innerHTML = locCaptcha;
	document.getElementById("captcha1").innerHTML = locCaptcha2;
	answer = locCaptcha + locCaptcha2;

}

function checkOtp() {

	if (otpAttempts < 2) {
		var enterdOTP = document.getElementById("tb2").value;
		var _OTP = sessionStorage.getItem("OTP");

		if (_OTP == enterdOTP) {
			alert("OTP verified successfully...! \n\n OTP  Verified");
			otpAttempts = 0;
		}
		else {
			alert("OTP failed...!, \n\n Please try again.");
			otpAttempts = otpAttempts + 1;
		}
	}
	else {
		alert("OTP attempts finished...!, \n\n Please try later.");
		window.location.href = "https://pixel6.co/404";
	}
	document.getElementById("attempt").innerHTML = otpAttempts;
}
function pratikFunction() {
	checkCaptcha();
}

function validateFN() {
	var name = document.getElementById("fname").value;

	if (name == null || name == "") {
		document.getElementById("inputTipFN").innerHTML = "Please enter First Name" ;
		document.getElementById("inputTipFN").style.color = "red" ;
		document.getElementById("fname").focus();
	}
	else{
		document.getElementById("inputTipFN").innerHTML = "Correct..!" ;
		document.getElementById("inputTipFN").style.color = "green" ;
	}
}
function validateLN() {
	var lname = document.getElementById("lname").value;

	if (lname == null || lname == "") {
		document.getElementById("inputTipLN").innerHTML = "Please enter Last Name" ;
		document.getElementById("inputTipLN").style.color = "red" ;
		document.getElementById("lname").focus();
	}
	else{
		document.getElementById("inputTipLN").innerHTML = "Correct..!" ;
		document.getElementById("inputTipLN").style.color = "green" ;
	}
}

function validateEmail() {
	var email = document.getElementById("email").value;
	var regEmail = /\S+@\S+\.\S+/;

	if (!regEmail.test(email)) {
		document.getElementById("inputTipEmail").innerHTML = "Please enter valid Email";
		document.getElementById("inputTipEmail").style.color = "red" ;
		document.getElementById("email").focus();
	}
	else if (email == null || email == "") {
		
		document.getElementById("inputTipEmail").innerHTML = "Please enter valid Email";
		document.getElementById("inputTipEmail").style.color = "red" ;
		document.getElementById("email").focus();
	}
	else  {
		document.getElementById("inputTipEmail").innerHTML = "Correct..!" ;
		document.getElementById("inputTipEmail").style.color = "green" ;
	}
}

function validatePan() {
	var pan = document.getElementById("pan").value;
	var regPan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

	if (!regPan.test(pan)) {
		document.getElementById("inputTipPan").innerHTML = "Please enter valid Pan";		
		document.getElementById("inputTipPan").style.color = "red" ;
		document.getElementById("pan").focus();
	}
	else if (pan == null || pan == "") {
		
		document.getElementById("inputTipPan").innerHTML = "Please enter valid Pan";
		document.getElementById("inputTipPan").style.color = "red" ;
		
		document.getElementById("pan").focus();
	}
	else  {
		document.getElementById("inputTipPan").innerHTML = "Correct..!" ;
		document.getElementById("inputTipPan").style.color = "green" ;
	}
}
function validateNumber() {
	var number = document.getElementById("number").value;

	if (number == null || number == "") {
		document.getElementById("inputTipAmount").innerHTML = "Please enter Loan Amount" ;
		document.getElementById("inputTipAmount").style.color = "red" ;
		document.getElementById("number").focus();
	}
	else{
		document.getElementById("inputTipAmount").innerHTML =  "Correct..!" ;
		document.getElementById("inputTipAmount").style.color = "green" ;
	}
}

function submitMyForm() {
	
		sessionStorage.setItem("Name", name);  //session obejct for storing data to access on diff pages.
		sessionStorage.setItem("Email", email);
		window.location.href = "thanks.html";
	
}




function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

