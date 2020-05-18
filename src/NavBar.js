import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div class = "padded">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><a href="http://linkedin.com/in/pagiroux"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="http://github.com/paarongiroux"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;