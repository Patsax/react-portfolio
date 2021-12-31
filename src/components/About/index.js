import React from "react";
import personalPhoto from '../../assets/0517-0047.jpg'

function About() {
    return (

        
        <section className="my-5 main">
            <h1 id="about">Who am I?</h1>

            <div className="bio">
                <img src={personalPhoto} id="me" className="img-thumbnail" alt="of Patrick Sachleben with blue, collared shirt. He is bald with glasses and a beard." />
                <div>
                    <p>My name is Patrick Sachleben. I have worked at my family's Dairy Queen for the last 24 or so years. That path just didn't fulfil me so I decided to enroll in a bootcamp for full stack development. I'm just beginning my journey in this exciting field and I very much look forward to learning and growing my skills.</p>
                    <p>In my spare time I pursue several forms of entertainment. I like most forms or gaming be they video, board, or even card games. I quite like to read with fantasy and sci-fi being my favorite genres. I also enjoy watching movies such as anything Star Wars, Star Trek, Marvel, etc.  You might call me a huge nerd 😊</p>
                </div>
            </div>
        </section>
    );
}

export default About;
