//Pesquisa
let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container');

//Modal
let formBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.logo-form-container');
let formClosed = document.querySelector('#form-close')

//Nav media
const menu = document.querySelector('#menu-bar')
const navbar = document.querySelector('.navbar')

//Video
const videBtn = document.querySelectorAll('.vid-btn')

//Remover classe com o mivimento com scroll
window.onscroll = () => {
  searchBtn.classList.remove('fa-times')
  searchBar.classList.remove('active')
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
  loginForm.classList.remove('active')
};

//Nav media
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
})

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times')
  searchBar.classList.toggle('active')
});

//Modal Start
//Modal open
formBtn.addEventListener('click', () => {
  loginForm.classList.add('active')
})
//Modal closed
formClosed.addEventListener('click', () => {
  loginForm.classList.remove('active')
})
//Modal ends

//Video background
videBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active')
    let src = btn.getAttribute('data-src')
    document.querySelector('#video-slider').src = src
  })
})