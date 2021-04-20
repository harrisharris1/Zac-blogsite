import React from "react"
import ThinkingZac from "../../images/thinkingzac.svg"



const Main =() =>(
    <div className="mainContainer">
         <img src={ThinkingZac}></img>
        <div className="AboutMeSection">
             <div className="paragraphs">
                <h2>Things to know <span class="underline">about me.</span> </h2>
                    <h3>Who am I?</h3>
                    <p>My name is Zac Harris, and I am a Father and Husband before anything. I
                    am 2x founder, Senior SEO and UI Designer based in Chicago. I founded
                    Prelim, Tripvo, and Jeffery. I've worked for companies like SpyFu and
                    Northcutt.</p>
                </div>
                <div className="paragraphs">
                    <h3>What do I do?</h3>
                    <p>I combine research, user flows, wireframing, prototyping, and storytelling,
                    to transform SEO data into revenue producing campaigns. With a 
                    background in Technical SEO, I understand the constrains of the web and
                    am able to design and build SEO campaigns around them effectively.</p>
                </div>
                <div className="paragraphs">
                    <h3>What am I passionate about?</h3>
                    <p>Football used to be a way of life for me. I still love the game, but I use it
                    as a vehicle to guide our inner-city youth. As a SEO enthusiast, I believe
                    that removing the noise and lowering the barrier of entry into SEO will
                    empower more people to create sound SEO strategies.</p>
                </div>
            </div>
        </div>


)
export default Main