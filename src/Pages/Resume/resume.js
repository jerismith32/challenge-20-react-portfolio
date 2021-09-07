import React from 'react';
// import Resume from '../../assets/pdf/Resume.pdf';

export default function Resume() {
    return (
        <div id="resume">
            
            <h1> Development Skills </h1>
            <ul>
                <li> HTML </li>
                <li> CSS </li>
                <li>JavaScript</li>
                <li>CSS Templates and Frameworks such as Bootstrap</li>
                <li>Web APIs</li>
                <li>JQuery</li>
                <li>Node.js</li>
                <li>Testing with Jest</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>Handlebars.js</li>
                <li>MongoDB</li>
                <li>Progressive Web Applications</li>
                <li>React</li>
            </ul>
            <h4>
                <a href={ require("../../assets/pdf/Resume.pdf").default} download>Click Here to Download My Resume!</a>
            </h4>
        </div>
    )
}
