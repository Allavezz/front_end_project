import bannerWhite from '/assets/bannerWhite.png';
import bannerBlack from '/assets/bannerBlack.png';
import { navLinks } from '../data/data.json';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';



const Footer = ( {isImage} ) => {
	return (
		<footer className='footer'>
			<div className='footer__logo'>
				<Link to='/'>
					<img className='footer__banner' src={isImage ? bannerBlack : bannerWhite} alt='logo' />
				</Link>
			</div>
			<div className='footer__nav'>
				<ul className='footer__links'>
					{navLinks.map((nav, index) => (
						<li className='footer__link' key={nav.id}>
							<NavLink to={nav.link} className={({ isActive }) => (isActive ? 'active' : '')}>
								{nav.title}
							</NavLink>
						</li>
					))}
				</ul>
				<ul className='footer__socials'>
					{/* {socialLinks.map((social, index) => (
							<li className='nav-wrapper-socials__social' key={social.id}>
								<Link to={social.link}>{social.icon}</Link>
							</li>
						))} */}
					<li className='footer__social'>
						<a href='https://www.facebook.com' target='_blank'>
							<FaFacebook />
						</a>
					</li>
					<li className='footer__social'>
						<a href='https://www.instagram.com' target='_blank' title='Instagram'>
							<FaInstagram />
						</a>
					</li>
					<li className='footer__social'>
						<a to='https://www.twitter.com' target='_blank'>
							<FaXTwitter />
						</a>
					</li>
					<li className='footer__social'>
						<a href='https://www.youtube.com' target='_blank'>
							<FaYoutube />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
