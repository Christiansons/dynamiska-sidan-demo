import './css/Projects.css'
import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PuffLoader } from 'react-spinners';

export default function Projects() {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://api.github.com/users/christiansons/repos'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const filteredRepos = data.filter((repo) => {
                    return repo.name === "Labb3-miniAPI" || repo.name === "MusikProjektet" || repo.name ==="Labb-10-SQL-ORM"
                })
                setTimeout(() => {
                    setRepos(filteredRepos);
                    setIsLoading(false);
                },);
                
            })
            .catch((e) => console.log(e));

        
    }, [repos]);

    if (isLoading) {
        return <div className='spinner'><PuffLoader
            color="#0a98f3"
            size={70}

        />
        </div>
    }
    return (
        <>
            <main className="projects">
                <h2>Some recent Projects</h2>
                {
                    repos.map(repo => {
                        return (
                            <Card>
                                <Card.Body>
                                    <Card.Title>{repo.name}</Card.Title>
                                    <Card.Text>
                                        <h5>Language:</h5>
                                        <p>{repo.language}</p>
                                        <p>{repo.description}</p>
                                    </Card.Text>
                                    <a href={repo.html_url} target="_blank" className="github_button">
                                        <i className="github-button fa-brands fa-github" />
                                    </a>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </main>
        </>

    )
}