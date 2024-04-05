import "./css/Contact.css"

export default function Contact(){
    return (
        <main>
            <div className="contact-container">
                <div className="contact-email">
                    <h2 className=""><i class="fa-solid fa-envelope"></i> 
                        alexander.christianson@outlook.com</h2>
                    <p></p>
                </div>
                <div className="contact-phone">
                    <h2><i className="fa-solid fa-phone"></i> 
                        073 930 93 62</h2>
                </div>
                <div className="contact-linkedIn">
                    <h2><a href="https://www.linkedin.com/in/alexander-christianson-208b501b7/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i> Linked<span>In</span>
                    </a></h2>
                </div>
                <div className="contact-github">
                    <h2><a href="https://github.com/Christiansons" target="_blank">
                        <i className="fa-brands fa-github"></i> GitHub
                    </a></h2>
                </div>
            </div>
        </main>
    )
}