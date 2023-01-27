// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
if (dropdowns.length) {
  // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
  // Instead use event delegation: https://javascript.info/event-delegation
  // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
  // But since we only have two dropdowns, no problem with that. 
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      let target = document.querySelector(`#${event.target.dataset.dropdown}`)

      if (target) {
        if (target.classList.contains('show')) {
          target.classList.remove('show')
          dropdownIsOpen = false
        } else {
          target.classList.add('show')
          dropdownIsOpen = true
        }
      }
    })
  })
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
      let targetIsDropdown = dropdown == event.target

      if (dropdownButton == event.target) {
        return
      }

      if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
        dropdown.classList.remove('show')
      }
    })
  }
})

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler')
    .addEventListener('click', () => {
      let navbarMenu = document.querySelector('.navbar-menu')

      if (!navbarMenu.classList.contains('active')) {
        navbarMenu.classList.add('active')
      } else {
        navbarMenu.classList.remove('active')
      }
    })
}

handleSmallScreens()



var navbar = document.getElementById("mynav");

// Listen for the scroll event on the window
window.addEventListener("scroll", function() {
  // Get the current scroll position
  var scrollPos = window.pageYOffset;

  // Add the "scrolled" class to the navbar element when the user has scrolled more than 50px
  if (scrollPos > 50) {
    navbar.classList.add("navscroll");
  } else {
    navbar.classList.remove("navscroll");
  }
});

gsap.fromTo(".tween", {stagger: 0.9, y:18,  yoyo: true}, {x:18 ,   repeat:-1,  duration:1.2, yoyo: true});

gsap.to(".tweena" , {stagger: 0.5, y:18, fill:"yellow",  duration:0.8, repeat:-1, yoyo: true});


gsap.to(".image-stack", {y:-6, repeat:-1, duration:1,  yoyo: true, stagger:{
    amount:1.2, from:"edges", ease:"bounce"
  }})




  ScrollReveal().reveal('.columntwo',{
    delay: 35,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "bottom",
    easing     : 'ease-out',
    reset: false
  });

  ScrollReveal().reveal('.image-stack__item--top',{
    delay: 125,
    duration: 1300,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
  });

  ScrollReveal().reveal('.image-stack__item--bottom',{
    delay: 105,
    duration: 1300,
    opacity: 0,
    distance: "50%",
    origin: "left",
    reset: false
  });

  ScrollReveal().reveal('.columnone',{
    delay: 75,
    duration: 1400,
    opacity: 0,
    distance: "50%",
    origin: "left",
    easing     : 'ease-in',
    reset: false
  });


  ScrollReveal().reveal('.bwti',{
    delay: 195,
    duration: 1900,
    opacity: 0,
    distance: "50%",
    origin: "bottom",
    reset: false
  });


  ScrollReveal().reveal('.bx1',{
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "60%",
    easing     : 'ease-out',
    origin: "bottom",
    reset: false
  });

  ScrollReveal().reveal('.bx2',{
    delay: 105,
    duration: 1500,
    opacity: 0,
    distance: "80%",
    origin: "bottom",
    easing     : 'ease-out',
    reset: false
  });

  ScrollReveal().reveal('.bx3',{
    delay: 155,
    duration: 1500,
    opacity: 0,
    distance: "80%",
    origin: "bottom",
    easing     : 'ease-out',
    reset: false
  });

  ScrollReveal().reveal('.bx4',{
    delay: 195,
    duration: 1500,
    opacity: 0,
    distance: "80%",
    origin: "bottom",
    easing     : 'ease-out',
    reset: false
  });


  
  ScrollReveal().reveal('.svgside',{
    delay: 55,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
  });


  ScrollReveal().reveal('.sidea',{
    delay: 65,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
  });
  

  ScrollReveal().reveal('.sideb',{
    delay: 75,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "bottom",
    reset: false
  });

  ScrollReveal().reveal('.sidec',{
    delay: 75,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "bottom",
    reset: false
  });
  
  

  ScrollReveal().reveal('.accessone',{
    delay: 35,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
  });

  ScrollReveal().reveal('.accesstwo',{
    delay: 95,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "bottom",
    reset: false
  });

  ScrollReveal().reveal('.bigtxt',{
    delay: 35,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "left",
    reset: false
  });

  ScrollReveal().reveal('.interesttext',{
    delay: 195,
    duration: 2600,
    opacity: 0,
    distance: "50%",
    origin: "left",
    reset: false
  });
  

  

  
