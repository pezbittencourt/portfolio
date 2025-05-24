const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => { 
    navLinks.classList.toggle('active');
}


if (localStorage.lgpd == 'sim') {
    msgCookies.classList.remove('mostrar');
}

else {
    msgCookies.classList.add('mostrar');
}

const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});