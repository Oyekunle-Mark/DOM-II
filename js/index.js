// Your code goes here
// fade and unfade the header image on mouseover and mouseout
const headerImage  = document.querySelector('.intro img');
headerImage.addEventListener('mouseover', function() {
  this.style.opacity = '0.7';
});

headerImage.addEventListener('mouseout', function() {
  this.style.opacity = '1';
});
