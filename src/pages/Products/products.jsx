import React from "react";
import "./products.scss"
import List from "../../components/List/list";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Products = ()=>{
    const catId=parseInt(useParams().id)
    const [price,setPrice] = useState(1000)
    const [sort,setSort]=useState(null)
    return(
        <div className="category">
            <div className="left">
                <div className="filter">
                    <h2>
                        Categories
                    </h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1}/>
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2}/>
                        <label htmlFor="2">Shirt</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3}/>
                        <label htmlFor="3">Skirt</label>
                    </div>
                </div>
                <div className="filter">
                    <h2>
                        Price
                    </h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e)=>setPrice(e.target.value)}/>
                        <span>{price}</span>
                    </div>
                </div>
                <div className="filter">
                    <h2>
                        Sort By
                    </h2>
                    <div className="inputItem">
                        <input type="radio" name="price" value="asc" id="asc" onChange={(e)=>setSort("asc")}/>
                        <label htmlFor="asc">Price (lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" value="desc" id="desc" onChange={(e)=>setSort("desc")}/>
                        <label htmlFor="desc">Price (highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="categoryBanner" />
                <List catId={catId} maxPrice={price} sort={sort}/>
            </div>
        </div>
    )
}

export default Products;