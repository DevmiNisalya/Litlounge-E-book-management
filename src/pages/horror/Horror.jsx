import React from 'react'
import './horror.css';
import darImage from "../../Images/dar.png"
import fallImage from "../../Images/fall.png"
import draImage from "../../Images/dra.png"
import caseImage from "../../Images/case.png"
import canImage from "../../Images/can.png"
import catImage from "../../Images/cat.png"

        
        
       const postsData = [
          {
            title: ' After the Darkness \n Novel by  Tilly Bagshawe',
            imageUrl: darImage,
            description: 'A classic tale of love and betrayal, and a struggle for survival in the new world order, this is an enthralling novel with ripped-from-the-headlines immediacy, perfect for the post-Bernie Madoff era in America',
          },
          {
            title: 'Dracula \n Novel by Bram Stoker',
            
            imageUrl:draImage ,
            description: 'Jonathan Harker, a newly qualified English solicitor, visits Count Dracula at his castle in the Carpathian Mountains to help the Count purchase a house near London. Ignoring the Counts warning,',
          },
          {
            title: 'The Shock of the Fall \n Novel by  Nathan Filer',
            imageUrl: fallImage,
            description: ' The book tells the story of Matthew Homes, a 19-year-old boy from Bristol, dealing with the death of his older brother. It explores the central themes of loss, guilt, and mental illness',
          },
          {
            title: 'Strange Case \n Novel by Robert Louis Stevenson',
           imageUrl:caseImage,
            description: 'Stevenson explores the idea that every single human has both evil and good within them, and that although a person has both evil and good sides to their personality,',
          },
          {
            title: 'The Canterville Ghost  \n Novel by  Oscar Wilde ',
            imageUrl: canImage,
            description: ' playful story written from the perspective of a ghost who had been haunting an old English castle. The ghost, Sir Simon, was unable to frighten an American family after they purchased the castle and moved in. ',
          },
          {
            title: 'The Black Cat \nNovel by  Edgar Allan Poe',
            imageUrl: catImage,
            description: ' a murderer carefully conceals his crime and believes himself unassailable, but eventually breaks down and reveals himself, impelled by a nagging reminder of his guilt.',
          }
          
        ];
        
        const buttonLinks = [
          'https://drive.google.com/drive/u/4/folders/199C5g4ZjPg9_d7UAMjoZJVQDqvQotml1',
          'https://drive.google.com/drive/u/4/folders/1unANdYS9Ob1OOOvMXoYypbjDrz2BMC0G',
          'https://drive.google.com/drive/u/4/folders/1Gq3q5OEgIgAUY1zpXY82RlO39QmUFxk5',
          'https://drive.google.com/drive/u/4/folders/19epEpl-2XuWb-sZfgCuhR8xEvWr-jFmj',
          'https://drive.google.com/drive/u/4/folders/1x4w2xifq_gCloNEcCAzNHgK9IFt9EO_0',
          'https://drive.google.com/drive/u/4/folders/1Uvo48BgbQOwZ9FVPz44Ze9WneXH-5kbP',
          
         
        ];
        
        const Horror = () => {
          return (
            <div className="roma">
              <div className="horTitles">
                <span className="horTitleLg">Horror Novels</span>
                <img
                  className="romaImg"
                  src="https://images.pexels.com/photos/4084701/pexels-photo-4084701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
               
                <p className="horDesc">
                “ll tell you now. That silence almost beat me. It s the silence that scares me. It s the blank page on which I can write my own fears. The spirits of the dead have nothing on it. The dead one tried to show me hell, but it was a pale imitation of the horror I can paint on the darkness in a quiet moment.”
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
export default Horror;