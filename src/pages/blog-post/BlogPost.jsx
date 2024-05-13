import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Spinner from '../../components/Spinner';

const BlogPost = ({ deletePost }) => {
	const navigate = useNavigate();
	const { blogPostId } = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);

	const onDeleteClick = postId => {
		const confirm = window.confirm('Are you sure you want to delete this post?');

		if (!confirm) return;

		deletePost(postId);

		toast.success('Post deleted successfuly');

		navigate(-1);
	};

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await fetch(`/api/blogPost/${blogPostId}`);
				const data = await res.json();
				setPost(data);
			} catch (error) {
				console.log('Error fetching data', error);
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, []);

	if (loading) {
		return <Spinner loading={loading} />;
	}

	return (
		<main className='blog-post'>
			<section className='blog-post__hero' style={{ backgroundImage: `var(--gradient-hero--grey), url(${post.background})` }}>
				<h1 className='blog-post__title title'>
					{post.title}
				</h1>
			</section>
			<section className='blog-post__content section-padding'>
				<div className='blog-post__content-container'>
					<h2 className='blog-post__sub-title title title--med'>{post.title}</h2>
					<div>
						<p className='blog-post__topic'>{post.topic}</p>
						<p className=' blog-post__text text'>{post.text}</p>
					</div>

					<div className='blog-post__image-wrapper'>
						<img src={post.image} alt={post.topic} />
					</div>

					<p className=' blog-post__text text'>{post.text2}</p>

					<div className='blog-post__footer'>
						<div className='blog-post__autor-container'>
							<div className='blog-post__profile-image'>
								<img src={post.picture} alt={post.name} />
							</div>
							<div className='blog-post__autor'>
								<span className='blog-post__name'>{post.name}</span>
								<span className='blog-post__date'>{post.date}</span>
							</div>
						</div>
					</div>
				</div>
				<div className='blog-post__buttons-container'>
					<button onClick={() => navigate(-1)} className='btn btn--med'>
						Back
					</button>
					<div className='blog-post__admin-buttons'>
						<Link className='btn btn--med' to={`/edit-post/${blogPostId}`}>
							Edit post
						</Link>
						<button onClick={() => onDeleteClick(post.id)} className='btn btn--med'>
							Delete post
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default BlogPost;
