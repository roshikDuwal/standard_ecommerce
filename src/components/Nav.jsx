import "./nav.css";


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

import {AiOutlineHome,AiOutlineTags,AiOutlineShopping,AiOutlineContacts} from "react-icons/ai"
import {MdRoundaboutLeft} from "react-icons/md"

export const Nav = ({ brands, search, setSearch, handleSearch }) => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const [menu, setSubmenu] = useState(false)

  const handleMenu = () => {
    setSubmenu(!menu)
  }



  return (
    <>
      <div className="boxed">
        <div className="overlay"></div>

        <div className="preloader">

        </div>

        <section id="header" className="header">


          <div className="header-middle ">
            <div className="nav-container">
              <div className="row">


                <div className={nav ? "m-navbar fixed  top-0 left-0 w-[80%] pt-4 border-r border-r-gray-900 h-full bg-white text-white ease-in-out duration-500" : "m-navbar fixed left-[-100%] ease-out duration-500"} style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                  <ul className=" ullist m-4 uppercase border-2 flex flex-col gap-5 items-center justify-center "  >
                    <li className="list hover-underline-animation">
                      <a href="/" title="" >
                        Home
                      </a>
                    </li>

                    <li className="list hover-underline-animation cursor-pointer" onClick={handleMenu}>
                      <a >
                        Laptops-By-Brands {" "}<i className="fa fa-caret-down" aria-hidden="true" ></i>
                      </a>

                      {menu ? <>
                        <div className="submenu flex items-center flex-col "  >
                          {/* <ul> */}
                          {brands.map((brand, index) => (
                            <li key={index} className="link">
                              <a href={`/shop/${brand.id}`} className="hover-underline-animation">
                                <i
                                  className="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                                {brand.name}
                              </a>
                            </li>
                          ))}
                          {/* </ul> */}
                        </div>
                      </> : ""}
                    </li>

                    <li className="list hover-underline-animation" >
                      <a href="/shop" title="">
                        Shop
                      </a>
                    </li>
                    <li className="list hover-underline-animation" >
                      <a href="/about" title="">
                        About
                      </a>
                    </li>

                    <li className="list hover-underline-animation" >
                      <a href="/contact" title="">
                        Contact
                      </a>
                    </li>

                  </ul>
                </div>

                <div className="col-md-3 logobox" >
                  <div id="logo" className="logo ">
                    <a href="/" className="row" title="">

                      {/* <div className="col-4 p-0">
                        <img src="/logo.png" alt="SCI" />
                      </div> */}

                      <div className=" titlename">
                        <div className="top-title">
                          <h2>Standard</h2>
                        </div>
                        <div className="bottom-title">
                          <h5>Computer International</h5>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="navbaricon" onClick={handleNav}>
                    {!nav ? <DehazeIcon /> :
                      <CloseIcon />}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="top-search">
                    <form
                      className="form-search"
                      onSubmit={(e) => { e.preventDefault(); search && handleSearch() }}
                      acceptCharset="utf-8"
                    >
                      <div className="box-search">
                        <input
                          type="text"
                          value={search}
                          onChange={(e) => { setSearch(e.target.value) }}
                          name="search"
                          placeholder="Search Search Product Here..."
                        />
                        <span className="btn-search">
                          <button type="submit" className="waves-effect">
                            <i className=" fa fa-search" />
                          </button>
                        </span>

                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-md-3 thirdpart" >

                  <div >
                    <ul className="flat-support">
                      <div>
                        <a href="tel:01-5913642" title="">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <b> Need Help ? 01-591364 </b>
                        </a>
                      </div>
                    </ul>
                  </div>


                  <div >
                    <ul className="social-list">
                      <li>
                        <a href="#" title="">
                          <WhatsAppIcon />
                        </a>
                      </li>

                      <li>
                        <a href="#" title="">
                          <FacebookIcon />
                        </a>
                      </li>

                      <li>
                        <a href="#" title="">
                          <InstagramIcon />
                        </a>
                      </li>

                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="mainnavbar">
            <ul className=" ullist pb-2" >

              <li className="hover-underline-animation listbar" >
                <a href="/" title="">
              <AiOutlineHome/>
                  Home
                </a>
              </li>

              <div className=" hover-underline-animation mylist listbar" >
                <a >
                  <AiOutlineTags/>
                 Laptop by Brands {" "}<i className="fa fa-caret-down" aria-hidden="true" ></i>
                </a>
                  <div className="sublist"  >
                    {brands.map(brand => (
                      <li className="link " key={brand.id}>
                        <a className="hover-underline-animation" href={`/shop/${brand.id}`}>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                          {brand.name}
                        </a>
                      </li>
                    ))}
                    {/* </ul> */}
                  </div>
              </div>

              <li className=" hover-underline-animation list listbar" >
                <a href="/shop" title="">
                  <AiOutlineShopping/>
                  Shop
                </a>
              </li>
              <li className=" hover-underline-animation list listbar" >
                <a href="/about" title="">
                  <MdRoundaboutLeft/>
                  About
                </a>
              </li>
{/* 
              <li className=" hover-underline-animation list listbar" >
                <a href="#client" title="">
                  Our Client
                </a>
              </li> */}

              <li className=" hover-underline-animation list listbar" >
                <a href="/contact" title="">
                  <AiOutlineContacts/>
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </section>




      </div>
    </>
  );
};
