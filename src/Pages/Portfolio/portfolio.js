import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import CodeQuizHomepage from '../../assets/images/CodeQuizHomepage.png';
import WorkDayScheduler1 from '../../assets/images/WorkDayScheduler1.png';
import NoteTaker from '../../assets/images/NoteTaker.png';

export default function Portfolio() {
    return (
        <div>
            <h1> Jeri Smith's Portfolio </h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ CodeQuizHomepage } />
                <Card.Body>
                    <Card.Title>Code Quiz</Card.Title>
                    <Card.Text>
                        This Code Quiz fullfils the following User Story:
                        "AS A coding boot camp student,
                        I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
                        SO THAT I can gauge my progress compared to my peers"
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Built With:</ListGroupItem>
                    <ListGroupItem>-HTML</ListGroupItem>
                    <ListGroupItem>-CSS</ListGroupItem>
                    <ListGroupItem>-Bootstrap</ListGroupItem>
                    <ListGroupItem>-JavaScript</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://jerismith32.github.io/challenge-4-web-APIs-code-quiz/">Deployed Link</Card.Link>
                    <Card.Link href="https://github.com/jerismith32/challenge-4-web-APIs-code-quiz">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ WorkDayScheduler1 } />
                <Card.Body>
                    <Card.Title>Work Day Scheduler</Card.Title>
                    <Card.Text>
                        This Code Quiz fullfils the following User Story:
                        "AS AN employee with a busy schedule
                        I WANT to add important events to a daily planner
                        SO THAT I can manage my time effectively"
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Built With:</ListGroupItem>
                    <ListGroupItem>-HTML</ListGroupItem>
                    <ListGroupItem>-CSS</ListGroupItem>
                    <ListGroupItem>-Bootstrap</ListGroupItem>
                    <ListGroupItem>-JavaScript</ListGroupItem>
                    <ListGroupItem>-JQuery</ListGroupItem>
                    <ListGroupItem>-Moment.js</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://jerismith32.github.io/challenge-5-work-scheduler-third-party-apis/">Deployed Link</Card.Link>
                    <Card.Link href="https://github.com/jerismith32/challenge-5-work-scheduler-third-party-apis">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ WorkDayScheduler1 } />
                <Card.Body>
                    <Card.Title>README.md Generator</Card.Title>
                    <Card.Text>
                        This Code Quiz fullfils the following User Story:
                        "AS A developer
                        I WANT a README generator
                        SO THAT I can quickly create a professional README for a new project"
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Built With:</ListGroupItem>
                    <ListGroupItem>-HTML</ListGroupItem>
                    <ListGroupItem>-CSS</ListGroupItem>
                    <ListGroupItem>-JavaScript</ListGroupItem>
                    <ListGroupItem>-Node.js</ListGroupItem>
                    <ListGroupItem>-Inquirer</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://drive.google.com/file/d/1SbGgsOg3BnUXrq-NDv18rtqWPxlGVTTo/view">Video Walk Through</Card.Link>
                    <Card.Link href="https://github.com/jerismith32/challenge-9-Node.js-README-generator">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ NoteTaker } />
                <Card.Body>
                    <Card.Title>Express Note Taker</Card.Title>
                    <Card.Text>
                        This Code Quiz fullfils the following User Story:
                        "AS A small business owner
                        I WANT to be able to write and save notes
                        SO THAT I can organize my thoughts and keep track of tasks I need to complete"
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Built With:</ListGroupItem>
                    <ListGroupItem>-HTML</ListGroupItem>
                    <ListGroupItem>-CSS</ListGroupItem>
                    <ListGroupItem>-Bootstrap</ListGroupItem>
                    <ListGroupItem>-JavaScript</ListGroupItem>
                    <ListGroupItem>-Node.js</ListGroupItem>
                    <ListGroupItem>-Express.js</ListGroupItem>
                    <ListGroupItem>-UUID</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://express-note-taker-jsmith.herokuapp.com/">Deployed Link</Card.Link>
                    <Card.Link href="https://github.com/jerismith32/challenge-11-note-taker">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ NoteTaker } />
                <Card.Body>
                    <Card.Title>E-Commerce</Card.Title>
                    <Card.Text>
                        This Code Quiz fullfils the following User Story:
                        "AS A manager at an internet retail company
                        I WANT a back end for my e=commerce website that uses the latest technologies
                        SO THAT my company can compete with other e-commerce companies"
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Built With:</ListGroupItem>
                    <ListGroupItem>-HTML</ListGroupItem>
                    <ListGroupItem>-CSS</ListGroupItem>
                    <ListGroupItem>-JavaScript</ListGroupItem>
                    <ListGroupItem>-Node.js</ListGroupItem>
                    <ListGroupItem>-Express.js</ListGroupItem>
                    <ListGroupItem>-SQL</ListGroupItem>
                    <ListGroupItem>-Sequelize</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://drive.google.com/file/d/1AmvkXZNXgMtZ2ctiupo6GWxZTzZzbH-b/view">Video Walk Through</Card.Link>
                    <Card.Link href="https://github.com/jerismith32/challenge-13-ORM-E-commerce">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ NoteTaker } />
                <Card.Body>
                    <Card.Title>Social Network API: NoSQL</Card.Title>
                    <Card.Text>
                        This Code Quiz fullfils the following User Story:
                        "AS A social media startup
                        I WANT an API for my social network that uses a NoSQL database
                        SO THAT my website can handle large amounts of unstructured data"
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Built With:</ListGroupItem>
                    <ListGroupItem>-HTML</ListGroupItem>
                    <ListGroupItem>-CSS</ListGroupItem>
                    <ListGroupItem>-JavaScript</ListGroupItem>
                    <ListGroupItem>-Node.js</ListGroupItem>
                    <ListGroupItem>-Express.js</ListGroupItem>
                    <ListGroupItem>-MongoDB</ListGroupItem>
                    <ListGroupItem>-Mongoose</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://drive.google.com/file/d/1caMrx01uYP6cgk4brG44u3GJL8q2D0h8/view">Video Walk Through</Card.Link>
                    <Card.Link href="https://github.com/jerismith32/challenge-18-social-network-api">GitHub Repo Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
