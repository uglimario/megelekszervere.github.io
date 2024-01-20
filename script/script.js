var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
var originalImageSrc = menu.src;  // Elmentjük az eredeti kép elérési útját
var more = document.getElementById("more")

var discord = document.getElementById("discord")
var discordInviteLink = "https://discord.gg/TagamfGeXU";
var discord2 = document.getElementById("discord2")
var discordInviteLink2 = "https://discord.gg/TagamfGeXU";
var discord3 = document.getElementById("discord3")
var discordInviteLink3 = "https://discord.gg/TagamfGeXU";

var twitter = document.getElementById("twitter")
var twitterprofilelink = "https://x.com/MegelekSzervere?s=20";

var spotify = document.getElementById("spotify")
var spotifylistlink = "https://open.spotify.com/playlist/27ol2TNKECEoiF1H80RqSx?si=7e2bd0c21b5a4444";

var facebook = document.getElementById("facebook")
var facebookprofilelink = "https://www.facebook.com/profile.php?id=61555722033765";

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

discord.onclick = function(){
    window.open(discordInviteLink, '_blank')
    }
discord2.onclick = function(){
    window.open(discordInviteLink2, '_blank')
    }
discord3.onclick = function(){
    window.open(discordInviteLink3, '_blank')
    }

twitter.onclick = function(){
    window.open(twitterprofilelink, '_blank')
    }

spotify.onclick = function(){
    window.open(spotifylistlink, '_blank')
    }

facebook.onclick = function(){
    window.open(facebookprofilelink, '_blank')
    }

    var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true
});
   
//           if (menu.src === originalImageSrc) {
        // Ha az eredeti kép van jelen, cseréljük le
//              menu.src = "images/menu icon jo.png";  // Írd át az "új_kép_elérési_útja.jpg"-t a kívánt kép elérési útjára
//          } else {
        // Ha már a második kép van jelen, állítsuk vissza az eredetit
//             menu.src = originalImageSrc;
//         }
}
  