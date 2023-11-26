import React, { useEffect, useState } from "react";
import { PRODUCT_IMAGE_PATH, SLIDER_IMAGE_PATH } from "../config";
import "./home.css";
import "./swiper.scss"
import FormatCurrency from "./FormatCurrency"
import "../index.css"
import img1 from "../assets/ands.jpeg"
import img2 from "../assets/global.png"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';


// import required modules
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import { Special } from "./Special";


export const HomeBody = ({ data }) => {

  const [Data, setdata] = useState(data.slider);
  const [cat, setCat] = useState();

  useEffect(() => {
    if (data?.categories && data?.categories?.length > 3) {
      setCat(data.categories[3]);
    }
  }, [data])

  const catProducts = data.products?.filter((product) => product.categories && product.categories.map(c => c.id).includes(cat?.id))

  return (
    <>
      <section className="flat-row flat-slider ">
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
              style={{width:"100%"}}
            >
              {Data?.map((curElem, index) => {
               
                return (
                  <>
                    <SwiperSlide key={curElem.id} className='Swiperslide'>
                      <img src={SLIDER_IMAGE_PATH + curElem.image} loading="lazy" alt="loadimage" />
                      <div>

                        {/* <h3 className='bottom' >
                          {curElem.title}
                        </h3> */}
                      </div>
                    </SwiperSlide>
                  </>

                )
              })}
            </Swiper>

          </div>
        </div>
      </section>

      <section className="container flatcheck ">
        <div className="  border-2 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center">

          <div className=" row feat border-b-4" >
            <div className="col-md-3">
              <img src="/images/icons/plane.png" />
            </div>
            <div className="col-md-9">
              <h3>Fast Service</h3>
              <p>Good Customer Service</p>
            </div>
          </div>

          <div className=" row feat border-b-4">
            <div className="col-md-3">
              <img src="/images/icons/ret.png" />
            </div>
            <div className="col-md-9">
              <h3>Easy 30 Day Return</h3>
              <p>Back Returns in 7 Days </p>
            </div>
          </div>

          <div className="row feat border-b-4">
            <div className="col-md-3">
              <img src="/images/icons/pay.png" />
            </div>
            <div className="col-md-9">
              <h3>Payment</h3>
              <p>Secure System</p>
            </div>
          </div>

          <div className=" row feat feat-last border-b-4">
            <div className="col-md-3">
              <img src="/images/icons/sup.png" />
            </div>
            <div className="col-md-9">
              <h3>Easy Online Support</h3>
              <p>Any Time Support</p>
            </div>
          </div>

        </div>
      </section>

      <section className="flat-row flat-banner-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-box one-half">
                <div className="inner-box col-md-4">
                  <div className="get-more row">
                    {" "}
                    <div className="col-5">
                      <a href="">
                        <h2>
                          Best Acer <br />
                          Laptop
                        </h2>
                        <h4>
                          Core™ i7
                          <br />  GeForce RTX™
                        </h4>
                        <input type="button" value="Popular Product"></input>
                      </a>
                    </div>
                    <div className="col-7">
                      <img src="/images/nitro.webp" />
                    </div>
                  </div>
                </div>

                <div className="inner-box col-md-4">
                  <div className="get-more row">
                    {" "}
                    <div className="col-5">
                      <a href="">
                        <h2>
                          XPS 13 Plus Laptop <br />

                        </h2>
                        <h4>
                          16GB LPDDR5”
                          <br /> Intel Iris Xe
                        </h4>
                        <input type="button" value="Popular Product"></input>
                      </a>
                    </div>
                    <div className="col-7">
                      <img src="/images/xps.png" />
                    </div>
                  </div>
                </div>

                <div className="inner-box col-md-4">
                  <div className="get-more row">
                    <div className="col-5">
                      <a href="">
                        <h2>Acer Laptops</h2>
                        <h4>
                          Swift Go 14 Laptop
                          <br />
                          <br />
                        </h4>
                        <input type="button" value="Popular Product"></input>
                      </a>
                    </div>
                    <div className="col-7">
                      <img src="/images/image 15.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


 

      <section className="flat-imagebox">
        <div className="container">

          <div className="row">
            <div className="col-md-12 feature-product">
              <div className="product-tab">
                <ul className="tab-list">
                  <li className="active bolder">Featured Products</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="box-product">
            <div className="row newarrivalproduct">

              <Swiper className="mySwiper" 
                breakpoints={{
                  490: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },

                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },

                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                  },

                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                  },
                }}

                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
              >


                {data.featured.map((product, index) => {
                  return (
                    <SwiperSlide key={index} className='Swiperslide slidebox' >


                      <div className=" pbox ">
                        <a href={`details/${product.slug}`}>

                          <div className="product-box">
                            <div className="imagebox">

                              {product.discount_price == null ? <span className="item-new">NEW</span> : <span className="item-new-sales">SALE</span>}

                              <ul className="box-image owl-carousel-1">
                                <li>
                                  <img src={product.images.length ? PRODUCT_IMAGE_PATH + product.images[0].image : ""} alt="" />
                                </li>
                              </ul>

                              <hr />


                              <div className="productdescription">

                                <div className="stars">
                                  
                                  <i
                                    className="fa fa-star"
                                    style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                  ></i>
                                  <i
                                    className="fa fa-star"
                                    style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                  ></i>
                                  <i
                                    className="fa fa-star"
                                    style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                  ></i>
                                  <i
                                    className="fa fa-star"
                                    style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                  ></i>

                                  <i
                                    className="fa fa-star"
                                    style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                  ></i>
                                </div>


                                <div className="box-content">
                                  {/* <div className="cat-name"></div> */}
                                  <div className="product-name">

                                    <div className="title-name">
                                      <h2>
                                        {product.title.substring(0, 20)}{product.title.length > 20 ? "..." : ""}
                                      </h2>
                                    </div>

                                    <div className="price">
                                      <h5><span>{<FormatCurrency price={product.discount_price || product.regular_price} />}
                                        <br />
                                        {product.regular_price !== product.discount_price && product.discount_price ? (<strike>(<FormatCurrency price={product.regular_price} />)</strike>) : null}</span>
                                      </h5>
                                    </div>

                                    <div className="description">
                                      <h5>
                                        {product.description.substring(0, 32)}
                                        {product.description.length > 32 ? "..." : ""}
                                      </h5>
                                    </div>
                                  </div>

                                  <div className="learnmore">
                                    <input type="button" value="Learn More"></input>
                                  </div>

                                </div>

                              </div>



                            </div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>




            </div>
          </div>
        </div>
      </section>

      <section className="spec">
        <div className="container">
          <img src="/images/spec.png" alt="" />
        </div>
      </section>

      <section className="flat-imagebox style2" >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-wrap">
                <div className="product-tab style1">
                  <ul className="tab-list">
                    {data.categories?.slice(3).map((c, index) => (<li onClick={() => setCat(c)} className={c.id === cat?.id ? "active" : ""} key={index}>{c.title}</li>))}
                  </ul>
                </div>

                <div className="tab-item row" >
                  <Swiper className="mySwiper" style={{padding:"0 1rem"}}
                    breakpoints={{
                      490: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },

                      1000: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                      },

                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },

                      1300: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                    }}

                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false
                    }}
                  >


                    {catProducts?.map((product, index) => {
                      return (
                        <>
                          <SwiperSlide key={product.id} className='Swiperslide'>


                          <div className=" pbox ">
                            <a href={`details/${product.slug}`}>

                              <div className="product-box">
                                <div className="imagebox">


                                  {product.discount_price == null ? <span className="item-new">NEW</span> : <span className="item-new-sales">SALE</span>}


                                  <ul className="box-image owl-carousel-1">
                                    <li>
                                      <img src={product.images.length ? PRODUCT_IMAGE_PATH + product.images[0].image : ""} alt="" />
                                    </li>
                                  </ul>

                                  <hr />

                                  <div className="productdescription">

                                    <div className="stars">
                                      <i
                                        className="fa fa-star"
                                        style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                      ></i>
                                      <i
                                        className="fa fa-star"
                                        style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                      ></i>
                                      <i
                                        className="fa fa-star"
                                        style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                      ></i>
                                      <i
                                        className="fa fa-star"
                                        style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                      ></i>
                                      <i
                                        className="fa fa-star"
                                        style={{ color: "#FFC700", marginRight: "0.6rem" }}
                                      ></i>
                                    </div>


                                    <div className="box-content">
                                      <div className="product-name">
                                        <div className="title-name">
                                          <h2>
                                            {product.title.substring(0, 20)}{product.title.length > 20 ? "..." : ""}
                                          </h2>
                                        </div>

                                        <div className="price">
                                          <h5><span>{<FormatCurrency price={product.discount_price || product.regular_price} />}
                                            <br />
                                            {product.discount_price && product.regular_price !== product.discount_price ? (<strike>(<FormatCurrency price={product.regular_price} />)</strike>) : null}</span>
                                          </h5>
                                        </div>

                                        <div className="description">
                                          <h5>
                                            {product.description.substring(0, 32)}
                                            {product.description.length > 32 ? "..." : ""}
                                          </h5>
                                        </div>
                                      </div>

                                      <div className="learnmore">
                                        <input type="button" value="Learn More"></input>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </SwiperSlide>
                        </>
                      )
                    })}
                  </Swiper>


                  {!catProducts?.length ? <div style={{ width: "100%", padding: "2.5rem" }} className="text-center">
                    <h3>No Products Of This Category</h3>
                    <p>Try changing categories</p></div> : null}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="client" className="container mt-5 pb-5">
        <div className="row">
          <div className="col-md-12">
            <section id="client" className="section section-portfolio section-client">
              <div className="container  ">
                <h2 className=" experties-heading">Our Happy Clients</h2>
                <div className="experties-logo ">

                  <span className="name">
                    <img className="client-logo" src={img1} alt="Accounting and digital shoutout" />
                  </span>
                  <span className="name">
                    <img className="client-logo" src={img2} alt="Global Excel" />
                  </span>
                </div>
              </div>

            </section>
          </div>
        </div>
      </section>

      <Special />
    </>
  );
};
