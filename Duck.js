var typed = new Typed('#header', {
    strings: ['<h2><b>Come help us ... <br> so that we can deliver the <span class="headerspan">duck</span> home safely </b> </h2>'],
    typeSpeed: 55,
  });
  let duck = document.querySelector(".duck") ; 
  let Continue = document.getElementById("Continue") ; 
  
  Continue.addEventListener("mouseenter" , function() {
      duck.style.left = "73%"
  })
    Continue.addEventListener("mouseleave" , function() {
      duck.style.left = "10%" 
  })