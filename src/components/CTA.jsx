import cta02 from '/assets/cta/cta02.jpg';
import cta01 from '/assets/cta/cta01.jpg';
import cta03 from '/assets/cta/cta03.jpg';
import cta04 from '/assets/cta/cta04.jpg';
import cta05 from '/assets/cta/cta05.jpg';
import cta06 from '/assets/cta/cta06.jpg';

const CTA = () => {
	return (
		<section className='cta section-padding'>
			<h2 className='cta__title title heading'>Why participate?</h2>
			<div className='cta__grid'>
				<div className='cta__grid-item'>
					<img src={cta01} alt='road' />
					<h4 className='cta__h4'>Beautiful roads</h4>
				</div>
				<div className='cta__grid-item'>
					<img src={cta02} alt='camping' />
					<h4 className='cta__h4'>Wild camping</h4>
				</div>
				<div className='cta__grid-item'>
					<img src={cta03} alt='nature' />
					<h4 className='cta__h4'>Explore nature</h4>
				</div>
				<div className='cta__grid-item'>
					<img src={cta04} alt='bounding' />
					<h4 className='cta__h4'>Meet like-minded people</h4>
				</div>
				<div className='cta__grid-item'>
					<img src={cta05} alt='rinding motorcycles' />
					<h4 className='cta__h4'>Discover the countryside</h4>
				</div>
				<div className='cta__grid-item'>
					<img src={cta06} alt='monument' />
					<h4 className='cta__h4'>Visit unique monuments</h4>
				</div>
			</div>
		</section>
	);
};

export default CTA;
