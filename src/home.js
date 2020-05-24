import React from 'react';

import './index.css';
import NavBar from './NavBar.js';
import name from './res/name.png';
import avi from './res/avatar.jpg';
import nauLogo from './res/nau.png';
import usgsLogo from './res/usgs.png';

class Home extends React.Component {
    render() {
        return (
            
            <div className="pageContent">
                    <NavBar />
                    <div className="sectionContent0">
                    
                    <img src = {avi} class = "avatar"></img>
                    <img src={name} class = "centerImage"></img>
                    <hr/>
                    <div className="sectionTitle">
                        About Me:
                    </div>
                        My name is Peter Aaron Giroux, but I usually go by my middle name, 
                        Aaron. I am 22 years old and a recent graduate from Northern 
                        Arizona University with a B.S. in Computer Science and a minor in Math. 
                        During my time at NAU, I gained valuable knowledge of many of the 
                        fundamentals of programming and software development. I also became 
                        fluent in Python, Java, C and C++, as well as had the opportunity to 
                        develop projects in other languages such as Kotlin, Dart, Scheme, and more.
                        <br/><br/>
                        From February 2019 to March 2020, I worked as a software developer 
                        at the U.S. Geological Survey Astrogeology Science Center. Here, 
                        I was able to apply the skills I had been learning at school while 
                        contributing to open source software used by the planetary science 
                        community. During my time at USGS, I would attend regular meetings 
                        with the rest of the development team which allowed me to gain valuable 
                        insights and experience to the entire development cycle of a 
                        software project. I was also able to learn a lot about software 
                        testing, and spent a lot of time writing tests in gtest for C++ and 
                        pytest for Python. I was also able to spend time working with and 
                        learning about many new technologies such as Jenkins CI, Docker and 
                        Git LFS. In addition to the technical skills I picked up at USGS, 
                        I was also able to learn a lot about areas that were foreign to me 
                        such as astrogeology, sensor models, planetary data standards, 
                        and a lot of the math that goes along with it.
                        <br/><br/>
                        Currently, I am looking for new opportunities that will allow me 
                        to put my skills picked up at NAU and USGS to good use. I am seeking 
                        a work environment that will challenge me to learn more skills, 
                        as well as utilize my skillset that I have already built up. I am 
                        confident that my technical abilities, as well as my desire to 
                        learn new skills and technologies will make me an excellent developer 
                        in the future.
                        <hr/>
                        <div className="sectionTitle"> Eductation </div>
                        <div>
                            <img src = {nauLogo} className = "nau"></img>
                            B.S. Computer Science, Minor in Math, Norhtern Arizona University, Flagstaff, AZ,
                            May, 2020, 3.86 GPA
                            <hr/>
                        </div>
                        <div className="sectionTitle"> Work Experience </div>
                        <div>
                            <ul>
                                <li>
                                <img src = {usgsLogo} className = "nau"></img>
                                    12/19 - 3/20 - Student Trainee: IT Specialist 
                                    - U.S. Geological Survey
                                </li>
                                    <p className = "description"> &lt; job responsibilities go here &gt; </p>
                                <li> 2/19 - 12/19 - Student Contractor - U.S. Geological Survey </li>
                                    <p className = "description"> &lt; job responsibilities go here &gt; </p>
                                <li> 8/18 - 12/18 - Residential College Ambassador - Northern Arizona University </li>
                                    <p className = "description"> &lt; job responsibilities go here &gt; </p>
                            </ul>
                            <hr/>
                        </div>
                        <div className="sectionTitle"> Tools and Technologies </div>
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
                            <hr/>
                        </div>
                        <div className="sectionTitle"> Other Interests </div>
                        <div>
                            <ul>
                                <li> binchutles </li>
                                <li> longboards </li>
                                <li> gaming </li>
                            </ul>
                        </div>
                        <hr/>
                        <div className = "sectionTitle">
                            Contact Info:
                        </div>
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
            
        );
    }
}


export default Home;