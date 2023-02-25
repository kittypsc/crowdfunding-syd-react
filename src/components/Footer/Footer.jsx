import React from "react";
import "./Footer.css";
import { FaRegEnvelope } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer(){


    return (
            <div>
                <div>
                    <div className="contact-info">
                        <div className="contact-info2">
                            <div className="contact-info3">
                            <FaFacebookSquare className="social-icons" /><FaInstagram className="social-icons" />
                            </div>
                            <div className="contact-info3">
                            <p> <FaRegEnvelope className="env-icon" /> ourwishinwell@gmail.com</p>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
                
            </div>
    
        )
};

export default Footer;