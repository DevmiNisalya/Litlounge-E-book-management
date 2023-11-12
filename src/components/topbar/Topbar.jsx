import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="topLeft">
        <i className ="topIcon fa-brands fa-square-facebook" style={{color: "#000000",}} />
        <i className ="topIcon fa-brands fa-square-twitter" style={{color: "#030507",}} />
        <i className ="topIcon fa-brands fa-square-pinterest" style={{color: "#000000",}} />
        <i className ="topIcon fa-brands fa-square-instagram" style={{color: "#000000",}} />
      </div>
      <div className="topCenter">
        <ul  className="topList">
           <li className="topListItem">
           <Link className="link" to ="/">HOME</Link></li>
           <li className="topListItem">
            <Link className="link" to ="/about">ABOUT</Link></li>
           <li className="topListItem">
            <Link className="link" to ="/contact">CONTACT</Link></li>
           <li className="topListItem">
           <Link className="link" to ="/write">WRITE</Link></li>
           <li className="topListItem">
            <Link className="link" to ="/category">CATEGORY</Link></li>
           {user && <li className="topListItem">LOGOUT</li>}
           
        </ul>
      </div>
      <div className="topRight">
  {user? (
    <Link className="link" to="/settings">
      <img
        className="topImg"
        src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1750&dpr=1"
        alt=""
      />
      </Link>
    ):(

      <ul className="topList">
      <li className="topListItem">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </li>
      <li className="topListItem">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </li>
    </ul>
  )}
  <i className="topSearchIcon fas fa-search"></i>
</div>


  </div>
  );
}
