// Form validation
// =================================================================
const FORM = document.getElementById('form');
const SENT = document.getElementById('sent');

FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const NAME = document.getElementById('name').value;
  const EMAIL = document.getElementById('email').value;
  const SUBJECT = document.getElementById('subject').value;
  const MESSAGE = document.getElementById('message').value;
  const ERROR = document.getElementById('error');

  if (!EMAIL.includes('@')) {
    ERROR.innerHTML = 'Please enter a valid email address';
    ERROR.style.display = 'block';
    return;
  }

  if (MESSAGE.length < 2) {
    ERROR.innerHTML = 'Message must be at least 2 characters long';
    ERROR.style.display = 'block';
    return;
  }
  const p = document.createElement('p');
  const h = document.createElement('h2');
  p.textContent = `Hello ${NAME}, thanks for your message I'll get back to you soon.`;
  h.textContent = 'Message Sent';
  SENT.appendChild(h);
  SENT.appendChild(p);
  FORM.reset();
 
});