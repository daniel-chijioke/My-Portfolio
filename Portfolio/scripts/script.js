// Scroll reveal
const revEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.sc-fill').forEach(b => b.classList.add('go'));
      io.unobserve(entry.target);
    }
  });
},{threshold:0.1});
revEls.forEach(el => io.observe(el));

// trigger skill bars already in view
setTimeout(() => {
  document.querySelectorAll('.sc-fill').forEach(b => b.classList.add('go'));
}, 700);

// Nav active
const secs = document.querySelectorAll('section[id]');
const nas = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if(window.scrollY >= s.offsetTop - 90) cur = s.id; });
  nas.forEach(a => {
    if(!a.classList.contains('nav-hire'))
      a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--orange)' : '';
  });
});

// Form
function handleSubmit(e){
  e.preventDefault();
  const btn = document.getElementById('fsub');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#1a7a4a';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3500);
}