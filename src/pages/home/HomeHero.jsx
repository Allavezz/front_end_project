import React, { useState, useEffect } from 'react';
import { slidesHero } from '../../data/data.json';
import { Link } from 'react-router-dom';

const HomeHero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const nextSlide = (currentSlide + 1) % slidesHero.length;
		const intervalId = setInterval(() => {
			setCurrentSlide(nextSlide);
		}, 5000);

		return () => clearInterval(intervalId);
	}, [currentSlide]);

	const goToSlide = index => {
		setCurrentSlide(index);
	};

	const goToPrevSlide = () => {
		const prevSlide = (currentSlide - 1 + slidesHero.length) % slidesHero.length;
		setCurrentSlide(prevSlide);
	};

	const goToNextSlide = () => {
		const nextSlide = (currentSlide + 1) % slidesHero.length;
		setCurrentSlide(nextSlide);
	};

	return (
		<section className='home-hero hero'>
			{slidesHero.map((slide, index) => (
				<div key={slide.id} className={`home-hero__slide ${index === currentSlide ? 'home-hero__slide--active' : ''}`} style={{ backgroundImage: `var(--gradient-hero--grey), url(${slide.image})` }}>
					<div className={` home-hero__content ${index === currentSlide ? 'home-hero__content--active' : ''}`}>
						<h1 className='home-hero__title hero-title'>{slide.title}</h1>
						<p className='home-hero__text text text--big'>{slide.description}</p>
						{index === 0 ? (
							<a className='home-hero__button btn btn--med' href={slide.link}>
								{slide.button}
							</a>
						) : (
							<Link className='home-hero__button btn btn--med' to={slide.link}>
								{slide.button}
							</Link>
						)}
					</div>
				</div>
			))}

			<div className='home-hero__navigation-arrows'>
				<button onClick={goToPrevSlide}>&#10094;</button>
				<button onClick={goToNextSlide}>&#10095;</button>
			</div>

			<div className='home-hero__pagination'>
				{slidesHero.map((slide, index) => (
					<span key={slide.id} className={`home-hero__dot ${index === currentSlide ? 'home-hero__dot--active' : ''}`} onClick={() => goToSlide(index)}></span>
				))}
			</div>
		</section>
	);
};

export default HomeHero;
