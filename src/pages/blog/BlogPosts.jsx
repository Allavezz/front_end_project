import BlogCard from '../../components/BlogCard';
import Spinner from '../../components/Spinner';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedTopic, setSelectedTopic] = useState('all'); // Default selected topic

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

	const [currentPage, setCurrentPage] = useState(0);
	const totalPages = Math.ceil(posts.length / 9);

	const nextPage = () => {
		setCurrentPage(prevPage => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
	};

	const prevPage = () => {
		setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
	};

	let filteredPosts = selectedTopic === 'all' ? posts : posts.filter(post => post.topic === selectedTopic);
	let reversedPosts = [...filteredPosts].reverse();

	const handleFilter = topic => {
		setSelectedTopic(topic);
		setCurrentPage(0);
	};

	const topics = [...new Set(posts.map(post => post.topic))];

	if (loading) {
		return <Spinner loading={loading} />;
	}

	return (
		<section className='blog-posts section-padding'>
			<div className='blog-posts__heading heading'>
				<h2 className='blog-posts__title title'>Our blog</h2>
				<p className='blog-posts__text text'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus, aliquam quisquam rem neque in, soluta ea eligendi nihil sit eveniet dolorum fugit fugiat ullam assumenda nam ipsum!
				</p>
				<p className='blog-posts__text text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio nisi pariatur! Quod, officia quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>

			<div className='blog-posts__container'>
				<div className='blog-posts__buttons-container'>
					<div className='blog-posts__filter'>
						<button className={`btn btn--med btn--filter blog-posts__filter-button ${selectedTopic === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>
							All
						</button>
						{topics.map((topic, index) => (
							<button key={index} className={`btn btn--med btn--filter blog-posts__filter-button ${selectedTopic === topic ? 'active' : ''}`} onClick={() => handleFilter(topic)}>
								{topic}
							</button>
						))}
					</div>
					<div>
						<Link to='/add-post' className='blog-posts__add-post btn btn--med'>
							Create post
						</Link>
					</div>
				</div>

				<div className='blog-posts__page'>
					{reversedPosts.slice(currentPage * 9, (currentPage + 1) * 9).map(post => (
						<BlogCard key={post.id} id={post.id} image={post.image} topic={post.topic} title={post.title} text={post.text} picture={post.picture} name={post.name} date={post.date} />
					))}
				</div>
				<div className='blog-posts__navigation'>
					<div className='blog-posts__arrows'>
						<button onClick={prevPage}>&#10094;</button>
					</div>

					<div className='blog-posts__numbers'>
						{[...Array(totalPages)].map((_, index) => (
							<button key={index} className={currentPage === index ? 'blog-posts__number--active' : 'blog-posts__number--not-active'} onClick={() => setCurrentPage(index)}>
								{index + 1}
							</button>
						))}
					</div>

					<div className='blog-posts__arrows'>
						<button onClick={nextPage}>&#10095;</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogPosts;
