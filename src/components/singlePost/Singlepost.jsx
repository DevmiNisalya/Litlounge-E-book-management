import React from "react";
import "./singlepost.css"; 
export default function Singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img
          src="https://images.pexels.com/photos/1203161/pexels-photo-1203161.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlepostImg" 
        />
        <h1 className="singlepostTitle">
          dgfhtuyuyjhjjjhgjhfhvvvvvvvvvvvvvvvv
          <div className="singlepostEdit">
            <i className="singlepostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlepostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author: <b>Devmi</b>
          </span>
          <span className="singlepostDate">1 hour ago</span>
        </div>
        <p className="singlepostDesc">
        We’ve all been there—having snapped a cute Instagram pic and yet wondering just what to say along with it. Whether you’re looking for song lyrics, quotes, or funny captions for your Instagram account,
         you’ll find
        </p>
      </div>
    </div>
  );
}
