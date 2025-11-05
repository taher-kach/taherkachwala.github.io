/* Loader */
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  loader.classList.add("fade-out");
  document.body.classList.remove("preload");
  setTimeout(() => document.body.classList.add("loaded"), 600);
});

/* Mobile menu toggle */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

/* Theme toggle */
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});

/* Scroll reveal / simple scrollspy */
const revealNodes = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, {threshold: 0.18});
revealNodes.forEach(n => observer.observe(n));

/* Typing animation (home) */
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Taher Kachwala";
  const el = document.getElementById("typewriter");
  const introText = document.getElementById("intro-subtext");
  const introButtons = document.getElementById("intro-buttons");
  let i = 0;

  function typeNext() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeNext, 90);
    } else {
      // finish - add glow + reveal subtext/buttons
      el.classList.add("glow");
      el.style.borderRight = "0";
      // reveal subtext/buttons with small delay
      setTimeout(() => {
        introText.classList.remove("hidden");
        introButtons.classList.remove("hidden");
        // animate them via reveal classes:
        introText.classList.add("reveal","show");
        introButtons.classList.add("reveal","show");
      }, 420);
    }
  }

  // small delay to give loader time to fade
  setTimeout(typeNext, 700);
});

/* EmailJS initialization & form submission */
(function(){
  // Use your public key here
  try { emailjs.init("QRv3MCk-QXrWfU1g9"); } catch(e){ console.warn("EmailJS init failed", e); }
})();
const form = document.getElementById("contact-form");
if (form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    // send with stored IDs (service/template you provided)
    emailjs.sendForm("service_vo3krwu","template_5ckaucr", this)
      .then(() => {
        showToast("Message sent — thanks!");
        form.reset();
      })
      .catch(err => {
        console.error(err);
        showToast("Failed to send message. Try again later.");
      });
  });
}

/* Toast helper */
function showToast(text){
  const t = document.createElement("div");
  t.className = "success-toast";
  t.textContent = text;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3500);
}
