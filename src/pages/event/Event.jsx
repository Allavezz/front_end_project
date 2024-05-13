import { events } from '../../data/data.json';
import EventHero from './EventHero';



import cloudyDay01 from '/assets/cloudyDay01.svg';
import { useParams } from 'react-router-dom';

const Event = () => {
	const { eventId } = useParams();
	const event = events.find(event => event.id === eventId);

	return (
		<main className='event'>
			<section className='event__hero hero-image' style={{ backgroundImage: `var(--gradient-hero--grey), url(${event.hero})` }}>
				<div className='event__heading'>
					<h2 className='event__title hero-title hero-title--small'>{event.id}</h2>
					<div className='event__weather-wrapper'>
						<h3 className=' event__weather-capital title title--small'>{event.capital}</h3>
						<div className='event__weather'>
							<img className='event__weather-image' src={cloudyDay01} alt='weather image' />
							<div className='event__weather-data'>
								<div className='event__temperature'>
									<p className='event__temperature-number'>
										17 <span className='event__celcius'>ºC</span>
									</p>
								</div>
								<div className='event__conditions'>
									<p>
										Rain: <span>7%</span>
									</p>
									<p>
										Humidity: <span>47%</span>
									</p>
									<p>
										Wind: <span> 21 km/h</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='event__intro'>
				<div className='event__intro-container'>
					<div>

					</div>
					<div className='event__vertical-image'>
						<img src={event.image} alt='' />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Event;
