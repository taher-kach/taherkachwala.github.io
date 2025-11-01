// Smooth scroll + theme toggle + form validation
const links = document.querySelectorAll('.nav-links a');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

document.getElementById('year').textContent = new Date().getFullYear();

// Form validation
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  alert(`Thank you ${name}, your message has been submitted!`);
  e.target.reset();
});
