// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent successfully!");
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email.toLowerCase());
  }

  // Typed.js effect for the Home section
  const typed = new Typed("#typed-text", {
    strings: ["An Aspiring Data Scientist", "A Tech Enthusiast", "A Problem Solver"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });

  // Reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // optional: animate only once
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});
// Extracurriculars Carousel Logic
let currentEvent = 0;
const eventCards = document.querySelectorAll(".event-card");
const totalEvents = eventCards.length;

function showEvent(index, direction = "right") {
  eventCards[currentEvent].classList.remove("active");

  if (direction === "left") {
    eventCards[currentEvent].classList.add("exit-right");
  } else {
    eventCards[currentEvent].classList.add("exit-left");
  }

  setTimeout(() => {
    eventCards[currentEvent].classList.remove("exit-left", "exit-right");
    currentEvent = index;
    eventCards[currentEvent].classList.add("active");
  }, 300);
}

document.getElementById("nextEvent").addEventListener("click", () => {
  const nextIndex = (currentEvent + 1) % totalEvents;
  showEvent(nextIndex, "right");
});

document.getElementById("prevEvent").addEventListener("click", () => {
  const prevIndex = (currentEvent - 1 + totalEvents) % totalEvents;
  showEvent(prevIndex, "left");
});
});
