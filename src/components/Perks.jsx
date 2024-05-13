import { perks } from '../data/data.json';

const Perks = () => {
	return (
		<>
			<section className='perks section-padding'>
				<div className='heading'>
					<h2 className='perks__title title'>Why our events</h2>
				</div>
				<div className='perks__container'>
					{perks.map((perks, index) => (
						<div className='perks__wrapper' key={perks.id}>
							<h3 className='perks__subtitle title title--med'>{perks.title}</h3>
							<ul className='perks__list'>
								<li className='perks__text-wrapper'>
									<span className='perks__span'>&#10004;</span>
									<p className='perks__text text'>{perks.text.p1}</p>
								</li>
								<li className='perks__text-wrapper'>
									<span className='perks__span'>&#10004;</span>
									<p className='perks__text text'>{perks.text.p2}</p>
								</li>
								<li className='perks__text-wrapper'>
									<span className='perks__span'>&#10004;</span>
									<p className='perks__text text'>{perks.text.p3}</p>
								</li>
								<li className='perks__text-wrapper'>
									<span className='perks__span'>&#10004;</span>
									<p className='perks__text text'>{perks.text.p4}</p>
								</li>
							</ul>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Perks;
