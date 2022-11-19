let menu = document.querySelector('#menu_btn');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  navbar.classList.toggle('active')
};
document.querySelectorAll('.control-btn').forEach(btn => {
  btn.onclick = () => {
    let src = btn.getAttribute('date-src');
    document.querySelector('.video').src = src;
  }
})