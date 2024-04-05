import React, { useState } from 'react';
import AlexCircle from '../assets/AlexCircle.png'
import påTaket from "../assets/hejsanhoppsan.jpg"
import './css/Home.css'

export default function Home() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const karlsson = document.getElementById("event-modal")
    let pressedKeys = "yo"
    window.addEventListener('keypress', (event) => {
        pressedKeys += event.key;
        pressedKeys = pressedKeys.slice(-3)
        if(pressedKeys === "hej") {
            toggleModal();
        }
      })

    const toggleModal = () => {
        //Sätter man ! så sätts motsatta värdet när metoden körs
        setIsModalVisible(!isModalVisible)
    }

    return (
        <>
            {
                isModalVisible && (
                    <div id="event-modal" class="modal">
                        <div class="modal-content">
                            <a onClick={toggleModal} class="close">&times;</a>
                            <p>
                                Hejsan hoppsan
                            </p>
                            <img src={påTaket} className='taket'/>
                        </div>
                    </div>
                )
            }
            <main className="main">
                <div className="intro">
                    <img src={AlexCircle} className="alexPicture" alt="alex" />
                    <div className="introText">
                        <section className="helloIm">Hello, I'm</section>
                        <section className="name">
                            <h2>
                                Alexander <span>Christianson</span>
                            </h2>
                        </section>
                        <div className="occupation">
                            <p className="leftBracket">{"{"}</p>
                            <p className="role">
                                .NET <br />
                                &nbsp;&nbsp;&nbsp;Web Developer
                            </p>
                            <p className="rightBracket">{"}"}</p>
                        </div>
                    </div>
                </div>
                <article className="about textBoxes">
                    <h2 className="aboutHeader">A little about me</h2>
                    <div className="aboutText">
                        Welcome to my web development portfolio! I'm a 25-year-old tech enthusiast
                        who is beginning to delve into the world of .NET web development, eager to
                        explore its depths and unravel its mysteries. While my project portfolio
                        may be in its early stages, my passion for programming runs deep, fueled
                        by a desire to tackle challenges head-on and constantly learn and grow.
                        Beyond the world of coding, you'll often find me with friends, cheffing up
                        in the kitchen, and staying active to maintain a healthy lifestyle.
                        Programming isn't just a career choice for me; it's a place for me to
                        express myself through creative problem-solving. Join me as I embark on
                        this exciting adventure, where every project is a step forward in my
                        journey of growth and mastery.
                    </div>
                </article>
                
            </main>
        </>
    )
}