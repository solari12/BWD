let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})
const blogs = document.getElementById('blogs');
const gallery = document.getElementById('gallery');
const services = document.getElementById('services');
const destination = document.getElementById('destination');
const header = document.querySelector('header');
const book = document.getElementById('book-form');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const about = document.getElementById('about');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('active');
    book.classList.toggle('active');
    about.classList.toggle('active');
    destination.classList.toggle('active');
    services.classList.toggle('active');
    gallery.classList.toggle('active');
    blogs.classList.toggle('active');
}