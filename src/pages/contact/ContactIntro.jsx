import React from 'react';
import Faq from '../../components/Faq';

const ContactIntro = () => {
	return (
		<section className='contact-intro section-padding'>
			<h2 className='contact-intro__title title heading'>How to participate</h2>
			<div className='contact-intro__container'>
				<div className='contact-intro__steps'>
					<h3 className='contact-intro__h3 title title--med'>Follow this steps to participate</h3>
					<ul className='contact-intro__list'>
						<li className='contact-intro__item'>
							<div className='contact-intro__step-number'>
								<span>1</span>
							</div>
							<p className='contact-intro__step-text text text--big'>Browse available events</p>
						</li>
						<li className='contact-intro__item'>
							<div className='contact-intro__step-number'>
								<span>2</span>
							</div>
							<p className='contact-intro__step-text text text--big'>Learn about our perks and services</p>
						</li>
						<li className='contact-intro__item'>
							<div className='contact-intro__step-number'>
								<span>3</span>
							</div>
							<p className='contact-intro__step-text text text--big'>Contact us</p>
						</li>
						<li className='contact-intro__item'>
							<div className='contact-intro__step-number'>
								<span>4</span>
							</div>
							<p className='contact-intro__step-text text text--big'>Reserve</p>
						</li>
					</ul>
				</div>
				<div className='contact-intro__faq'>
					<Faq />
				</div>
			</div>
		</section>
	);
};

export default ContactIntro;
