import React from "react";
import "./style.css"

function Contact() {
    return (
        <section className="container container-fluid color-background">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Phone Number: (801) 879-4638</label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label> <a href="mailto:martinlmartinez1983@gmail.com"> martinlmartinez1983@gmail.com</a>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Github: </label>
                    <a href="https://github.com/MartinMartinez83" className="card-link" target="_blank" rel="noopener noreferrer"> MartinMartinez83</a>
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin">Linkedin: </label>
                    <a href="https://www.linkedin.com/in/martinluismartinez1983" className="card-link" target="_blank" rel="noopener noreferrer"> Martin Martinez</a>
                </div>
            </form>
        </section>
    );
}

export default Contact;
