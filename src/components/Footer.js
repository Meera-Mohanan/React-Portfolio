import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className="footer">
            <div className='footerLink' >
                <a href='https://github.com/Meera-Mohanan' target='_blank' rel='noreferrer'><FaGithub style={{fontSize:'35px' }} /></a>
                <div className='Email'> <MdOutlineEmail />meervarun23@gmail.com</div>
            </div>
        </footer>
    )
}

export default Footer;