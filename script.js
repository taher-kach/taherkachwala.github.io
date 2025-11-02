// Page loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
    document.body.classList.add("loaded");
  }, 700);
});

// Typing animation
const typingText = document.getElementById('typing-text');
const rawHTML = typingText.innerHTML;
typingText.innerHTML = '';
let i = 0;
function type() {
  const temp = document.createElement('div');
  temp.innerHTML = rawHTML.slice(0, i + 1);
  typingText.innerHTML = temp.innerHTML;
  i++;
  if (i < rawHTML.length) requestAnimationFrame(type);
}
type();

// Fade-in scroll animation
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });
faders.forEach(el => observer.observe(el));

// Gallery modal
const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('modal-img');
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});
document.getElementById('modal-close').addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

// EmailJS setup
emailjs.init("QRv3MCk-QXrWfU1g9");
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) return showToast('⚠️ Please fill all fields.');
  if (!/^\S+@\S+\.\S+$/.test(email)) return showToast('⚠️ Invalid email address.');

  emailjs.send('service_vo3krwu', 'template_5ckaucr', { from_name: name, from_email: email, message })
    .then(() => { showToast('✅ Message sent successfully!'); e.target.reset(); })
    .catch(() => showToast('❌ Failed to send message. Try again later.'));
});

// Toast message
function showToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.className = 'success-toast';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();
