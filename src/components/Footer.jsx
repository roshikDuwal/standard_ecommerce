import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div className="widget-ft widget-about">
                <div className="logo logo-ft">
                  <a href="/" title="">
                    <h2
                      style={{
                        color: "#0153a6",
                        fontWeight: 900,
                        textAlign: "center",
                      }}
                    >
                      <img src="/logo.png" alt="Standard Computer" />
                    </h2>
                  </a>
                </div>
                <ul className="social-list">
                  <li>
                    <a href="#" title="">
                      <i
                        className="fa fa-google"
                        aria-hidden="true"
                        style={{ color: "#103C6C" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i
                        className="fa fa-whatsapp"
                        aria-hidden="true"
                        style={{ color: "#103C6C" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i
                        className="fa fa-envelope"
                        aria-hidden="true"
                        style={{ color: "#103C6C" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i
                        className="fa fa-facebook"
                        aria-hidden="true"
                        style={{ color: "#103C6C" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i
                        className="fa fa-instagram"
                        aria-hidden="true"
                        style={{ color: "#103C6C" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i
                        className="fa fa-twitter"
                        aria-hidden="true"
                        style={{ color: "#103C6C" }}
                      ></i>
                    </a>
                  </li>
                </ul>
                <div className="widget-content">
                  <div className="">
                    <p className="questions">
                      <i className=" fa fa-phone" /> For any quires:{" "}
                      <b>9851181642</b>
                    </p>
                    <p className="address ">
                      <i className=" fa fa-map-marker" /> Putalisadak, Kathmandu
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 row">
              <div className="col-lg-3 col-md-6">
                <div className="widget-ft widget-categories-ft">
                  <div className="widget-title">
                    <h3>Find By Categories</h3>
                  </div>
                  <ul className="cat-list-ft">
                    <li>
                      <a href="#" title="">
                        Desktops
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Laptops & Notebooks
                      </a>
                    </li>

                    <li>
                      <a href="#" title="">
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Software
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget-ft widget-menu">
                  <div className="widget-title">
                    <h3>Customer Care</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/contact" title="">
                        Contact us
                      </a>
                    </li>

                    <li>
                      <a href="#" title="">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="/term-condition" title="">
                        Customer Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget-ft widget-menu">
                  <div className="widget-title">
                    <h3>About SCI</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/contact" title="">
                        About Us
                      </a>
                    </li>

                    <li>
                      <a href="#" title="">
                        What{"'"}s New
                      </a>
                    </li>
                    <li>
                      <a href="/term-condition" title="">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="widget-ft widget-menu">
                  <div className="widget-title">
                    <h3>SCI Policies</h3>
                  </div>

                  <ul>
                    <li>
                      <a href="/contact" title="">
                        Order and Return
                      </a>
                    </li>

                    <li>
                      <a href="#" title="">
                        Payment
                      </a>
                    </li>
                    <li>
                      <a href="/term-condition" title="">
                        Privacy Policies
                      </a>
                    </li>
                    <li>
                      <a href="/term-condition" title="">
                        Terms and Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget-ft widget-newsletter">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>
                  Make sure that you never miss our
                  <br /> interesting news. Sign Up today !
                </p>
                <form
                  action="#"
                  className="subscribe-form"
                  method="get"
                  acceptCharset="utf-8"
                >
                  <div className="subscribe-content">
                    <input
                      type="text"
                      name="email"
                      className="subscribe-email"
                      placeholder="Email Address"
                    />
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
                <ul className="pay-list">
                  <li>
                    <a href="#" title="">
                      <img src="/images/logos/khalti.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <img
                        height={40}
                        src="/images/logos/esewa-logo.webp"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
