import React, { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { HomeBody } from "./components/HomeBody";
import { Footer } from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Details } from "./components/Details";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { getHomeData, getSearchData } from "./services/product";
import { ThreeCircles } from 'react-loader-spinner';
import { error } from "./utils/toast";
import { Shop } from "./components/Shop";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [data, setData] = useState({brands: [], featured:[], searchResults: []});
  const router = createBrowserRouter([
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/shop/:id",
      element: <Shop data={data} />,
    },
    {
      path: "/shop",
      element: <Shop data={data} />,
    },
    {
      path: "/*",
      element: <HomeBody data={data} />,
    },
  ]);

  const getData = async () => {
    setLoading(true);
    try {
      const newData = await getHomeData();
      setData({...data, ...newData});
      setLoading(false);
    } catch (e) {
      error("Failed to get data")
    }
  }

  useEffect(()=>{
    getData();
  },[])

  const handleSearch = async () => {

    setLoading(true);
    try {
      const newData = await getSearchData(search);
      setData({...data, searchResults: newData.products})
      setSearched(true);
    } catch (e) {
      error("Failed to search data")
    }
    setLoading(false);
  } 
  
  return (
    <div>
      <Nav brands={data.brands} search={search} setSearch={setSearch} handleSearch={handleSearch} />
      { loading ? <div style={{margin: "10rem", justifyContent:"center", display:"flex"}}>

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
        :
        searched ? <Shop data={data} search={search}/> : <RouterProvider router={router} />}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
