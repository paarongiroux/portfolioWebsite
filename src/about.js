import React from 'react';
import './index.css';
import NavBar from './NavBar.js';

class About extends React.Component {
    render() {
        return (
            <div>
                < NavBar />
                <div className="container">
                    <div className="sectionContent0">
                        <div className="sectionTitle"> About Me </div>
                        <div>
                            Lorem ipsum dolor sit amet, quas omnis gubergren qui ex, euismod corpora consequat eam id. 
                            Eum utinam epicuri platonem et, ad mea dolor probatus. His menandri incorrupte at, 
                            id temporibus consectetuer sed. Eum vero modus cu, et has dicta offendit, mei homero molestie 
                            inciderint an. Possit adipiscing consectetuer mel eu, ad eam iusto partiendo.
                            <br></br>
                            <br></br>
                            Cum pertinacia dissentias reformidans eu, id qui maiorum prodesset deseruisse. 
                            Sint putant verterem te sea. Et meliore quaerendum cotidieque mea, nec te legimus voluptatibus, 
                            at probatus phaedrum duo. Vide omnis adhuc eum ut, ius iusto soluta theophrastus id. 
                            Ea malis option dolores eos, in quo sonet vivendum interpretaris. Error indoctum repudiare his no.
                            <br></br><br></br>
                        </div>
                    </div>
                    <div className="sectionContent1">
                        <div className="sectionTitle"> Eductation </div>
                        <div>
                            B.S. Computer Science, Minor in Math, Norhtern Arizona University, Flagstaff, AZ,
                            May, 2020, 3.86 GPA
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                    <div className="sectionContent0">
                        <div className="sectionTitle"> Work History </div>
                        <div>
                            <ul>
                                <li>
                                    12/19 - 3/20 - Student Trainee: IT Specialist 
                                    - U.S. Geological Survey
                                </li>
                                    <p className = "description"> &lt; job responsibilities go here &gt; </p>
                                <li> 2/19 - 12/19 - Student Contractor - U.S. Geological Survey </li>
                                    <p className = "description"> &lt; job responsibilities go here &gt; </p>
                                <li> 8/18 - 12/18 - Residential College Ambassador - Northern Arizona University </li>
                                <   p className = "description"> &lt; job responsibilities go here &gt; </p>
                            </ul>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                    <div className="sectionContent1">
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
                                <li> Jenkins CI: &lt; 1 years experience </li>
                                <li> Docker: &lt; 1 years experience </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sectionContent0">
                        <div className="sectionTitle"> Other Interests </div>
                        <div>
                            <ul>
                                <li> binchutles </li>
                                <li> longboards </li>
                                <li> gaming </li>
                            </ul>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div> 
            </div>
            
        );
    }
}

export default About;