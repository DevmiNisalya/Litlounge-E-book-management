import React from 'react'
import './romance.css';
import ageImage from "../../Images/age.png"
import emilyImage from "../../Images/emily.png"
import janeImage from "../../Images/jane.png"
import queenImage from "../../Images/queen.png"
import nicImage from "../../Images/nic.png"
import trueImage from "../../Images/true.png"

        
        
       const postsData = [
          {
            title: 'The Age of Innocence  Novel by Edith Wharton',
            imageUrl: ageImage,
            description: 'Newland Archer, a young, aristocratic lawyer engaged to the cloistered, beautiful May Welland. When May s disgraced cousin Ellen arrives from Europe, fleeing her marriage to a Polish Count, her worldly, independent nature intrigues Archer, who soon falls in love with her.',
          },
          {
            title: 'Jane Eyre Novel by Charlotte Bronte',
            
            imageUrl:janeImage ,
            description: 'Jane Eyre, aged 10, lives at Gateshead Hall with her maternal uncles family, the Reeds, as a result of her uncle s dying wish. Jane was orphaned several years earlier when her parents died of typhus.',
          },
          {
            title: 'Wuthering Heights  Novel by Emily Bronte',
            imageUrl: emilyImage,
            description: ' It concerns two families of the landed gentry living on the West Yorkshire moors, the Earnshaws and the Lintons, and their turbulent relationships with the Earnshaws foster son Heathcliff',
          },
          {
            title: 'The Queens Necklace Novel by Alexandre Dumas',
           imageUrl:queenImage,
            description: 'It is loosely based on the Affair of the Diamond Necklace, an episode involving fraud and royal scandal that made headlines at the court of Louis XVI in the 1780s.',
          },
          {
            title: 'The Wedding  Novel by Nicholas Sparks ',
            imageUrl:  nicImage,
            description: 'Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers. Except for three South American species, the species of Helianthus are native to North America and Central America. The best-known species is the common sunflower.',
          },
          {
            title: 'True Believer Novel by Nicholas Sparks',
            imageUrl: trueImage,
            description: 'It is about a couple who celebrate 30 years marriage, and has been described as a sequel to Sparks s previous novel The Notebook. The book follows the life of Noah and Allie s daughter, Jane and her husband, Wilson',
          }
          
        ];
        
        const buttonLinks = [
          'https://drive.google.com/drive/u/4/folders/1jD8wEW8UW7QcFttSlpFB_jcYDcZzAj1n',
          'https://drive.google.com/drive/u/4/folders/1cIwQdsY60xSH0v3MGQvIAIQ_o01Wsdl3',
          'https://drive.google.com/drive/u/4/folders/1Elm_1PSMScs7hB5jUMhIyuFQJ_SsLFiz',
          'https://drive.google.com/drive/u/4/folders/1vLXwkwwSw6iRcQJ8IDZMX4toKo6BJq2Y',
          'https://drive.google.com/drive/u/4/folders/1EXnEWIaImkWinxQOrd05hikTr147yeiJ',
          'https://drive.google.com/drive/u/4/folders/1tU2YkqnlTleWf_T8Bldvtdwmp6YdmOxC',
          
         
        ];
        
        const Romance = () => {
          return (
            <div className="roma">
              <div className="romaTitles">
                <span className="romaTitleLg">Romantic Novels</span>
                <img
                  className="romaImg"
                  src="https://images.pexels.com/photos/320266/pexels-photo-320266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
               
                <p className="romaDesc">
                “Love: a single word, a wispy thing, a word no bigger or longer than an edge. That’s what it is: an edge, a razor. It draws up through the center of your life, cutting everything in two. Before and after. The rest of the world falls away on either side.”
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
export default Romance;