import React from 'react';

import './index.css';
import NavBar from './NavBar.js';
import name from './res/name.png';
import avi from './res/avatar.jpg';
import kickflip from './res/kickflip.png';
import dropparty from './res/dropparty.png';
import rat from './res/rat.png';
import anagram from './res/anagram.png';

class Home extends React.Component {
    render() {
        return (
            
            <div className="pageContent">
                    <NavBar/>
                <div className="transitionContainer">
                    <div className="headerTitle">
                        <img src = {avi} class = "avatar"></img>
                        <img src={name} class = "centerImage"></img>
                        <h3>
                        I am a software developer from Phoenix, Arizona
                        <br/>
                        looking for new opportunites all throughout the country
                        </h3>
                    </div>
                    <div className="sectionContent0">
                        <div className="sectionTitle">About Me:</div>
                        <div className="sectionContent1">
                        <div className="aboutGrid">
                        <div className="experienceCard">
                            <h4>Eductation:</h4>
                            Northern Arizona University
                            <br/>
                            Bachelor of Science in Computer Science
                            <br/>
                            Minor in Mathematics
                            <br/>
                            Magna Cum Laude
                        </div>
                        <div className="experienceCard">
                            <h4>Work Experience:</h4>
                            U.S. Geological Survey - Flagstff, AZ
                            <br/>
                            Software Developer - Feb. 2019 - Mar. 2020
                            <br/>
                            Contributed to open source projecs such 
                            as <a href="https://github.com/USGS-Astrogeology/ISIS3">ISIS3</a> and <a href="https://github.com/USGS-Astrogeology/ale">ALE</a>
                            <br/>
                            Includes software testing, Python and C++ development, (continue developing this part)
                        </div>
                        </div>
                        </div>
                        

                        <div className="sectionTitle"> Tools and Technologies </div>
                        <div className="sectionContent1">
                        <div>
                            <ul>
                                <li> Python: 4+ years experience </li>
                                <li> Java: 4+ years experience </li>
                                <li> C: 3+ years experience    </li>
                                <li> C++: 2+ years experience   </li>
                                <li> Git / GitHub: 2+ years experience</li>
                                <li> CMake: 1 year experience</li>
                                <li> gtest: 1 year experience</li>
                                <li> pytest: 1 year experience </li>
                                <li> Django: &lt; 1 year experience </li>
                                <li> React: &lt; 1 year experience</li>
                                <li> Jenkins CI: &lt; 1 year experience </li>
                                <li> Docker: &lt; 1 year experience </li>
                            </ul>
                        </div>
                        </div>


                        <div className="sectionTitle"> Projects </div>
                        <div className="sectionContent1">
                        
                        <div className = "projectsGrid">
                            <div className = "projectCard"> 
                                <img src = {kickflip} className="projectImage"></img> 
                                <div className = "projectTextBlock">Kickflip</div> 
                            </div>
                            <div className = "projectCard">
                                <img src = {dropparty} className="projectImage"></img> 
                                <div className = "projectTextBlock">Drop Party</div> 
                            </div>
                            <div className = "projectCard">
                                <img src = {rat} className="projectImage"></img> 
                                <div className = "projectTextBlock">R.A.T.</div> 
                            </div>
                            <div className = "projectCard">
                                <img src = {anagram} className="projectImage"></img> 
                                <div className = "projectTextBlock">pyAnagram</div> 
                            </div>
                            <div className = "projectCard"> Project 5 </div>
                            <div className = "projectCard"> Project 6 </div>
                            <div className = "projectCard"> Project 7 </div>
                            <div className = "projectCard"> Project 8 </div>
                            <div className = "projectCard"> Project 9 </div>
                        </div>
                        </div>


                        <div className = "sectionTitle"> Contact Info: </div>
                        <div className="sectionContent1">
                        e-mail: p.aaron.giroux@gmail.com
                        <br></br>
                        phone: (602)-686-9169
                        <br></br>
                        linkedIn: <a href='https://linkedin.com/in/pagiroux'>linkedin.com/in/pagiroux</a>
                        <br></br>
                        gitHub: <a href='https://github.com/paarongiroux'>github.com/paarongiroux</a>
                        <br></br><br></br>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;