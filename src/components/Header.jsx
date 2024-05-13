import bannerWhite from '/assets/bannerWhite.png';
import bannerBlack from '/assets/bannerBlack.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { navLinks } from '../data/data.json';
import Toggle from './Toggle';

const Header = ({ handleChange, isChecked, isImage }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const scrolled = scrollTop > 50; // Adjust as needed
			setIsScrolled(scrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const [toggle, settoggle] = useState(false);

	

	return (
		<header className={`header ${isScrolled ? 'header--opaque' : 'header--transparent'}`}>
			<div className='header__container'>
				<div className='header__logo'>
					<Link to='/'>
						<img className='header__banner' src={isImage ? bannerBlack : bannerWhite} alt='logo' />
					</Link>
				</div>
				<Toggle isChecked={isChecked} handleChange={handleChange} />

				<nav className='header__nav'>
					<ul className='header__nav-links'>
						{navLinks.map((nav, index) => (
							<li className='header__nav-link' key={nav.id}>
								<NavLink to={nav.link} className={({ isActive }) => (isActive ? 'active' : '')}>
									{nav.title}
								</NavLink>
							</li>
						))}
					</ul>

					<div onClick={() => settoggle(prev => !prev)} className='header__toggle-menu'>
						{toggle ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
					</div>

					<ul
						className={`${
							toggle
								? `header__mobile-links ${isScrolled ? 'header__mobile-links--opaque' : 'header__mobile-links--transparent'}`
								: `header__mobile-links--hidden${isScrolled ? ' header__mobile-links--hidden--opaque' : ' header__mobile-links--hidden--transparent'}`
						}`}
					>
						{navLinks.map((nav, index) => (
							<li className='header__mobile-link' key={nav.id}>
								<NavLink to={nav.link} className={({ isActive }) => (isActive ? 'active' : '')}>
									{nav.title}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
