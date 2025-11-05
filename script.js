// ✅ Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
    document.body.classList.add("loaded");
  }, 700);
});

// ✅ Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));

// ✅ Active Nav Links
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.id;
  });
  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) a.classList.add("active");
  });
});

// ✅ Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add('show');
    else el.classList.remove('show');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ✅ Typing Animation with Glow
document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById("typewriter");
  const introSubtext = document.getElementById("intro-subtext");
  const introButtons = document.getElementById("intro-buttons");
  const text = "Hi, I'm Taher Kachwala";
  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      typewriter.classList.add("glow");
      typewriter.style.borderRight = "none";
      setTimeout(() => {
        introSubtext.style.display = "block";
        introButtons.style.display = "flex";
        introSubtext.classList.add("fade-in", "show");
        introButtons.classList.add("fade-in", "show");
      }, 500);
    }
  }
  setTimeout(type, 900);
});

// ✅ Dark/Light Mode
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});

// ✅ EmailJS
(function() {
  emailjs.init("QRv3MCk-QXrWfU1g9");
})();
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_vo3krwu", "template_5ckaucr", this)
    .then(() => {
      const toast = document.createElement("div");
      toast.className = "success-toast";
      toast.textContent = "Message sent successfully!";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3500);
      contactForm.reset();
    }, (error) => {
      alert("Error: " + JSON.stringify(error));
    });
});
