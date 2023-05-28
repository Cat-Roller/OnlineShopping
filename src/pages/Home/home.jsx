import React from "react";
import "./home.scss"
import Slider from "../../components/slider/slider.jsx"
import ProductList from "../../components/ProductList/ProductList";
import Categories from "../../components/categories/categories";
import Contact from "../../components/contact/contact";

const Home = ()=>{
    return(
        <div>
            <Slider/>
            <ProductList type="Reccomendations" />
            <Categories/>
            <ProductList type="Trending"/>
            <Contact/>
        </div>
    )
}

export default Home;