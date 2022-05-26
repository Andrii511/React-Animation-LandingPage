import React, { useEffect, useState } from "react";
// Core modules imports are same as usual
import SwiperCore, { Autoplay, Pagination } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
// import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
import "../styles/NftsSlider.scss";
SwiperCore.use([Autoplay, Pagination]);
export default function Slider() {
  const [perView, setPerView] = useState(5);
  useEffect(() => {
    const width = window.innerWidth;

    width < 1024 && setPerView(3);
    width < 768 && setPerView(1.5);
  }, []);
  return (
    <div className="NFTSlider w-full relative overflow-x-hidden bg-black py-5 lg:py-10 xl:py-20">
      <Swiper
        pagination={{ clickable: true }}
        // autoplay={{ delay: 2500 }}
        initialSlide={4}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={perView}
        loop={true}
        className="mySwiper"
        slideToClickedSlide={true}
      >
        <SwiperSlide>
          <img src="/assets/1.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/3.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/4.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/5.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/2.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/6.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/7.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/8.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/9.jpg" alt="NFT Token example" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/10.jpg" alt="NFT Token example" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
