import React from 'react'
import './short.css';
import alicImage from "../../Images/alic.png"
import poiImage from "../../Images/poi.png"
import callImage from "../../Images/call.png"
import starImage from "../../Images/star.png"
import blueImage from "../../Images/blue.png"
import docImage from "../../Images/doc.png"

        
        
       const postsData = [
          {
            title: 'Alice in Wonderland  Novel by  Lewis Carroll',
            imageUrl: alicImage,
            description: 'Alice who falls down a rabbit hole and lands into a fantasy world that is full of weird, wonderful people and animals. It is classic children s book that is also popular with adults.',
          },
          {
            title: 'Poirot Investigates Novel by Agatha Christie',
            
            imageUrl:poiImage ,
            description: 'Which stories are in Poirot investigates First there was the mystery of the film star and the diamond… then came the suicide that was murder… the mystery of the absurdly cheap flat… a suspicious death in a locked gun-room… a million dollar bond robbery… the curse of a pharoah s tomb… a jewel robbery by the sea',
          },
          {
            title: 'The Call of the Wild Novel by Jack London',
            imageUrl: callImage,
            description: 'Buck is stolen from his home and sold into service as a sled dog in Alaska. He becomes progressively more primitive and wild in the harsh environment, where he is forced to fight to survive and dominate other dogs.',
          },
          {
            title: 'The Star-Child Novel by  Oscar Wilde',
            imageUrl:starImage,
            description: 'It is loosely based on the Affair of the Diamond Necklace, an episode involving fraud and royal scandal that made headlines at the court of Louis XVI in the 1780s.',
          },
          {
            title: 'Blue Moon Beach  Novel by Sue Murray',
            imageUrl:  blueImage,
            description: 'The boy lives with his parents in their hotel - Blue Moon Hotel. This hotel is near the Blue Moon Beach. Sam is sure that it is the best beach in the world.',
          },
          {
            title: 'The Story of Doctor Dolittle Novel by Hugh Lofting',
            imageUrl: docImage,
            description: 'His love of animals grows over the years and his household menagerie eventually scares off his human clientele, leading to loss of wealth.',
          }
          
        ];
        
        const buttonLinks = [
          'https://drive.google.com/drive/u/4/folders/14pdrnCcgIa7h1e-zcAW3DVoZflL9ThTg',
          'https://drive.google.com/drive/u/4/folders/1JhhIlnj74TmeHrtuvdyf7PeD_bKiD-F0',
          'https://drive.google.com/drive/u/4/folders/1P1gINCRVgea8yjx9zBYzJgYmn9Y7ZKal',
          'https://drive.google.com/drive/u/4/folders/1hVWRSibdnz2P1z_KgF-NSyu8KI9TXCMt',
          'https://drive.google.com/drive/u/4/folders/1PjAGgQwiIPaXzSl-F1bgKREonbaZ9vf1',
          'https://drive.google.com/drive/u/4/folders/1UZ-3CzGcQVd_0ZvsidqceumDvXNRbE-V',
          
         
        ];
        
        const Short = () => {
          return (
            <div className="roma">
              <div className="shortTitles">
                <span className="shortTitleLg">Short Story</span>
                <img
                  className="romaImg"
                  src="https://images.pexels.com/photos/159788/cup-of-tea-book-table-reading-159788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
               
                <p className="shortDesc">
                "Nothing would be what it is because everything would be what it isn't. And contrariwise, what it is, it wouldn't be, and what it wouldn't be, it would.When I used to read fairy tales, I fancied that kind of thing never happened, and now here I am in the middle of one!”
                </p>
                </div>
              
              <div className="romapost">
                {postsData.map((post, index) => (
                  <div key={index} className="romapostItem">
                    <img
                      className="romapostImg"
                      src={post.imageUrl}
                      alt=""
                    />
                    <div className="romapostInfo">
                      <span className="postTitle">{post.title}</span>
                      <hr />
                      <p className="romapostDesc">{post.description}</p>
                      <a
                        href={buttonLinks[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="romaButton">
                         View
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
         
        
        
        
  )
}
export default Short;