import React from 'react';
import './index.css';
import NavBar from './NavBar.js';

class Projects extends React.Component {
    render() {
        return (
            <div>
                < NavBar />
                <div className="container">
                    here be me projects
                </div> 
            </div>
            
        );
    }
}

export default Projects;