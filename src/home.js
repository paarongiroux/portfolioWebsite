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
import python from './res/python.png';
import java from './res/java.png';
import c from './res/c.png';
import cpp from './res/C++.png';
import git from './res/git.png';
import github from './res/github.png';
import cmake from './res/cmake.png';
import django from './res/django.png';
import react from './res/react.png';
import jenkins from './res/jenkins.png';
import docker from './res/docker.png';
import aws from './res/aws.png';
import javascript from './res/javascript.png';
import html from './res/html.png';
import css from './res/css.png';

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
                            <p>
                                My name is Peter Aaron Giroux, but I ususally go by Aaron. 
                                I am a recent graduate from Northern Arizona University with 
                                just over one year of experience developing software at the U.S. 
                                Geological Survey. I love using math and computer science to 
                                solve complex problems, explore new technologies or just have 
                                fun and experiment with things.
                            </p>
                            <p>
                                Take a look around the rest of the site to learn more about 
                                me and some of the projects that I've worked on!
                            </p>
                        <div className="aboutGrid">
                        <div className="experienceCard">
                            <h4> &nbsp; Eductation:</h4>
                            <p>
                                <span className="bold">Northern Arizona University</span>
                                <br/>Aug. 2016 - May 2020
                                    <ul className="openCircle">
                                        <li>B.S. Computer Science</li>
                                        <li>Minor in Mathematics</li>
                                        <li>Magna Cum Laude</li>
                                    </ul>
                            </p>
                            
                        </div>
                        <div className="experienceCard">
                            <h4> &nbsp; Work Experience:</h4>
                            <p>
                                <span className="bold">U.S. Geological Survey - Flagstff, AZ</span>
                                <br/>Software Developer Feb. 2019 - Mar. 2020
                                <ul className="openCircle">
                                    <li>
                                        Contributed to open source projecs such as <a href="https://github.com/USGS-Astrogeology/ISIS3">ISIS3</a> and <a href="https://github.com/USGS-Astrogeology/ale">ALE</a>
                                    </li>
                                    <li>
                                        Transformed unit testing to a more modern approach
                                    </li>
                                    <li>
                                        Some DevOps work including work with JenkinsCI, Docker and GitLFS
                                    </li>
                                    <li>
                                        Analyzed and processed large planetary data sets
                                    </li>
                                </ul>
                            </p>
                        </div>
                        </div> 
                        </div>
                        
                        

                        <div className="sectionTitle"> Tools and Technologies </div>
                        <div className="sectionContent1">
                            <p> Some of the languages and tools that I'm experienced with: <br/><br/><br/></p>
                        <div className="toolsGrid">
                            <div className="toolsCard">
                                <img src = {python} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {java} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {c} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {cpp} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {git} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {github} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {cmake} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {django} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {react} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {jenkins} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {docker} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {aws} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {javascript} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {html} className="toolsImage"></img>
                            </div>
                            <div className="toolsCard">
                                <img src = {css} className="toolsImage"></img>
                            </div>
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
                            <p className="center"> I am always looking for new connections and opportunities. </p>
                            <p className="center">Feel free to reach out to me for any questions or collaboration opportunites.</p>
                            <br/>
                            <br/>
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
        "kickflip": '<div class="modalTitle"> Kickflip</div> <div class="modalContent">2D skate boarding pixel art game written in java using the JFrame library. <p class="modalIcon"> <a href="https://github.com/paarongiroux/kickflip"><i class="fa fa-github"></i> </a> </p></div>',
        "dischat":'<div class="modalTitle"> Distributed Chat System </div> <div class="modalContent">Distributed peer-to-peer chat system using a ring topology. Written in java using the java.net library to handle all connections between chat nodes. <p class="modalIcon"> <a href="https://github.com/paarongiroux/DistributedChat"><i class="fa fa-github"></i> </a> </p> </div>',
        "rat": '<div class="modalTitle">  Robot Assisted Tours</div> <div class="modalContent">Senior capstone project Fall/Spring 2020. <br> Worked with a team of five to build a navigation module for a thirty gallon robot. <p class="modalIcon"> <a href="https://www.youtube.com/watch?v=z8fE4ZqNNHg"><i class="fa fa-youtube-play"></i> </a> </p></div>',
        "anagram": '<div class="modalTitle"> pyAnagram </div> <div class="modalContent">Simple anagram solving algorithm written and developed by me in python <p class="modalIcon"> <a href="https://github.com/paarongiroux/AnagramSolver"><i class="fa fa-github"></i> </a> </p></div>',
        "instabot": '<div class="modalTitle"> Binchutle Instagram Bot </div> <div class="modalContent">Python bot that uses selenium to grab a random image from google, generates a random caption and posts on instagram. Check it out: <a href="https://www.instagram.com/binchutle/">@binchutle</a> <p class="modalIcon"> <a href="https://github.com/paarongiroux/RandomInstaBot"><i class="fa fa-github"></i> </a> </p> </div>',
        "sim": '<div class="modalTitle"> OS Simulator </div> <div class="modalContent">Operating system simulator written in C. Includes memory management, I/O and processor jobs, as well as seven different CPU scheduling options including various preemptive and not preemptive techniques.</div>',
        "ghost": '<div class="modalTitle"> Ghost </div> <div class="modalContent">2D Platformer game written in C using the gbdk library. Capable of running on any gameboy emulator. <p class="modalIcon"> <a href="https://github.com/paarongiroux/ghostgame"><i class="fa fa-github"></i> </a> </p> </div>',
        "trans": '<div class="modalTitle"> Distributed Transaction Server </div> <div class="modalContent">Distributed transaction server written in java using java.net library. <p class="modalIcon"> <a href="https://github.com/paarongiroux/TransactionServer"><i class="fa fa-github"></i> </a> </p> </div>',
        "dropparty": '<div class="modalTitle"> Drop Party </div> <div class="modalContent">2D pixel art game written in java using the JFrame library. Includes a main menu, high scores table and music.  <p class="modalIcon"> <a href="https://www.youtube.com/watch?v=qHk6Ol-7aOk"><i class="fa fa-youtube-play"></i> </a> </p> </div>'
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