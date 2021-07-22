import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Css files/nav.css";
import logo from "../Images/logo.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
export default function Navbarr() {
  useEffect(() => {
    const toggleBtn = document.querySelector(".sidebar-toggle");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.querySelector(".sidebar");
    const sideLinks = document.querySelector(".sidebar-links");
    sideLinks.addEventListener("click", function(){
      sidebar.classList.toggle("show-sidebar");
    })
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("show-sidebar");
    })

    closeBtn.addEventListener("click", function () {
      sidebar.classList.toggle("show-sidebar");
    })
  })
  return (
    <>
      <button className="sidebar-toggle" id="open">
      <span><MenuIcon className="menuIcon" fontSize="inherit"/></span>
      </button>
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="cc-logo"><img src={logo} className="logo" alt="" /><span className="logo-heading">Computer Club</span></div>
          <button className="close-btn" id="close">
            <span><CancelIcon/></span>
          </button>
        </div>
        <ul class="sidebar-links">
          <li>
            <Link to="/website-2020/" className="nav-spacing" id="about">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/website-2020/members" className="nav-spacing" id="members">
              Members
            </Link>
          </li>
          <li>
            <Link to="/website-2020/events" className="nav-spacing" id="events">
              Events
            </Link>
          </li>
          <li>
            <Link to="/website-2020/" className="nav-spacing" id="contact-us">
              Contact Us
            </Link>
          </li>
        </ul>

        <ul class="social-icons">
          <li>
            <a href="https://github.com/ComputerClubGS" id="github">
              <span className="icon1"><GitHubIcon /></span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/clubcomputer" id="instagram">
              <span className="icon2"><InstagramIcon /></span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/computerclub90" id="twitter">
              <span className="icon3"><TwitterIcon /></span>
            </a>
          </li>
          <li>
            <a href="https://youtube.com/channel/UCzaKHuHfJPMpfajm5g04l0A" id="youtube">
              <span className="icon4"><YouTubeIcon /></span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/company/computer-club-cc/" id="linkedin">
              <span className="icon5"><LinkedInIcon /></span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
