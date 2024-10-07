import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
const TeamItem = () => {
    return (
   
            <div className="team py-3">
                <div className="team-img">
                    <img src={require("./../assets/users.webp")} alt="team" />
                </div>
                <div className="team-info">
                    <h5 className="team-name">Lorem Ipsum</h5>
                    <h6 className="team-position">Lorem ipsum dolor</h6>
                    <div className="social-links">
                        <div className="social-item">
                            <a><FaFacebook/></a>
                        </div>
                        <div className="social-item">
                            <a><FaTwitter/></a>
                        </div>
                        <div className="social-item">
                            <a><FaInstagram/></a>
                        </div>
                        <div className="social-item">
                            <a><FaLinkedin/></a>
                        </div>
                    
                    </div>
                </div>
            </div>

    )
}

export default TeamItem