const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
const chk = document.getElementById('chk');


chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
 
    })


menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='));
}

const banner = document.getElementById('cookie-banner');
const button = document.getElementById('accept-btn');


window.onload = function() {
    document.getElementById('cookie-banner').classList.add('mostrar');
};

if (!getCookie('cookiesAceitos')) {
  banner.style.display = 'flex';
}

button.addEventListener('click', () => {
  setCookie('cookiesAceitos', 'sim', 365);
  banner.style.display = 'none';
});
