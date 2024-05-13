import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const EventCard = ({ id, text, image, link, cardGradient }) => {
	return (
		<div key={id} className='event-card'>
			<div className={`event-card__image-wrapper ${cardGradient}`}>
				<img src={image} alt='' />
			</div>
			<div className='event-card__content'>
				<h4 className='article-title'>{id}</h4>
				<p className='text'>{text}</p>
				<Link className='event-card__btn btn btn--med btn--inverse' to={link}>
					Discover More <FaArrowRight className='arrow-right' /></Link>
			</div>
		</div>
	);
};

export default EventCard;
