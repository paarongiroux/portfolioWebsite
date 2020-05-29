import React from 'react';
import $ from "jquery";
import './index.css';
import NavBar from './NavBar.js';
import Contact from './Contact.js';

import name from './res/name.png';
import avi from './res/avatar.jpg';
import kickflip from './res/kickflip.png';
import dropparty from './res/dropparty.png';
import rat from './res/rat.png';
import anagram from './res/anagram.png';
import instabot from './res/instabot.png';
import simulator from './res/simulator.png';
import ghost from './res/ghost.png';
import trans from './res/trans.png';
import chat from './res/chat.png';


class Home extends React.Component {
    render() {
        return (
            
            <div className="pageContent">
                <NavBar/> 
                    
                <div className="transitionContainer">
                    <div className="fadeScroll">
                    <div className="headerTitle">
                        <img src = {avi} class = "avatar"></img>
                        <img src={name} class = "centerImage"></img>
                        <h3>
                        I am a software developer from Phoenix, Arizona
                        <br/>
                        looking for new opportunites all throughout the country
                        </h3>
                    </div>
                    </div>

                    <div className="sectionContent0">
                        

                        <div className="sectionTitle" id="about">About Me:</div>
                        <div className="sectionContent1">
                            <p>I love using my skills to create epic win shit</p>
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


                        <div className="sectionTitle" id="projects"> Projects </div>
                        <div className="sectionContent1">
                        
                        <p>Here are a few projects that I'm proud of:</p>
                        <div className = "projectsGrid">
                            <div className = "projectCard" onClick={() => displayMore("kickflip")}> 
                                <img src = {kickflip} className="projectImage"></img> 
                                <div className = "projectTextBlock">Kickflip</div> 
                            </div>
                            <div className = "projectCard" onClick={() => displayMore("dischat")}>
                                <img src = {chat} className="projectImage"></img> 
                                <div className = "projectTextBlock">Distributed Chat</div> 
                            </div>
                            <div className = "projectCard" onClick={() => displayMore("rat")}>
                                <img src = {rat} className="projectImage"></img> 
                                <div className = "projectTextBlock">R.A.T.</div> 
                            </div>
                            <div className = "projectCard" onClick={() => displayMore("anagram")}>
                                <img src = {anagram} className="projectImage"></img> 
                                <div className = "projectTextBlock">pyAnagram</div> 
                            </div>
                            <div className = "projectCard" onClick={() => displayMore("instabot")}>
                                <img src = {instabot} className="projectImage"></img> 
                                <div className = "projectTextBlock">instabot</div> 
                            </div>
                            <div className = "projectCard" onClick={() => displayMore("sim")}>
                                <img src = {simulator} className="projectImage"></img> 
                                <div className = "projectTextBlock">OS simulator</div> 
                            </div>
                            <div className = "projectCard" onClick={() => displayMore("ghost")}>
                                <img src = {ghost} className="projectImage"></img> 
                                <div className = "projectTextBlock">Ghost GB</div> 
                            </div>
                            <div className = "projectCard" onClick={() => displayMore("trans")}>
                                <img src = {trans} className="projectImage"></img> 
                                <div className = "projectTextBlock">Transaction Server</div> 
                            </div>
                            <div className = "projectCard" onClick={() => displayMore("dropparty")}>
                                <img src = {dropparty} className="projectImage"></img> 
                                <div className = "projectTextBlock">Drop Party</div> 
                            </div>
                        </div>
                           <p>Check out my <a href="https://github.com/paarongiroux"> gitHub</a> for even more projects </p>
                        </div>


                        <div className = "sectionTitle" id="contact"> Contact Info: </div>
                        <div className="sectionContent1">
                            <p> I am always looking for new connections and opportunities. Feel free to reach out to me for any questions or collaboration opportunites.</p>
                            <Contact/>
                            <p class = "center">
                                <i class="fa fa-phone" aria-hidden="true"></i> (602)-686-9169
                                <br></br>
                                <i class="fa fa-envelope"></i> <a href='mailto:p.aaron.giroux@gmail.com'>p.aaron.giroux@gmail.com</a>
                                <br></br>
                                <i class="fa fa-linkedin"></i> <a href='https://linkedin.com/in/pagiroux'>linkedin.com/in/pagiroux</a>
                                <br></br>
                                <i class="fa fa-github"></i> <a href='https://github.com/paarongiroux'>github.com/paarongiroux</a>
                                <br></br><br></br>
                            </p>
                            
                        </div>
                    </div>
                </div>


                <div id="infoModal" class="modal">
                    <div class="modal-content">
                        <span class="close" onClick={closeMore}>&times;</span>
                        <p id="projectInfo"></p>
                    </div>
                </div>


            </div>
            
        );
    }
}


function displayMore(projectName)
{
    var dict = {
        "kickflip": '<div class="modalTitle"> Kickflip</div> <div class="modalContent">2D pixel art game written in java using the JFrame library.</div>',
        "dischat":'<div class="modalTitle"> Distributed Chat System </div> <div class="modalContent">Distributed peer-to-peer chat system using a ring topology. Written in java using the java.net library to handle all connections between chat nodes.</div>',
        "rat": '<div class="modalTitle">  Robot Assisted Tours</div> <div class="modalContent">Senior capstone project Fall/Spring 2020. <br> Worked with a team of five to build a navigation module for a thirty gallon robot.</div>',
        "anagram": '<div class="modalTitle"> pyAnagram </div> <div class="modalContent">Simple anagram solving algorithm written and developed by me in python</div>',
        "instabot": '<div class="modalTitle"> Binchutle Instagram Bot </div> <div class="modalContent">Python bot that uses selenium to grab a random image from google, generates a random caption and posts on instagram. @binchutle</div>',
        "sim": '<div class="modalTitle"> OS Simulator </div> <div class="modalContent">Operating system simulator written in C. Includes memory management, I/O and processor jobs, as well as seven different CPU scheduling options including various preemptive and not preemptive techniques.</div>',
        "ghost": '<div class="modalTitle"> Ghost </div> <div class="modalContent">2D Platformer game written in C using the gbdk library. Capable of running on any gameboy emulator.</div>',
        "trans": '<div class="modalTitle"> Distributed Transaction Server </div> <div class="modalContent">Distributed transaction server written in java using java.net library.</div>',
        "dropparty": '<div class="modalTitle"> Drop Party </div> <div class="modalContent">2D pixel art game written in java using the JFrame library. Includes a main menu, high scores table and music.</div>'
    };  
    var projectInfo = document.getElementById("projectInfo");
    var modal = document.getElementById("infoModal");

    projectInfo.innerHTML = dict[projectName];
    modal.style.display = "block";
    

}

function closeMore()
{
    var modal = document.getElementById("infoModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("infoModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

$(function() {
    var documentEl = $(document);
    var fadeElem = $('.fadeScroll');

    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function() {
            var $this = $(this);
            var elemOffsetTop = $this.offset().top;

            if (currScrollPos > elemOffsetTop) {
                $this.css('opacity', 1 - (currScrollPos - elemOffsetTop)/ 1000);
            }
        });
    });
});



export default Home;