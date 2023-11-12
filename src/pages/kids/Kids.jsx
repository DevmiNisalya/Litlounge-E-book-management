import React from 'react';
import './kids.css'; // Import your CSS styles here
import toothImage from "../../Images/Tooth.png"
import ladyImage from "../../Images/Lady.png"
import choresImage from "../../Images/chores.png"
import upImage from "../../Images/Up.png"
import HammyImage from "../../Images/Hammy.png"
import allImage from "../../Images/all.png"
import trickImage from "../../Images/trick.png"
import hideImage from "../../Images/hide.png"
import DogImage from "../../Images/Dog.png"



const postsData = [
  {
    title: 'TOOTH FAIRY',
    imageUrl: toothImage,
    description: 'A wonderful story that weaves its magic in the child’s imagination, even while imparting an invaluable lesson in oral health and hygiene. This is a story that the children will return to time and again for a fun bedtime read.',
  },
  {
    title: 'DOING MY CHORES',
    imageUrl:choresImage ,
    description: 'Love shines through this great illustrated kids book . Read how a little girl makes chores fun and easy to do. A fantastic addition to your little one’s free bed time story collection.',
  },
  {
    title: 'DO YOU WONDER HOW THE LADYBUG GOT ITS NAME?',
    imageUrl: ladyImage,
    description: 'Those little beauties have inspired so many stories. But where oh where did they get their name from? Why are they called the ladybugs? A tale that tells us emphatically that everything on earth has a purpose to serve.',
  },
  {
    title: 'UP IN THE AIR',
    imageUrl:upImage,
    description: 'Flight is fascinating especially if you re a child. Balloons, birds, rockets, butterflies..the list goes on. Read this wonderful free children’s book about a little boy’s love for all things that fly. It will leave you wishing for a pair of wings for sure.',
  },
  {
    title: 'HAMMY THE HAMSTER',
    imageUrl:  HammyImage,
    description: 'He s got swag. He wears a tux. He s a hipster hamster who likes to live free. Join Hammy in his South American home as you read this free story book for kids on your next read aloud day.',
  },
  {
    title: 'A DOG ON A LOG',
    imageUrl: DogImage,
    description: 'Is there ever an ordinary day at the beach? Read what happens when a flea, a dog and a hog meet on a warm sunny day by the sea. ',
  },
  {
    title: 'A TRICK TRIKE',
    imageUrl: trickImage,
    description: 'Little Ross was sad. He didn t have a nice new tricycle like all the other children. All he had was an old hand-me-down trike. After sulking he decided to do something about it and made a “trick trike” that was the envy of the neighborhood.',
  },
  {
    title: 'UP AND DOWN AND ALL',
    imageUrl: allImage,
    description: 'Freddie went to town and there was plenty to see. All he had to do was look up and look down and look all around. As easy as it may seem, Freddie met with a few highs and lows on his day out',
  },
  {
    title: 'HIDE AND SEEK',
    imageUrl: hideImage,
    description: 'Was it just another game of hide and seek? No. It was not. First she fell into a deep, dark hole in the ground and then they found a treasure. Did it end there? No! It did not. Read more about this thrilling adventure of Sally and friends in this free illustrated kids  book. The fun never ends when Sally s around!',
  },
];

const buttonLinks = [
  'https://drive.google.com/drive/u/4/folders/1vg-15kUCMk1tgVAZBU4uJWikiJ2BHozk',
  'https://drive.google.com/drive/u/4/folders/1HLl1fFAtvP2HHnbnCiARDlXsuRM_5QT7',
  'https://drive.google.com/drive/u/4/folders/1xfhRfB7Kzyn936AOocNHI_6MJbF87vwH',
  'https://drive.google.com/drive/u/4/folders/1PyEYBjf01IIIBPxsc3XoWoPQampA_LBE',
  'https://drive.google.com/drive/u/4/folders/1Bm_ynui63zwjmWRFxCLB7rBQihDbrhvY',
  'https://drive.google.com/drive/u/4/folders/1iZF9fq8quJvxUz3V9li5biDEQ7mxrxct',
  'https://drive.google.com/drive/u/4/folders/19lglSY_0oCLZgtZe4_WmLIQTHkCk0Ozr',
  'https://drive.google.com/drive/u/4/folders/1zoPOzoN35_HZmmQEMvvCzb8LZhpFD1R3',
  'https://drive.google.com/drive/u/4/folders/192wauxJ8mfJ8JkrkZhJF-Do-WI1UTCsW',
 
];

const Kids = () => {
  return (
    <div className="kids">
      <div className="kidsTitles">
        <span className="kidsTitleLg">Kids Story</span>
        <img
          className="kidsImg"
          src="https://images.pexels.com/photos/16934295/pexels-photo-16934295/free-photo-of-disney-figures-on-parade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="kidsDesc">
          "Ask anyone with a big book collection, and they'll tell you moving them was the hardest part of the move. Take down a bookshelf and there's often no less than four, possibly up to eight, good Lord if it's over ten, boxes of dense material. This is the single greatest argument for welcoming ebooks. Abandoning print and having your Kindle on display instead doesn't sound like such a bad idea while carrying book box number seven to the car.”
        </p>
      </div>
      <div className="kidspost">
        {postsData.map((post, index) => (
          <div key={index} className="kidspostItem">
            <img
              className="kidspostImg"
              src={post.imageUrl}
              alt=""
            />
            <div className="kidspostInfo">
              <span className="postTitle">{post.title}</span>
              <hr />
              <p className="kidspostDesc">{post.description}</p>
              <a
                href={buttonLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="kidsButton">
                 View
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;
