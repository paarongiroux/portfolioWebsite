import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar.js';

class Content extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
            </div> 
        );
    }
}
  
ReactDOM.render(
    <Content />,
    document.getElementById('root')
);