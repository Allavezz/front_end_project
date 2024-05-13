import EventCard from './EventCard';
import { events } from '../data/data.json';


const NextEvents = ({ backgroundImage, backgroundColor, cardGradient }) => {
	return (
		<section className='next-events section-padding' style={{ backgroundImage: backgroundImage, backgroundColor: backgroundColor }}>
			<div className='next-events__heading heading'>
				<h2 className='next-events__title title'>Discover our next events</h2>
				<p className='next-events__text text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates cumque odio!</p>
			</div>
			<div className='next-events__container'>
				{events.map(event => (
					<div className='next-events__card-wrapper'>
						<EventCard
							key={event.id}
							id={event.id}
							title={event.title}
							text={event.text}
							image={event.image}
							link={`/events/${event.id}`}
							cardGradient={cardGradient}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default NextEvents;
