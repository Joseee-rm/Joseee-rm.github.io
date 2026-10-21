/* EDIT THESE PLACEHOLDERS BEFORE PUBLISHING */
const profile = {
  email: 'your.email@example.com',
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR_PROFILE/',
  pawmatch: 'https://github.com/YOUR_USERNAME/YOUR_PAWMATCH_REPO',
  bantay: 'https://github.com/YOUR_USERNAME/YOUR_BANTAY_REPO'
};
function setLinks(selector, url) {
  document.querySelectorAll(selector).forEach(a => {
    a.href = url;
    if (url.includes('YOUR_')) { a.addEventListener('click', ev => { ev.preventDefault(); alert('Update this link in script.js before publishing.'); }); }
  });
}
setLinks('[data-github]', profile.github);
setLinks('[data-linkedin]', profile.linkedin);
setLinks('[data-pawmatch]', profile.pawmatch);
setLinks('[data-bantay]', profile.bantay);
setLinks('[data-email]', 'mailto:' + profile.email);
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');
menu.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
