import React from 'react';
import '../Css files/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Feedback from './Model';
  export default function Footer()
{
    return(
        <div className="footer">
            <div className="footer-header">
               <h2> CONTACT</h2>
            </div>
            <div className="footer-body">
            <div className="contact">
                    <ul> 
                        <li>
                        <i className="fa fa-map-marker" aria-hidden="true"/>
                        <span className="space">__</span>CSE dept. SGSITS,Indore (M.P.)
                        </li>
                        <li >
                        <i className="fa fa-phone" aria-hidden="true"/>
                        <span className="space">__</span>+91 9340052393
                        </li>
                        <li>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                            <span className="space">__</span>computerclub90@gmail.com
                        </li>
                    </ul>
                </div>
                <div className="feedback">
                    <h6>You can give your valuable feedback here.</h6>
                    <span><Feedback/></span>
                </div>
            </div>
            <div className="footer-end">
                <div className="social-media">
                    <span><GitHubIcon/></span>
                    <span><InstagramIcon/></span>
                    <span><TwitterIcon/></span>
                    <span><YouTubeIcon/></span>
                    <span><LinkedInIcon/></span>
                </div>
            </div>
        </div>  
        )
}