import React from "react"
import "./write.css"

export default function Write() {
    return (
    <div className ="Write">
        <img 
        className="writeImg"
        src="https://images.pexels.com/photos/5255236/pexels-photo-5255236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" 
        />
        <form className ="writeFoarm">
        <div className="writeFormGroup">
           <label htmlFor="fileInput">
           < i className=" writeIcon fa-solid fa-plus" style={{color: "#000000",}} /><i/>
           </label>
          <input type ="file" id="fileInput" style={{display:"none"}}/>
          <input type ="text" placeholder="Title" className="writeInput" autoFocus={true}/>         
          </div>
          <div className="writeFormGroup">
             <textarea placeholder =" Tell Youre History.." type="text" className="writeInput writeText"></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
          </form>
    </div>
  )
}
