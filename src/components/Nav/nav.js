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
                        <a href="#portfolio" onClick={() => setCurrentCategory('portfolio')}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setCurrentCategory('contact')}>Contact Me</a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => setCurrentCategory('resume')}>Resume</a>
                    </li>
              </ul>
            </nav>
        </header>
    );
}

export default Nav;