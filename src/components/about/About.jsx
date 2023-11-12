import React from "react"
import "./about.css"


export default function About() {
    return (
    <div className="about">
        <div className= "aboutItem">
    <span className ="aboutTitle">ABOUT </span>  
    <img
   
     src ="https://images.pexels.com/photos/21323/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    
     alt=""
     />
     <br></br>
     <p>LitLounge was established in 2023 with the vision to provide an extensive library of books in digital format free on the Internet. </p>
      <p>Many of the early eBooks are from the internet archives, which means you will be able to find a lot of scanned copies on the site </p>
       <p>which are added to the internet by various people.
      We are still going strong in our mission to provide a valuable service to our reader</p>
      </div>
      <br></br>
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