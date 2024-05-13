/* import homeAbout from '/assets/home/homeAbout.jpg'; */
import homeIntro from '/assets/home/homeIntro.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Stats from '../../components/Stats';

const HomeIntro = () => {
	return (
		<section id='home-intro' className='home-intro section-padding'>
			<div className='home-intro__container'>
				<div className='home-intro__image'>
					<img src={homeIntro} alt='homeintro' />
				</div>
				<div className='home-intro__content'>
					<h2 className='home-intro__title title'>About us</h2>
					<p className='home-intro__text section-text'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem atque voluptates vero minus iusto perferendis. Ullam suscipit placeat reiciendis harum eius officia tempore
						consequatur magni? Magnam libero ex asperiores magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, cupiditate voluptatibus sapiente nemo quisquam modi. Lorem ipsum dolor
						sit amet consectetur adipisicing elit.
					</p>

					<p className='home-intro__text section-text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at eaque, eius molestiae fuga ad itaque repudiandae delectus facilis exercitationem labore saepe, quam praesentium cum optio
						laudantium! Sit, amet asperiores? Maxime temporibus at, eius tempore ad cum eaque voluptatum autem eveniet debitis.
					</p>
					<Stats />

					<Link className='home-intro__btn btn btn--med' to='/about'>
						{' '}
						Read More <FaArrowRight className='arrow-right' />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeIntro;
