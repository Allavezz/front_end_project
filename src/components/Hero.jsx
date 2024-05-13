import React from 'react';

const Hero = ({ title, backgroundImage, text }) => {
	return (
		<section className='hero' style={{ backgroundImage: `var(--gradient-hero--grey), url(${backgroundImage})` }}>
			<div className='hero__content'>
				<h1 className='hero__title hero-title'>{title}</h1>
				<p className='hero__text text text--big'>{text}</p>
			</div>
		</section>
	);
};

export default Hero;
