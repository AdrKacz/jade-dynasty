function initializeSwiper(swiper) {
    const id = swiper.dataset.id
    
    new Swiper(`.swiper-container[data-id='${id}']`, {
        loop: true,
        pagination: {
            el: `.swiper-container[data-id='${id}'] .swiper-pagination` ,
            clickable: true
        },
        paginationClickable: true,
        navigation: {
            nextEl: `.swiper-container[data-id='${id}'] .swiper-button-next`,
            prevEl: `.swiper-container[data-id='${id}'] .swiper-button-prev`
        }
    })
}

// Initializing the swiper plugin for the sliders
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.swiper-container')
    
    sliders.forEach(initializeSwiper)
})