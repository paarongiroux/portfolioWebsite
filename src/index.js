import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar.js';
import name from './res/name.png';
import avi from './res/avi.jpg';
import {BrowserRouter } from 'react-router-dom';

class Content extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="title">
                    <img src = {avi} class = "avatar"></img>
                    <img src={name} class = "centerImage"></img>
                </div>
                <div className="sectionContent0">
                <div className="sectionTitle">
                    About Me:
                </div>
                    Lorem ipsum dolor sit amet, quas omnis gubergren qui ex, euismod corpora consequat eam id. Eum utinam epicuri platonem et, ad mea dolor probatus. His menandri incorrupte at, id temporibus consectetuer sed. Eum vero modus cu, et has dicta offendit, mei homero molestie inciderint an. Possit adipiscing consectetuer mel eu, ad eam iusto partiendo.
                    <br></br>
                    <br></br>
                    Cum pertinacia dissentias reformidans eu, id qui maiorum prodesset deseruisse. Sint putant verterem te sea. Et meliore quaerendum cotidieque mea, nec te legimus voluptatibus, at probatus phaedrum duo. Vide omnis adhuc eum ut, ius iusto soluta theophrastus id. Ea malis option dolores eos, in quo sonet vivendum interpretaris. Error indoctum repudiare his no.
                    <br></br><br></br>
                </div>
                <div className="sectionContent1">
                    <div className = "sectionTitle">
                        Contact Me:
                    </div>
                    e-mail: p.aaron.giroux@gmail.com
                    <br></br>
                    phone: (602)-686-9169
                    <br></br>
                    linkedIn: https://linkedin.com/in/pagiroux
                    <br></br>
                    gitHub: https://github.com/paarongiroux
                    <br></br><br></br>
                </div>
            </div>
            
        
        
        );
    }
}
  
ReactDOM.render((
    <browserRouter>
        <Content />
    </browserRouter>
    ),
    document.getElementById('root')
);