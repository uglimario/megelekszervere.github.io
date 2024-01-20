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

window.onload = function () {
    // Simulate the loading time (you can replace this with your actual loading process)
    setTimeout(function () {
        // Hide the loading screen
        document.querySelector(".loading-screen").style.display = "none";
        
        // Show the main content
        document.querySelector(".main-content").style.display = "block";
    }, 3000); // Adjust the time as needed (in milliseconds)
};