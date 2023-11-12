import React from "react"
import "./header.css"

export default function Header() {
    return (
    <div className ="Header">
        <div className ="headerTitles">
            <span className="headerTitleSm">Read more, Worry less</span>
            <span className="headerTitleLg">LitLounge </span>
        </div>
        <img 
        className="headerImg" 
        src= "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        />
    </div>
  )
}
