var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
var originalImageSrc = menu.src;  // Elmentjük az eredeti kép elérési útját
var more = document.getElementById("more")

sideNav.style.right = "-250px";

menubtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "images/x blac.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "images/menu icon white.png"
    }
}
more.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "images/x blac.png";
    }
   
//           if (menu.src === originalImageSrc) {
        // Ha az eredeti kép van jelen, cseréljük le
//              menu.src = "images/menu icon jo.png";  // Írd át az "új_kép_elérési_útja.jpg"-t a kívánt kép elérési útjára
//          } else {
        // Ha már a második kép van jelen, állítsuk vissza az eredetit
//             menu.src = originalImageSrc;
//         }
}
  