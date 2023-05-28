import "./ProductList"
import "./ProductList.scss"
import React from "react"
import Card from "./Card/card.jsx"

const ProductList=({type})=>{
    const data = [
        {
            id:1,
            image:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            image2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long sleeve graphyc T-shirt",
            isNew:true,
            oldPrice: 19,
            price:12
        },
        {
            id:2,
            image:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            isNew:true,
            oldPrice:19,
            price:12
        },
        {
            id:3,
            image:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirt",
            oldPrice:20,
            price:15
        },
        {
            id:4,
            image:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Hat",
            oldPrice:18,
            price:13
        }
    ]
    return(
        <div className="List">
            <div className="top">
                    <h1>{type}</h1>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros nunc,
                    gravida ac blandit et, iaculis eget velit. Vivamus sed odio mi. Fusce in ante ut risus.
                    </span>
            </div>
            <div className="bottom">
                {data.map(item=><Card item={item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default ProductList;