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
                        <a href="maps:Computer Engineering Department, SGSITS, Indore (M.P.)" ><li>
                        <i className="fa fa-map-marker" aria-hidden="true"/>
                        &nbsp;&nbsp;Computer Engineering Department, SGSITS, Indore (M.P.)
                        </li>
                        </a>
                        <a href="tel:+91 93400-52393" ><li >
                        <i className="fa fa-phone" aria-hidden="true"/>
                        &nbsp;&nbsp;+91 93400-52393
                        </li>
                        </a>
                        <a href="mailto:computerclub90@gmail.com" ><li>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        &nbsp;&nbsp;computerclub90@gmail.com
                        </li>
                        </a>
                    </ul>
                </div>
                <div className="feedback">
                    <h6>You can give your valuable feedback here.</h6>
                    <span><Feedback/></span>
                </div>
            </div>
            <div className="footer-end">
                <div className="social-media">
                    <a href="https://github.com/ComputerClubGS" rel="noopener noreferrer" target="_blank" title="GitHub"><span className="git-icon"><GitHubIcon/></span></a>
                    <a href="https://instagram.com/clubcomputer"  rel="noopener noreferrer" target="_blank" title="Instagram"><span className="ig-icon"><InstagramIcon/></span></a>
                    <a href="https://twitter.com/computerclub90" rel="noopener noreferrer" target="_blank" title="Twitter"><span className="twitter-icon"><TwitterIcon/></span></a>
                    <a href="https://youtube.com/channel/UCzaKHuHfJPMpfajm5g04l0A" rel="noopener noreferrer" target="_blank" title="Youtube"><span className="yt-icon"><YouTubeIcon/></span></a>
                    <a href="https://linkedin.com/company/computer-club-cc/" rel="noopener noreferrer" target="_blank" title="LinkedIn"><span className="li-icon"><LinkedInIcon/></span></a>
                </div>
            </div>
        </div>  
        )
}