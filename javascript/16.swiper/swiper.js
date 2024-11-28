createSwiper();

function createSwiper() {
    let output=`
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381226589_727.jpg" alt=""></div>
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231560_727.jpg" alt=""></div>
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231559_727.jpg" alt=""></div>
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381226589_727.jpg" alt=""></div>
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231560_727.jpg" alt=""></div>
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231559_727.jpg" alt=""></div>
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381226589_727.jpg" alt=""></div>
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231560_727.jpg" alt=""></div>
            <div class="swiper-slide"><img
                    src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231559_727.jpg" alt=""></div>

        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
`;
    document.querySelector(".swiper").innerHTML = output;




    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        slidesPerView: 2,
        autoplay:{delay:1000,disableOnInteraction:false},
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}