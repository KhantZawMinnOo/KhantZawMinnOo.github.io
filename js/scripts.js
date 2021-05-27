window.addEventListener("scroll", yScroll);
var pagetop, menu, yPos;

function yScroll() {
  pagetop = document.querySelector('#pagetop');
  cv = document.querySelector('#cv');
  menu = document.querySelector('#menu');
  yPos = window.pageYOffset;
  if (yPos > 1 ) {
	document.getElementById("pp").style.opacity = "1";
	document.getElementById("o").style.opacity= "1";
	
	document.getElementById("ht").style.color = "#ffffff";
	document.getElementById("pagetop").style.backgroundImage = "url('images/hds.jpg')";
	pagetop.style.height = "17px";
    menu.style.height = "50px";
    pagetop.style.paddingTop = "60px";


	 } else {
    document.getElementById("ht").style.color = "transparent";
	document.getElementById("pagetop").style.backgroundImage = "url('images/cv.jpg')";
    document.getElementById("o").style.opacity= "o";
	
	document.getElementById("pp").style.opacity= "0";
	pagetop.style.height = "170px";
    menu.style.height = "50px";
    pagetop.style.paddingTop = "28px";
	  }
}
