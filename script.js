// Celebration Confetti
// Counter Variable to keep track of counts such that it avoid the confetti for the firstclick
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
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });  
  }());