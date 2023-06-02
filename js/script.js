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
const footer = document.getElementById('footer')
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
    footer.classList.toggle('active');
}


// slick slider

/*
<div class="lightbox">
<div class="box" data-aos="fade-up" data-aos-delay="150">
<div class="image">
    <img src="img/des1.jpg" alt="">
</div>
<div class="evaluate">
    <ul>
        <li><div class="point">8.9</div></li>
        <li>Tuyệt vời</li>
        <li>|</li>
        <li>26 đánh giá</li>
    </ul>
</div>
<div class="content">
    <h3>Hồ Hoàn Kiếm</h3>
    <p>Tour Hà Nội 4N2D :Hà Nội - Hạ Long - Yên Tử - Ninh Bình - Bái Đính - Tràng An</p>
    <!-- <a href="#">read more <i class="fas fa-angle-right"></i></a> -->
</div>
<div class="unit-price">
    <div>8 khách đã đặt trong 24h qua</div>
    <div class="price">8,390,000đ</div>
</div>
</div>

</div>*/


var destinationElement = document.querySelector('.destination');
var boxContainerElement = destinationElement.querySelector('.box-container');
var boxElements = boxContainerElement.querySelectorAll('.box');
var boxContentList = [];

boxElements.forEach(function(boxElement) {
  var boxContent = boxElement.innerHTML;
  boxContentList.push(boxContent);
  console.log(boxContent);
});

const items = document.querySelectorAll('.destination .box-container .box');
let lightboxContainer = null;
let currentIndex = -1;

items.forEach((item, index) => {
  const images = item.querySelectorAll('.image img');
  images.forEach(img => img.addEventListener("click", () => handleZoomImage(index)));
});

function handleZoomImage(index) {
  currentIndex = index;
  const boxContent = boxContentList[index];

  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
      <div class="container">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <div class="book">
      <a href="#" class="logo"> <i class="fas fa-paper-plane"></i>TravelS </a>
      <div class="form-field">
    <input type="text" class="form-input" placeholder=" ">
    <label for="name" class="form-label">Họ và tên</label>
    </div>
      <div class="form-field">
    <input type="number" class="form-input" placeholder=" ">
    <label for="name" class="form-label">Số người</label>
    </div>
      <div class="form-field">
    <input type="text" class="form-input" placeholder=" ">
    <label for="name" class="form-label">Số điện thoại</label>
    </div>
    <div class="form-field" >
    <input type="date" class="form-input" id="n">
    </div>
    <div class="form-field">
    <input type="email" class="form-input" placeholder=" ">
    <label for="name" class="form-label">Email</label>
    </div>
    <button>Book now</button>
</div>
      <div class="box" data-aos="fade" data-aos-delay="150">
      ${boxContent}
      </div>
      <i class="fa fa-angle-right lightbox-next"></i>
      
    </div>
  `;

  if (lightboxContainer) {
    lightboxContainer.innerHTML = '';
    lightboxContainer.appendChild(lightbox);
  } else {
    lightboxContainer = document.createElement('div');
    lightboxContainer.classList.add('lightbox-container');
    lightboxContainer.appendChild(lightbox);
    document.body.appendChild(lightboxContainer);
  }
}

document.body.addEventListener("click", function (e) {
  if (e.target.matches(".lightbox")) {
    lightboxContainer.remove();
    lightboxContainer = null;
    currentIndex = -1;
  } else if (e.target.matches(".lightbox-next")) {
    currentIndex = (currentIndex + 1) % items.length;
    handleZoomImage(currentIndex);
  } else if (e.target.matches(".lightbox-prev")) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    handleZoomImage(currentIndex);
  }
});

