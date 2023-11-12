import "./contact.css"
import React from "react"


export default function Contact() {
    return (
    <div className="contact">
        <div className= "contactItem">
    <span className ="contactTitle">CONTACT </span>  
    <img
     src ="https://images.pexels.com/photos/21323/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    
     alt=""
     />
     <br></br>
      <p>LitLounge was established in 2023 with the vision to provide an extensive library of books in digital format free on the Internet. </p>
      <p>We always love to hear from our visitors, so if you have any questions or feedback, don’t hesitate to contact our editor via contact form.</p>
       <br></br>
        <p> Direct Contact</p>
        <p>Email - sinhalaebooks.com@gmail.com</p>
        <p>WhatsApp - +157197750</p>

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