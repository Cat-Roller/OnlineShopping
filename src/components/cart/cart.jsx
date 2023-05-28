import "./cart.scss"
import React from "react"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart=()=>{
    const data=[
        {
            id:1,
            image:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            image2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long sleeve graphyc T-shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque earum asperiores autem tempora quis rem quidem delectus exercitationem modi accusantium nihil tenetur architecto, est quisquam facilis, et quos ratione.",
            isNew:true,
            oldPrice: 19,
            price:12
        },
        {
            id:2,
            image:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque earum asperiores autem tempora quis rem quidem delectus exercitationem modi accusantium nihil tenetur architecto, est quisquam facilis, et quos ratione.",
            isNew:true,
            oldPrice:19,
            price:12
        }
    ];

    return(
        <div className="cart">
            <h1>Products in cart</h1>
            {
              data.map((item)=>(
                  <div className="item" key={item.id}>
                    <img src={item.image} alt="image"/>
                    <div className="details">
                        <h3>{item.title}</h3>
                        <p>{item.desc.substring(0,100)}...</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete"/>
                  </div>
              ))
            }
            <div className="bottom">
                <div className="total">
                    <span>SUBTOAL</span>
                    <span>$123</span>
                </div>
                <button className="order">Order</button>
                <span className="reset">Reset Cart</span>
            </div>
        </div>
    )
}

export default Cart;