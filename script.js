// Disable text selection
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Disable copy action
document.addEventListener('copy', function(e) {
  e.preventDefault();
});

// Throws Warning I the Website is opened in the mobile phones without desktop mode
if (screen.width < 768) {
  alert("Please switch to desktop mode for optimal viewing experience.");
}

// Celebration Confetti
// Counter Variable to keep track of counts such that it avoid the confetti for the firstclick
console.log("Confetti Effect will start working only if the mouse is clicked.");
console.log("It will not work for the first click");
var clickcount = 0;
  window.addEventListener("click", confettiClick);

function confettiClick(e) {
  clickcount++;
  if(clickcount > 1)	
  {
    let wp = e.x / window.innerWidth; // clicked width in percent
    let hp = e.y / window.innerHeight; // clicked height in percent

    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: wp,
        y: hp
      }
    });
  }
}

//  Card Open

(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        timer = null;
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });  
  }());