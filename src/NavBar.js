import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div class = "padded">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
                <ul className = "navul">
                    <li className = "navli"><Link to="/">Home</Link></li>
                    <li className = "navli"><Link to="/projects">Projects</Link></li>
                    <li className = "navli"><Link to="/contact">Contact</Link></li>
                    <li className = "navli"><a href="http://linkedin.com/in/pagiroux"><i class="fa fa-linkedin"></i></a></li>
                    <li className = "navli"><a href="http://github.com/paarongiroux"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;