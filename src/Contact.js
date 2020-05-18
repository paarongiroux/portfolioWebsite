import React from 'react';
import './Contact.css';
import NavBar from './NavBar.js';

class Contact extends React.Component {
    render() {
        return (
            <div>
                < NavBar />
                <div className = "ctnr">
                    <div className = "sectionTitle">Contact Me:</div>
                    <form action="/action_page.php">
                        <label>Name</label>
                        <input type="text"id="fname"name="firstname"placeholder="First & Last Name."/>


                        <label>Email</label>
                        <input type="email"id="email"name="email"placeholder="Your email"/>


                        <label>Subject</label>
                        <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
                        <input type="submit"value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;