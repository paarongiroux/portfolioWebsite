import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className = "ctnr">
                    <form action="/action_page.php">
                        <label>Name</label>
                        <input type="text"id="fname"name="firstname"placeholder="First & last name"/>
                        <label>Email</label>
                        <input type="email"id="email"name="email"placeholder="Your email"/>
                        <label>Message</label>
                        <textarea id="subject"name="subject"placeholder="Write something"></textarea>
                        <input type="submit"value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;