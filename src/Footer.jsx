import React from 'react';
import './css/Footer.css';

const twitter = 'Twitter';
const fcbook = 'FaceBook';
const youtube = 'YouTube';
const mail = 'Mail';

function Footer(){
    return(
    <>
        <footer id="footer">
				<div className="inner">
					<ul className="icons">
						<li><a href="https://www.linkedin.com/in/mostak-solution-14607324/" target="#" className="icon brands fa-linkedin"><span className="label" >{twitter}</span></a></li>
						<li><a href="https://www.facebook.com/mostaksolutions/" target="#" className="icon brands fa-facebook"><span className="label">{fcbook}</span></a></li>
						<li><a href="https://www.youtube.com/channel/UCW-HUVs9u7LPtNw2O9D2zww" target="#" className="icon brands fa-youtube"><span className="label">{youtube}</span></a></li>
						<li><a href="mailto:chanchalpsoni@gmail.com" target="#" className="icon solid fa-envelope"><span className="label">{mail}</span></a></li>
					</ul>
					<ul className="copyright">
						<li>&copy; Mostak Solutions Pvt. Ltd. 2020-21</li><li>Design: <a href="http://mostak.co.uk/">Mostak</a></li>
					</ul>
				</div>
			</footer>
    </>
    )
}
export default Footer;