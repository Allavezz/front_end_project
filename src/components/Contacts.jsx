import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';


const Contacts = ({ backgroundImage }) => {
	return (
		<section className='contacts section-padding' style={{ backgroundImage: `var(--gradient-bottom--grey), url(${backgroundImage}) ` }}>
			<div className='contacts__container'>
				<h2 className='contacts__title title title-mb'>Get in touch</h2>
				<ContactForm />

				<Link className={`contacts__btn btn btn--med ${location.pathname === '/contact' ? 'contacts__btn--hidden' : ''}`} to='/contact'>
					Contact page 
				</Link>
			</div>
		</section>
	);
};

export default Contacts;
