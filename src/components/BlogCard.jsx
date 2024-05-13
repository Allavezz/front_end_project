import { Link } from 'react-router-dom';

const BlogCard = ({ id, image, topic, title, text, picture, name, date }) => {
	return (
		<div key={id} className={`blog-card ${location.pathname === '/blog' ? 'blog-card__hover' : ''}`}>
			<Link to={`/${id}`}>
				<div className='blog-card__wrapper'>
					<div className='blog-card__image-wrapper'>
						<img className='blog-card__image' src={image} alt={title} />
					</div>

					<div className='blog-card__content'>
						<span className='blog-card__topic'>{topic}</span>
						<h3 className='title title--small blog-card__title'>{title}</h3>
						<p className='text text--opacity  blog-card__text'>{text}</p>
						<div className='blog-card__footer'>
							<div className='blog-card__profile-image'>
								<img src={picture} alt={name} />
							</div>
							<div className='blog-card__autor'>
								<span className='blog-card__name'>{name}</span>
								<span className='blog-card__date'>{date}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default BlogCard;
