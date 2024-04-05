import AlexCircle from "../assets/AlexCircle.png"
import './css/Cv.css'
import cv from '../assets/cv.json'

export default function Cv() {
    return (
        <>
            <div className="cv">
                <h2>Work Experience</h2>
                <ul>
                    {
                        cv.workExperience.map((we, i) => {
                            return (
                                <li>
                                    <h3>{we.role}</h3>
                                    <h4>{we.workPlace} | {we.dateFrom} - {we.dateTo}</h4>
                                    <p>{we.description}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <section className="divider"></section>
            
            <div className="cv">
                <h2>Academic Experience</h2>
                <ul>
                    {
                        cv.academicExperience.map((ae, i) => {
                            return (
                                <li key={i}>
                                    <h3>{ae.description}</h3>
                                    <h4>{ae.school} | {ae.dateFrom} - {ae.dateTo}</h4>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


        </>
    )
}