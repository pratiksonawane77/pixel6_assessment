
		
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
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


	var locCaptcha = Math.floor(Math.random() *1000000)
	var OTP = Math.floor(Math.random() *1000000)
	
	var otpAttempts = 0;
 
	function checkCaptcha(){
 
		var enterdCaptcha = document.getElementById("tb1").value;
		
		if(locCaptcha == enterdCaptcha)
		{
			alert("Captcha Matched...!");
			sessionStorage.setItem("OTP",OTP); 
			console.log("Your otp for loan application is : "+OTP);
			document.getElementById("otpMsg").innerHTML = "OTP sent successfully....!";
		}
		else
		{
			alert("Captcha failed");
		}
	
	}
	
	function refreshCaptcha()
	{
		locCaptcha = Math.floor(Math.random() *1000000)

		document.getElementById("captcha").innerHTML = locCaptcha;
	}
	
	function checkOtp(){
 
		if(otpAttempts < 2){
			var enterdOTP = document.getElementById("tb2").value;
			var _OTP = sessionStorage.getItem("OTP"); 
			
			if(_OTP == enterdOTP)
			{
				alert("OTP verified successfully...! \n\n OTP  Verified");
				otpAttempts = 0;
			}
			else
			{
				alert("OTP failed...!, \n\n Please try again.");
				 otpAttempts = otpAttempts + 1;
			}
		}
		else{
			alert("OTP attempts finished...!, \n\n Please try later.");
			window.location.href = "https://pixel6.co/404";
		}
		document.getElementById("attempt").innerHTML = otpAttempts; 
	}
	function pratikFunction()
	{
			checkCaptcha();
			
		
	}
	
	function submitMyForm()
	{
		var name = document.getElementById("fname").value;
		var email = document.getElementById("email").value;
		
		sessionStorage.setItem("Name",name);  //session obejct for storing data to access on diff pages.
		sessionStorage.setItem("Email",email);  
		
		window.location.href = "thanks.html";
	}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
	
	