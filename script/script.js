// Add Dark Background Color to Navbar on Page Scroll
const header = document.querySelector(".navbar");
 
window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    header.classList.add("bg-dark");
     
  } else {
    header.classList.remove("bg-dark");
  }
};
