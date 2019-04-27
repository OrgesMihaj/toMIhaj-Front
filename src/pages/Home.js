import React from 'react';

import JavaScript from '../assets/images/icons/javascript.png';
import milan from '../assets/images/icons/milan.png';
import iceCream from '../assets/images/icons/iceCream.png';
import music from '../assets/images/icons/music.png';

const Home = () => {
    return (
        <div className="c-introduction">

            <p className="c-introduction__content">
                Hey there good people, my name is Orges Mihaj, a
                <span className="o-highlight"> Front-End Developer</span> based in Bulgaria.
                It is nice to meet you.
            </p>

            <p className="c-introduction__additional">
                When I am not lazy, I like to develop websites. Basically, I can develop websites in <br />
                both Front-end and Back-end (even though I declare myself as Front-end developer). <br /> I like 
                <img className="o-icon"  src={JavaScript} alt="JS"  />Javascript, <img className="o-icon"  src={iceCream} alt="IC"  />Ice cream, football (<img className="o-icon" src={milan} alt="ACM" />AC Milan), and <img className="o-icon"  src={music} alt="PM" />

            <a className="c-introduction__link" href="https://www.youtube.com/watch?v=idK2rbQ1Jv0">Better now</a> by Post Malone.
            </p>

            <a className="o-button o-button--is-big" href="contact.html">Let's talk</a>


        </div>
    )
}

export default Home;
