// Your code goes here
window.addEventListener("DOMContentLoaded", function() {
  // fade and unfade the header image on mouseover and mouseout
  const headerImage = document.querySelector(".intro img");
  headerImage.addEventListener("mouseover", function() {
    this.style.opacity = "0.7";
  });

  headerImage.addEventListener("mouseout", function() {
    this.style.opacity = "1";
  });

  // log the position of the mouse to the screeen
  document.body.addEventListener("mousemove", event => {
    document.querySelector(".position").textContent = `${event.clientX}, ${
      event.clientY
    }`;
  });

  // turn the paragraph red when user copies text from it
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(tag => {
    tag.addEventListener('copy', function() {
      this.style.color = 'red';
    })
  })

  // reload the page when user clicks the logo;
  const logoHeading = document.querySelector('.logo-heading');
  logoHeading.addEventListener('mouseover', function () {
    this.style.cursor = 'pointer';
  });

  logoHeading.addEventListener('click', () => {
    location.reload();
  });

  logoHeading.addEventListener('focus', () => console.log('focussing'))
});
