import egg from '../assets/egg.jpg'
import './css/Footer.css'
import React, { useState } from "react"

export default function Footer() {
    const [background, setBackground] = useState(false)

    const changeBg = () => {
        setBackground(!background);
        document.querySelector('body').style.backgroundColor = background ? 'yellow' : 'rgb(233, 233, 233)';
    }

    return (
        <>
            <footer >
                <nav>
                    <a href="#">
                        <h2 className="goBack">
                            Take me to the top <i className="fa-solid fa-arrow-up" />
                        </h2>
                    </a>
                </nav>
                <p>
                    Copyright © 2024 Alexander Christianson. All Rights Reserved.
                    <img
                        src={egg}
                        alt="egg"
                        onClick={changeBg} />
                </p>
            </footer>
        </>
    )
}