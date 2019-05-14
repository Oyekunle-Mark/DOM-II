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

  // reload the page when user double-clicks the logo;
  const logoHeading = document.querySelector('.logo-heading');
  logoHeading.addEventListener('mouseover', function () {
    this.style.cursor = 'pointer';
  });

  logoHeading.addEventListener('dblclick', () => {
    location.reload();
  });

  // bring the form into focus by clicking the buttons
  const signUpButton = document.querySelectorAll('.btn');
  signUpButton.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      document.querySelector(`.hidden-${i}`).classList.toggle('hidden');
    })
  })

  // change the input border to red on focus
  const input = document.querySelectorAll('input[type="text"]')
  input.forEach(item => {
    item.addEventListener('focus', function() {
      item.style.border = '2px solid red';
    })
  })

  // get the user input
  // let userInput = '';
  // input.forEach(item => {
  //   item.addEventListener('change', (event) => {
  //     userInput += event.target.value;
  //   })
  // })

  // hide form on submit
  const form = document.querySelectorAll('form');
  form.forEach((item, i) => {
    item.addEventListener('submit', () => {
      document.querySelector(`.hidden-${i}`).classList.toggle('hidden');
    })
  })
});
