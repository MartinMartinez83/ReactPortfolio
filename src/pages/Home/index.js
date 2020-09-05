import React from "react";
import Profile from "../../images/ProfilePic.jpg";
import "./style.css";
import Resume from "../../files/resume.pdf"


function Home() {
    return (
        <section className="container color-background">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <h2>About Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={Profile} alt="Martin Martinez" className="img-thumbnail" />
                        </div>
                        <div className="col-md-9">
                            <h3>
                                Originally from Argentina. Looking for a career change at 37 sounds scary but I am really excited!!
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="resume">
                    <a href={Resume} rel="nofollow noreferrer" target="_blank" className="resume">
                        <h4>Resume</h4>
                    </a>
                </div>
            </div>
            <div className="fill"></div>
        </section >
    );
}

export default Home;