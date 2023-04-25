/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
// Product page JS

// Get the product data from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('image');
const productDescription = urlParams.get('description');

// Set the product data in the HTML elements
document.getElementById('product-name').textContent = productName;
document.getElementById('product-price').textContent = `$${productPrice}`;
document.getElementById('product-image').src = productImage;
document.getElementById('product-description').textContent = productDescription;

// Handle click events on the "Add to Cart" button
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
  // Replace with your own code to add the product to the cart
  alert('Product added to cart!');
});


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

// function openProduct() {
//     window.open("product-page.html", "_blank");
// }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== CHANGE BACKGROUND HEADER ===============*/
let swiperTestimonals = new Swiper(".contact-container" , {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
        1024: {
            spaceBetween: 72,
        },
    },
});