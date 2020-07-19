import React from 'react';
import Footer from './Footer';
import './css/Header.css';
import Logo from './images/mostakLogo.png';

function Header(){
    return(    
    <>
		<header id="header">
				<div className="inner">
                    <span className="image avatar"><img src={Logo} alt="Mostak Solutions Pvt. Ltd." style={{position: "static"}}/></span>
                    <h1><strong>MOSTAK Solutions Pvt. Ltd.</strong><br />
					We Transform Your Vision into Testing<br />
					Design and Developed by <a href="http://mostak.co.uk/">Mostak</a>.
                    </h1>
                </div>
                <Footer/>
		</header>
        
    </>
    )
}

export default Header;