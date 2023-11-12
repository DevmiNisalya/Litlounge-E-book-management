import React from "react";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
    <div className="sidebar">
        <div className = "sidebarItem">
          <span className ="sidebarTitle">ABOUT </span>  
           <img
            src ="https://images.pexels.com/photos/21323/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    
            alt=""
            />
            <p>
            LitLounge was established in 2023 with the vision to provide an extensive library of books in digital format free on the Internet. 
             We are still going strong in our mission to provide a valuable service to our reader

           </p> 
        </div>
        <div className="sidebarItem">
         <span className ="sidebarTitle">CATEGORIES</span>   
          <ul className ="sidebarList">
            <li className ="sidebarListItem">
            <Link className="link" to ="/">Life</Link></li>
            <li className ="sidebarListItem">Music</li>
            <li className ="sidebarListItem">Style</li>
            <li className ="sidebarListItem">Sport</li>
            <li className ="sidebarListItem">Tech</li>
            <li className ="sidebarListItem">Cinema</li>
          </ul>
        </div>
         <div className ="sidebarItem">
         <span className ="sidebarTitle">FOLLOW US</span>   
          <div className=" sidebarSocial">
            <i className ="sidebarIcon fa-brands fa-square-facebook" style={{color: "#000000",}} />
            <i className ="sidebarIcon fa-brands fa-square-twitter" style={{color: "#030507",}} />
            <i className ="sidebarIcon fa-brands fa-square-pinterest" style={{color: "#000000",}} />
            <i className ="sidebarIcon fa-brands fa-square-instagram" style={{color: "#000000",}} />
         </div>  
         </div>
    </div>
  )
}

