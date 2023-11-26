import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../components/swiper.scss"

export const Special = () => {
  return (
    <section className="flat-row flat-slider " style={{marginBottom:"20px",padding:"2rem 5rem"}}>
      <div className="slider">
        <div className="slider-item ">

          <Swiper className="mySwiper"
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            spaceBetween={50}
            slidesPerView={1}
            pagination={true}
          >
            <SwiperSlide className='Swiperslide'>
              <img src="/images/m1.jpg" />
            </SwiperSlide>
            <SwiperSlide className='Swiperslide'>

              <img src="/images/m2.jpg"   />
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </section>

  )
}

