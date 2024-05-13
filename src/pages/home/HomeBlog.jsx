/* import { blogPost } from '../../data/data.json'; */
import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import BlogCard from '../../components/BlogCard';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel } from 'swiper/modules';

import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const HomeBlog = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch('/api/blogPost');
				const data = await res.json();
				setPosts(data);
			} catch (error) {
				console.log('Error fetching data', error);
			} finally {
				setLoading(false);
			}
		};
		fetchPosts();
	}, []);

	let reversedPosts = [...posts].reverse();

	return (
		<section className='home-blog section-padding'>
			<div className='home-blog__heading heading'>
				<h2 className='home-blog__title title title-mb'>Latest on our blog</h2>
				<p className='home-blog__text text'>Lorem ipsum dolor sit amet consectetur.</p>
			</div>
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<div className='home-blog__swiper'>
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel]}
						
						slidesPerView={1}
						spaceBetween={16}
						freeMode={{ enabled: true, sticky: true }}
						mousewheel={true}
						grabCursor={true}
						breakpoints={{
							620: {
								slidesPerView: 2,
								spaceBetween: 16,
							},
							760: {
								slidesPerView: 2,
								spaceBetween: 32,
							},
							1060: {
								slidesPerView: 3,
								spaceBetween: 48,
							},
							1300: {
								slidesPerView: 4,
								spaceBetween: 48,
							},
						}}
					>
						{reversedPosts.map(post => (
							<SwiperSlide className='home-blog__slide' key={post.id}>
								<BlogCard key={post.id} id={post.id} image={post.image} topic={post.topic} title={post.title} text={post.text} picture={post.picture} name={post.name} date={post.date} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}

			<div className='home-blog__btn'>
				<Link className='btn btn--med' to='/blog'>
					Go to the blog <FaArrowRight className='arrow-right' />
				</Link>
			</div>
		</section>
	);
};

export default HomeBlog;
