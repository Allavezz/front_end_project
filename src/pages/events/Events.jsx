import Hero from '../../components/Hero';
import Contacts from '../../components/Contacts';
import EventsIntro from './EventsIntro';
/* import Perks from '../../components/Perks'; */
import NextEvents from '../../components/NextEvents';
import eventsHero from '/assets/events/eventsHero.jpg';
import eventsContact from '/assets/events/eventsContact.jpg';
import { Outlet } from 'react-router-dom';

const Events = () => {
	return (
		<main>
			<Hero backgroundImage={eventsHero} title='Exploration' text='Travel the unknown world with us' />
			<EventsIntro />
			{/* <Perks /> */}
			<NextEvents backgroundImage={'var(--gradient-section--reverse)'} cardGradient={'event-card__image-wrapper--gradient-grey'} />
			<Outlet />
			<Contacts backgroundImage={eventsContact} />
		</main>
	);
};

export default Events;
