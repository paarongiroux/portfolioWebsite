import React from 'react';
import './index.css';
import NavBar from './NavBar.js';

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                < NavBar />
                Just send me an email fool.
            </div> 
        );
    }
}

export default Contact;