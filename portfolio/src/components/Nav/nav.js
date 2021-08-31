import React from 'react';

function Nav(props) {
    const {
        setCurrentCategory,
    } = props;

    return (
        <header>
            <h1>
                <a href="index.html">Jeri Smith</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about" onClick={() => setCurrentCategory('about')}>About Me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setCurrentCategory('contact')}>Contact Me</a>
                    </li>
                    <li>
                        <a href="assets/pdf/J.Smith Resume.pdf" target="_blank">Resume</a>
                    </li>
              </ul>
            </nav>
        </header>
    );
}

export default Nav;