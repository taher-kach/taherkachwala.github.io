// ✅ Loader Fade-Out
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
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ✅ Active Nav Link Highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) a.classList.add("active");
  });
});

// ✅ Scroll Reveal Animation
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

// ✅ EmailJS Integration
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
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
