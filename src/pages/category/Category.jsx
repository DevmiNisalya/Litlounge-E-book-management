import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './category.css';
import './button.css';
import bookImage from '../../Images/book1.jpg'
import kidsImage from '../../Images/kids.webp'
import horrorImage from '../../Images/horror.jpg'
import romanceImage from '../../Images/romance.jpg'
import  shortImage from '../../Images/short.png'



export default function Category() {
    const navigate = useNavigate();

    const navigateToText = () => {
        navigate('/text');
    };

    const navigateToKids = () => {
        navigate('/kids');
    };

    const navigateToHorror = () => {
        navigate('/horror');
    };

    const navigateToRomance = () => {
        navigate('/romance');
    };
    const navigateToShort = () => {
        navigate('/short');
    };
    return (

      
        <div className="Category">
            <div className="categoryTitles">
                <span className="categoryTitleSm">Read more, Worry less</span>
                <span className="categoryTitleLg">Books Category</span>
                <img
                className="categoryImg"
                src="https://images.pexels.com/photos/214659/pexels-photo-214659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
            />
            <p className="categoryDesc">
            "Ask anyone with a big book collection, and they'll tell you moving them was the hardest part of the move.
            Take down a bookshelf and there's often no less than four, possibly up to eight, good Lord if it's over ten, boxes of dense material.
             This is the single greatest argument for welcoming ebooks. Abandoning print and having your Kindle on display instead doesn't sound like such a bad idea while carrying book box number seven to the car.”
            </p>
            </div>
            
            
            <div className="category">
                <div className="categorytxt">
              <span className='categorytxtH'>සිංහල නවකතා</span>
                <img className="categorytxtImg" src={bookImage} alt="Book" />
                <span>"නවකතාව යන වචනයට ඉංග්‍රීසියෙන් යොදන novel යන වදන බිඳී ආවේ ඉතාලි බසෙහි එන novella යන වදනෙහි අග අකුරු දෙක හැළීමෙනි. එහි අරුත ‘නව’ හෙවත් ‘අලුත්’ යන්නය.” </span>
                <button style={{ border: 'none', background: 'none', padding: 0, margin: 0 }} onClick={navigateToText}>
                පිවිසෙන්න
                </button>


                <span className='categorytxtH'>Kids Story</span>
                    <img className="categorytxtImg" src={kidsImage} alt="Book" />
                    <span> "Ask anyone with a big book collection, and they'll tell you moving them was the hardest part of the move. Take down a bookshelf and there's often no less than four, possibly up to eight, good Lord if it's over ten, boxes of dense material. This is the single greatest argument for welcoming ebooks. Abandoning print and having your Kindle on display instead doesn't sound like such a bad idea while carrying book box number seven to the car.”</span>
                <button style={{ border: 'none', background: 'none', padding: 0, margin: 0 }} onClick={navigateToKids}>
                Click Here
                </button>

                <span className='categorytxtH'>Horror Novels</span>
                    <img className="categorytxtImg" src={horrorImage} alt="Book" />
                      <span> “ll tell you now. That silence almost beat me. It s the silence that scares me. It s the blank page on which I can write my own fears. The spirits of the dead have nothing on it. The dead one tried to show me hell, but it was a pale imitation of the horror I can paint on the darkness in a quiet moment.”</span>
                <button style={{ border: 'none', background: 'none', padding: 0, margin: 0 }} onClick={navigateToHorror}>
                Click Here
                </button>

                <span className='categorytxtH'>Romantic Novels</span>
                    <img className="categorytxtImg" src={romanceImage} alt="Book" />
                    <span>“Love: a single word, a wispy thing, a word no bigger or longer than an edge. That’s what it is: an edge, a razor. It draws up through the center of your life, cutting everything in two. Before and after. The rest of the world falls away on either side.”</span>
                <button style={{ border: 'none', background: 'none', padding: 0, margin: 0 }} onClick={navigateToRomance}>
                  Click Here
                </button>
                <span className='categorytxtH'>Short Story</span>
                    <img className="categorytxtImg" src={ shortImage} alt="Book" />
                    <span>"Nothing would be what it is because everything would be what it isn't. And contrariwise, what it is, it wouldn't be, and what it wouldn't be, it would.When I used to read fairy tales, I fancied that kind of thing never happened, and now here I am in the middle of one!”</span>
                <button style={{ border: 'none', background: 'none', padding: 0, margin: 0 }} onClick={navigateToShort}>
                Click Here
                </button>
                </div>
            </div>
        </div>
    );
}
