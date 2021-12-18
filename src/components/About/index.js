import React from "react";
import personalPhoto from '../../assets/0517-0047.jpg'

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={personalPhoto} className="my-2 img-thumbnail" alt="of Patrick Sachleben with blue, collared shirt. He is bald with glasses and a beard." />
        </section>
    );
}

export default About;
