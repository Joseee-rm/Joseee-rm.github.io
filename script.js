/** EDIT ONLY THE VALUES BELOW. Leave blank if you do not yet have the link. */
const profile = {
  email: 'josemanalo0206@gmail.com',
  github: 'https://github.com/Joseee-rm',
  linkedin: 'https://www.linkedin.com/in/jose-manalo-cdsa-a78310340',
  pawmatch: '',
  bantay: ''
};

function connect(selector, url, fallback = '') {
  document.querySelectorAll(selector).forEach((link) => {
    if (url && /^https:\/\//.test(url)) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else if (url && url.startsWith('mailto:')) {
      link.href = url;
    } else {
      // Avoid broken placeholder links when you haven't supplied your details yet.
      const note = document.createElement('span');
      note.className = 'unavailable-link';
      note.textContent = fallback;
      note.setAttribute('aria-label', fallback);
      link.replaceWith(note);
    }
  });
}
connect('[data-github]', profile.github, 'GitHub link coming soon');
connect('[data-linkedin]', profile.linkedin, 'LinkedIn link coming soon');
connect('[data-pawmatch]', profile.pawmatch, 'Repository coming soon');
connect('[data-bantay]', profile.bantay, 'Project details coming soon');
connect('[data-email]', profile.email ? 'mailto:' + profile.email : '', 'Email available on request');

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-toggle');
const links = document.getElementById('nav-links');
if (menu && links) {
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}
