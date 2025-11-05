// ✅ Loader
window.addEventListener("load", () => {
  document.getElementById("page-loader").classList.add("fade-out");
  document.body.classList.add("loaded");
});

// ✅ Typing Animation
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
      introSubtext.classList.remove("hidden");
      introButtons.classList.remove("hidden");
      introSubtext.classList.add("fade-in");
      introButtons.classList.add("fade-in");
    }
  }
  setTimeout(type, 1000);
});

// ✅ Dark/Light Mode
document.getElementById("theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  document.getElementById("theme-btn").textContent =
    document.body.classList.contains("dark") ? "🌙" : "☀️";
});
