import { useParams } from "react-router-dom";
import "./details.css";
import { useEffect, useState } from "react";
import { error } from "../utils/toast";
import { getProductDetail } from "../services/product";
import { PRODUCT_IMAGE_PATH } from "../config";
import { ThreeCircles } from "react-loader-spinner";
import { Swiper, SwiperSlide } from 'swiper/react';
import FormatCurrency from "./FormatCurrency";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

export const Details = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const { id } = useParams();
  const getData = async () => {
    setLoading(true);
    try {
      const d = await getProductDetail(id);
      setData(d);
    } catch (e) {
      error(e.message || "Failed to get product detail")
    }
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <section className="container">

        <section className="flat-breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="breadcrumbs">
                  <li className="trail-item">
                    <a href="/" title="">
                      Home
                    </a>
                    <span>
                      <img src="/images/icons/arrow-right.png" alt="" />
                    </span>
                  </li>
                  <li className="trail-item">
                    <a href="/shop" title="">
                      Shop
                    </a>
                    <span>
                      <img src="/images/icons/arrow-right.png" alt="" />
                    </span>
                  </li>
                  <li className="trail-end">
                    <a href="#" title="">
                      {data?.title}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {loading ? <div style={{ margin: "10rem", justifyContent: "center", display: "flex" }}>
          <ThreeCircles
            height="120"
            width="120"
            radius="9"
            color="blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass=""
          />
        </div>
          : (
            <section className="flat-product-detail style1">
              <div className="container">
                <div className="row boxrow">

                  <div className="col-md-6 col-12 productimage">
                    <div className="description-image">
                      <div className="box-image">

                        {!(data?.images?.length) ?
                          <img
                            src={""}
                            alt=""
                            style={{ width: "75%", margin: "4rem 7rem" }}
                          /> :
                          <>

                            <Swiper
                              spaceBetween={30}
                              centeredSlides={true}
                              autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                              pagination={{
                                clickable: true,
                              }}
                              navigation={true}
                              modules={[Autoplay, Pagination, Navigation]}
                              className="mySwiper"
                            >{
                                data?.images?.map((img, index) => (<SwiperSlide>
                                  <img
                                  key={index}
                                    src={PRODUCT_IMAGE_PATH + img?.image}
                                    alt=""
                                    style={{ width: "75%", margin: "4rem 7rem" }}
                                  /></SwiperSlide>))}
                            </Swiper>


                            <div className="image-detail">
                              {data?.images?.map((img, index) => (
                                <div className="imagelist" key={index} style={{cursor:"pointer"}}>
                                  <img src={PRODUCT_IMAGE_PATH + img?.image} />
                                </div>
                              ))}
                            </div>

                          </>}

                      </div>
                    </div>
                  </div>


                  <div className="col-md-6 col-12 productdetail" s>
                    <div className="product-detail style1">
                      <span className="bg"></span>
                      <div className="header-detail">
                        <h4  className="name">{data?.title}</h4>
                        <div className="category">{data?.categories?.map(cat => cat.title).join(", ")}</div>
                      </div>
                      <div className="content-detail">
                        <div className="info-text">
                          {data?.description}
                        </div>
                        <div className="product-id">
                          SLUG: <span className="id">{data?.slug}</span>
                        </div>
                        <hr />
                        <div className="price mt-4" >
                          {data?.discount_price !== data?.regular_price ? <div className="regular"> {<FormatCurrency price={data?.regular_price} />}</div> : null}
                          <div className="sale">{<FormatCurrency price={data?.discount_price} />} </div>
                        </div>
                      </div>
                      <hr />

                      <div className="footer-detail">
                        <div className="quanlity-box">
                          <div className="">
                            <strong>
                              <span style={{ color: "#ff0000" }}>
                                <a
                                  style={{ color: "#ff0000" }}
                                  href="#"
                                  rel="noopener"
                                >
                                  In Stock: {data?.quantity} (Click Here)
                                </a>
                              </span>
                            </strong>
                          </div>
                        </div>
                        <div className="box-cart style2">
                          <div className="compare-wishlist">
                            <a href="" className="compare" title="">
                              <img src="/images/icons/compare.png" alt="" />
                              Request Product
                            </a>
                          </div>
                        </div>
                        <div className="social-single">
                          <span>SHARE</span>
                          <ul className="social-list style2">
                            <li>
                              <a href="#" title="">
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i
                                  className="fa fa-pinterest"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i
                                  className="fa fa-dribbble"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-google" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>)
        }

        <section className="flat-product-content style1">
          <div className="container">
            <div className="row pb-5">
              <div className="col-md-2">
                <h3
                  className="p-3"
                  style={{ backgroundColor: "#cccccc", borderRadius: "4px" }}
                >
                  Specifications
                </h3>
              </div>
              <div className="col-md-8 pl-5">
                <div className="tecnical-specs">
                  <h4 className="name">{data?.title}</h4>
                  <table>
                    <tbody>
                      {data?.product_features?.map((ft, index) => (<tr key={index}>
                        <td>{ft.name}</td>
                        <td>{ft.description}</td>
                      </tr>))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="rating">
                  <div className="title">Based on 3 reviews</div>
                  <div className="score">
                    <div className="average-score">
                      <p className="numb">4.3</p>
                      <p className="text">Average score</p>
                    </div>
                    <div className="queue">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <ul className="queue-box">
                    <li className="five-star">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="numb-star">3</span>
                    </li>
                    <li className="four-star">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="numb-star">4</span>
                    </li>
                    <li className="three-star">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="numb-star">3</span>
                    </li>
                    <li className="two-star">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="numb-star">2</span>
                    </li>
                    <li className="one-star">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="numb-star">0</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-review style1">
                  <div className="title">Add a review</div>
                  <div className="your-rating queue">
                    <span>Your Rating</span>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <form action="#" method="get" acceptCharset="utf-8">
                    <div className="review-form-name">
                      <input
                        type="text"
                        name="name-author"
                        value=""
                        placeholder="Name"
                      />
                    </div>
                    <div className="review-form-email">
                      <input
                        type="text"
                        name="email-author"
                        value=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="review-form-comment">
                      <textarea
                        name="review-text"
                        placeholder="Your Name"
                      ></textarea>
                    </div>
                    <div className="btn-submit">
                      <button type="submit">Add Review</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="flat-imagebox style4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="flat-row-title">
                  <h3>Related Products</h3>
                </div>
              </div>
            </div>

            <div className="box-product">
              <div className="row newarrivalproduct">
                <div className="col-lg-3 col-sm-6 ">
                  <a href="details">
                    <div className="product-box">
                      <div className="imagebox">
                        <span className="item-new">NEW</span>
                        <ul className="box-image owl-carousel-1">
                          <li>
                            <a href="#" title="">
                              <img src="/images/product/other/pin.png" alt="" />
                            </a>
                          </li>
                        </ul>
                        <hr />
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
                          <div className="cat-name"></div>
                          <div className="product-name">
                            <h3>
                              MacBook Pro <span>Rs 9999</span>
                            </h3>
                            <a href="#" title="">
                              simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum.....
                            </a>
                          </div>
                          <input type="button" value="Learn More"></input>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6 ">
                  <a href="details">
                    <div className="product-box">
                      <div className="imagebox">
                        <span className="item-new">NEW</span>
                        <ul className="box-image owl-carousel-1">
                          <li>
                            <a href="#" title="">
                              <img src="/images/product/other/01.jpg" alt="" />
                            </a>
                          </li>
                        </ul>
                        <hr />
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
                          <div className="cat-name"></div>
                          <div className="product-name">
                            <h3>
                              Laptop <span>Rs 3000</span>
                            </h3>
                            <a href="#" title="">
                              simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum.....
                            </a>
                          </div>
                          <input type="button" value="Learn More"></input>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6 ">
                  <a href="details">
                    <div className="product-box">
                      <div className="imagebox">
                        <span className="item-new">NEW</span>
                        <ul className="box-image owl-carousel-1">
                          <li>
                            <a href="#" title="">
                              <img src="/images/product/other/bla.png" alt="" />
                            </a>
                          </li>
                        </ul>
                        <hr />
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
                          <div className="cat-name"></div>
                          <div className="product-name">
                            <h3>
                              Dell Inspiron <span>Rs 4500</span>
                            </h3>
                            <a href="#" title="">
                              simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum.....
                            </a>
                          </div>
                          <input type="button" value="Learn More"></input>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6 ">
                  <a href="details">
                    <div className="product-box">
                      <div className="imagebox">
                        <span className="item-new">NEW</span>
                        <ul className="box-image owl-carousel-1">
                          <li>
                            <a href="#" title="">
                              <img src="/images/product/other/blu.png" alt="" />
                            </a>
                          </li>
                        </ul>
                        <hr />
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
                          <div className="cat-name"></div>
                          <div className="product-name">
                            <h3>
                              Laptop <span>Rs 3000</span>
                            </h3>
                            <a href="#" title="">
                              simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum.....
                            </a>
                          </div>
                          <input type="button" value="Learn More"></input>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </section>
    </>
  );
};
