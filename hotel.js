
const navbar = document.querySelector('.navbar');
const about = document.querySelector('.picture');
const room1 = document.querySelector('.room1');
const room2 = document.querySelector('.room2');
window.onscroll = () => {
  
    if (window.scrollY > 700) {
        navbar.classList.add('navbarb');
       
    } else {
        navbar.classList.remove('navbarb');
       
    }

    if (window.scrollY > 300 ) {
        about.classList.add('about1');
        
    } else {
        about.classList.remove('about1');
      
    }
    if (window.scrollY > 1000) {
        room1.classList.add('room1');
        
    } else {
        room1.classList.remove('room1');
      
    }
    if (window.scrollY > 1200) {
        room2.classList.add('room2');
        
    } else {
        room2.classList.remove('room2');
      
    }
};

