import React from "react";
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
            />
            <div className="postInfo">
            <div className="postCats">
                    <span className="postCat">Aurora</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">A little</span>
                <hr />
                <span className="postDate">TRENDING</span>
            </div>
            <p className="postDesc">
            An aurora, also commonly known as the northern lights or southern lights,
             is a natural light display in Earth's sky, predominantly seen in high-latitude regions.
              Auroras display dynamic patterns of brilliant lights that appear as curtains, rays, spirals,
               or dynamic flickers covering the entire sky.
            </p>
            <img
                className="postImg"
                src="https://images.pexels.com/photos/1366619/pexels-photo-1366619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Nature</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Sunflower</span>
                <hr />
                <span className="postDate">TRENDING</span>
            </div>
            <p className="postDesc">
            Helianthus is a genus comprising about 70 species of annual and perennial flowering plants
             in the daisy family Asteraceae commonly known as sunflowers. Except for three South American species,
              the species of Helianthus are native to North America and Central America. The best-known species
               is the common sunflower.
            </p>
            
        </div>
    );
}
