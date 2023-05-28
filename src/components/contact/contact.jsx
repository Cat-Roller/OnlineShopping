import React from "react";
import "./contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact =()=>{
    return(
        <div className="contact">
            <div className="left">
                <span className="text">JOIN US:</span>
                <input type="text" placeholder="Enter your email..." className="input"/>
                <button className="join">Join</button>
            </div>
            <div className="right">
                <FacebookIcon/>
                <InstagramIcon/>
                <GoogleIcon/>
                <PinterestIcon/>
                <TwitterIcon/>
            </div>
        </div>
    )
}

export default Contact;