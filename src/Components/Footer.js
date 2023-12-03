import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Anuj Tripathi</p>
                        <p>Dayalbagh Educational Institute</p>
                        <p>Agra-2201655</p>
                        <p>Uttar Pradest</p>
                        <p>India</p>
                        <p><b>Email:</b>dei123@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Anuj Tripathi</p>
                        <p>Civil Engineer</p>
                        <p>Contact: +91 9123456787</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='https://twitter.com/AnujTri98176143' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.linkedin.com/in/anuj-tripathi-4311651b6/' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://web.telegram.org/k/' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.instagram.com/anuj_tripathiii/' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2020 copyright all right reserved<br /><span>Designed with ❤️ by Anuj Tripathi</span></p>
            </div>
        </div>
    )
}

export default Footer