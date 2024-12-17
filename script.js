$('.toggle-menu').click(function(){
    $(this).toggleClass('active');
    $('#menu-hamburguer').toggleClass('open');
});

let index = 0;

function moveSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    index = (index + direction + totalImages) % totalImages;

    const newTransformValue = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}