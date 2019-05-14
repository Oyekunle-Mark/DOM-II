// Your code goes here
window.addEventListener("load", function() {
  // transform and slightly fade the image on mouseover and mouseout
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("mouseover", function() {
      this.style.opacity = "0.9";
      this.classList.add("animate");
    });

    img.addEventListener("mouseout", function() {
      this.style.opacity = "1";
    });
  });

  // log the position of the mouse to the screeen
  document.body.addEventListener("mousemove", event => {
    document.querySelector(".position").textContent = `${event.clientX}, ${
      event.clientY
    }`;
  });

  // turn the paragraph red when user copies text from it
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(tag => {
    tag.addEventListener("copy", function() {
      this.style.color = "red";
    });
  });

  // reload the page when user double-clicks the logo;
  const logoHeading = document.querySelector(".logo-heading");
  logoHeading.addEventListener("mouseover", function() {
    this.style.cursor = "pointer";
  });

  logoHeading.addEventListener("dblclick", () => {
    location.reload();
  });

  // bring the form into focus by clicking the buttons
  const signUpButton = document.querySelectorAll(".btn");
  signUpButton.forEach((btn, i) => {
    btn.addEventListener("click", event => {
      document.querySelector(`.hidden-${i}`).classList.toggle("hidden");
      event.stopPropagation();
    });
  });

  // change the input border to red on focus
  const input = document.querySelectorAll('input[type="text"]');
  input.forEach(item => {
    item.addEventListener("focus", function() {
      item.style.border = "2px solid red";
    });
  });

  // hide form on submit
  const form = document.querySelectorAll("form");
  form.forEach((item, i) => {
    item.addEventListener("submit", () => {
      document.querySelector(`.hidden-${i}`).classList.toggle("hidden");
    });
  });

  // prevent the nav items from refreshing the page
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });

  // add the click event to the destination section to create a nested clicks event
  const destinationSection = document.querySelectorAll(".destination");
  destinationSection.forEach(section => {
    section.addEventListener("click", () => {
      location.reload();
    });
  });
});
