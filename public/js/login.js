const wrapper_login = document.querySelector('.wrapper_login');
const login_link = document.querySelector('.login_link');
const register_link = document.querySelector('.register_link');
const btn_login = document.querySelector('.btn_login');
const icon_close = document.querySelector('.icon_close');
const login_overlay = document.querySelector('.login_overlay');

register_link.addEventListener('click', ()=> {
    wrapper_login.classList.add('active');
});

login_link.addEventListener('click', ()=> {
    wrapper_login.classList.remove('active');
});

btn_login.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper_login.classList.add('active_popup');
    login_overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

icon_close.addEventListener('click', ()=> {
    wrapper_login.classList.remove('active_popup');
    login_overlay.classList.remove('active');
    document.body.style.overflow = '';
});

login_overlay.addEventListener('click', () => {
    wrapper_login.classList.remove('active_popup');
    login_overlay.classList.remove('active');
    document.body.style.overflow = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrapper_login.classList.contains('active_popup')) {
        wrapper_login.classList.remove('active_popup');
        login_overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});