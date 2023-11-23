import React from 'react';


export default function Header() {
    return (
    <div className="section-site-header">
        <div class="container">
            <div className="logo-container">
            <img src={require("../Football/img/PL-ball-1.png").default} alt="Logo" />
            </div>
            <p className="site-title">Business</p>
            <nav className="main-nav">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Upcoming Games</a></li>
                    <div id="user">
                        <li><a href="#">Create Game</a></li>
                        <li><a href="#">Join Game</a></li>
                    </div>
                    <div id="guest">
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Login</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
    );
}
