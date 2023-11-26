import { useState } from 'react';
import { PRODUCT_IMAGE_PATH } from '../config';
import './shop.css';
import { useParams } from 'react-router-dom';
import FormatCurrency from './FormatCurrency';

export const Shop = ({ data, search }) => {

    
    const [products, setProducts] = useState(search ? data.searchResults : data.products || []);
    const [filteredProducts, setFilteredProducts] = useState(search ? data.searchResults : data.products || []);
    const { id } = useParams();
    const [cat, setCat] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [brand, setBrand] = useState(id || "");

    let prods = brand ? filteredProducts.filter(prd => prd.brand_id.toString() === brand.toString()) : filteredProducts;

    return (
        <section className='shop-section'>
            <div className="Container">
                <div className="row">

                    <div className="first-box col-12 col-md-2  col-sm-12  border-end" >
                        <h3>Filter</h3>

                        <div className="filter_head " style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <h6 className="sort-font">Sort By:</h6>
                            <ul className="p-0 d-flex ">
                                <li>
                                    <a style={{ backgroundColor: sortBy === "createdAt" ? "#3BAEC3" : "transparent", border: "1px solid silver" }} className="sort-font btn border m-1" onClick={() => {
                                        setProducts(products.sort(function (a, b) {
                                            return new Date(a.created_at) - new Date(b.created_at);
                                        }));
                                        setFilteredProducts(filteredProducts.sort(function (a, b) {
                                            return new Date(a.created_at) - new Date(b.created_at);
                                        }));
                                        setSortBy("createdAt")
                                    }}>Newest</a>
                                </li>

                                <li><a style={{ backgroundColor: sortBy === "name" ? "#3BAEC3" : "transparent", border: "1px solid silver" }} className="sort-font btn border m-1" onClick={() => {
                                    setProducts(products.sort(function (a, b) { return a.title.localeCompare(b.title) }));
                                    setFilteredProducts(filteredProducts.sort(function (a, b) { return a.title.localeCompare(b.title) }));
                                    setSortBy("name")
                                }}>Name</a>
                                </li>

                                <li><a style={{ backgroundColor: sortBy === "price" ? "#3BAEC3" : "transparent", border: "1px solid silver" }} className="sort-font btn border m-1" onClick={() => {
                                    setProducts(products.sort(function (a, b) {
                                        return (a.discount_price ? a.discount_price : a.regular_price) - (b.discount_price ? b.discount_price : b.regular_price);
                                    }));
                                    setFilteredProducts(filteredProducts.sort(function (a, b) {
                                        return (a.discount_price ? a.discount_price : a.regular_price) - (b.discount_price ? b.discount_price : b.regular_price);
                                    }));
                                    setSortBy("price")
                                }}>Price</a></li>
                            </ul>
                        </div>


                        <div className="filter_head " style={{ marginTop: "42px", marginBottom: "14px" }}>
                            <h6>Category</h6>
                            <ul className="p-0 d-flex " style={{ marginTop: "10px" }}>
                                {data.categories?.slice(3).map((c, index) => (<li key={index}><a onClick={() => {
                                    setFilteredProducts(products?.filter((product) => product.categories && product.categories.map(ca => ca.id).includes(c.id)));
                                    setCat(c.id)
                                }} style={{ backgroundColor: cat === c.id ? "#3BAEC3" : "transparent", border: "1px solid silver" }} className="sort-font btn border m-1">{c.title}</a></li>))}
                            </ul>
                        </div>


                        <div className="filter_head " style={{ marginTop: "42px", marginBottom: "14px" }}>
                            <h6>Brand</h6>
                            <ul className="p-0 d-flex " style={{ marginTop: "10px", flexWrap: "wrap" }}>
                                <li>
                                    <a style={{ backgroundColor: !brand ? "#3BAEC3" : "transparent", border: "1px solid silver" }} href={`/shop`} className='sort-font btn border d-flex m-1'>
                                        All Brands
                                    </a>
                                </li>

                                {data.brands.map((brd, index) => (
                                    <li key={index}>
                                        <a style={{ backgroundColor: brand.toString() === brd.id.toString() ? "#3BAEC3" : "transparent", border: "1px solid silver" }} href={`/shop/${brd.id}`} className='sort-font btn border d-flex m-1'>
                                            {brd.name}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>

                    </div>

                    <div className="second-box col-12  col-md-10 col-sm-12 ">
                        <div className='type'>
                            <h4 className="btn"> {search ? search : brand ? data.brands.find(brd => brd.id.toString() === brand.toString())?.name : "All Brands"} </h4>
                        </div>

                        <div className="Products ">
                            {prods?.map((product, index) => (
                            <a className='anchor' key={index} href={`/details/${product.slug}`} >
                                <div className="pro_box border card p-3" style={{ borderRadius: "4px" }}>
                                    
                                    <div className="pro_image">
                                        <img src={product.images?.length ? PRODUCT_IMAGE_PATH + product.images[0].image : null} alt=""
                                            style={{ width: "61%", margin: "auto", maxHeight: "156px", overflow: "hidden" }} />
                                    </div>

                                    <hr />

                                    <div className="spec text-center">
                                        <div className="product-title">
                                            <p id="heading">{product.title}</p>
                                        </div>
                                        <div className="queue"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star"
                                            aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i
                                                className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star"
                                                    aria-hidden="true"></i>
                                        </div>

                                        <div id="price">
                                        <h5><span>{<FormatCurrency price={product.discount_price || product.regular_price} />}
                                              <br />
                                              {product.discount_price && product.regular_price !== product.discount_price ? (<strike>(<FormatCurrency price={product.regular_price} />)</strike>) : null}</span>
                                            </h5>
                                        </div>

                                            
                                        <button id="cart_btn" className="btn">Read More</button>
                                    </div>
                                </div>
                            </a>))}

                        </div>

                        {!prods?.length ? <div className="container">
                            <div className="text-center">
                                <h1 style={{ color: "grey", marginLeft: "20px", marginTop: "20px" }}>No Result Found</h1>
                            </div>
                            <img src="" style={{ width: "60%", margin: "auto" }} alt="" />
                        </div> : null}
                    </div>

                </div>
            </div>
        </section>
    )
};
