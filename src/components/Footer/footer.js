import React from 'react';
import Logo from '../../assets/images/JeriSmithLogo.png';

export default function Footer() {
    return (
        <div>
            <footer>
                {/* <div>
                    <h2>
                        Made by Jeri Smith
                    </h2>
                </div> */}
                <div>
                    <img src={ Logo } className="logo" style={{ width: "10%" }} alt="Jeri Smith Logo" />
                    <h4>
                        {/* <a href="https://github.com/jerismith32" target="_blank">GitHub</a> */}
                        <a href="https://github.com/jerismith32">GitHub</a>
                    </h4>
                    <h4>
                        <a href="https://www.linkedin.com/in/jerismith32/">LinkedIn</a>
                    </h4>
                    <h4>
                        <a href="https://www.instagram.com/honeylemonchem/">Instagram</a>
                    </h4>
                </div>
        </footer>
        </div>
    )
}
