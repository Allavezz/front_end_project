import logoWhite from '/assets/logoWhite.png';
import logoBlack from '/assets/logoBlack.png';
import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useBlogPosts } from '../../context/BlogPostContext';

const AddPost = ({ addPostSubmit }) => {
	const [background, setBackground] = useState('');
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [topic, setTopic] = useState('events');
	const [text, setText] = useState('');
	const [text2, setText2] = useState('');
	const [picture, setPicture] = useState('/assets/team/teamMember03.jpg');
	const [name, setName] = useState('Julia Chase');
	const [date, setDate] = useState('');

	const navigate = useNavigate();
	const { handleAdd } = useBlogPosts();

	const submitForm = event => {
		event.preventDefault();

		const blogPost = {
			background,
			image,
			topic,
			title,
			text,
			text2,
			picture,
			name,
			date,
		};

		addPostSubmit(newPost);

		toast.success('Post added successfully');

		return navigate(-1);
	};

	const isImage = useOutletContext();

	return (
		<main className='add-post'>
			<section className={`add-post__hero ${background ? '' : 'black-background'}`} style={{ backgroundImage: `var(--gradient-hero--grey), url(${background})` }}>
				<div className='add-post__heading heading'>
					<h1 className='title'>
						{`${title ? '' : 'Create your Post !'}`}
						{title}
					</h1>
				</div>
			</section>
			<section className='add-post__form-section section-padding'>
				<div className='add-post__form-container'>
					<form className='add-post__form' onSubmit={submitForm}>
						<div className='add-post__form-logo'>
							<img className='add-post__logo' src={isImage ? logoBlack : logoWhite} alt='logo' />
						</div>
						<div className='add-post__subtitle'>
							<h2 className='title title--med'>Create your post...</h2>
						</div>
						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='background'>
								Background:
							</label>
							<input
								className='add-post__input'
								value={background}
								onChange={event => setBackground(event.target.value)}
								type='text'
								id='background'
								name='background'
								placeholder='Post background image...'
								required
							/>
						</div>

						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='title'>
								Title:
							</label>
							<input className='add-post__input' value={title} onChange={event => setTitle(event.target.value)} type='text' id='title' name='title' placeholder='Enter the post title...' required />
						</div>

						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='topic'>
								Topic:
							</label>
							<select className='add-post__input' value={topic} onChange={event => setTopic(event.target.value)} name='topic' id='topic' required>
								<option value='events'>events</option>
								<option value='camping'>camping</option>
								<option value='bikes'>bikes</option>
								<option value='bike gear'>bike gear</option>
								<option value='places'>places</option>
							</select>
						</div>

						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='image'>
								Image:
							</label>
							<input className='add-post__input' value={image} onChange={event => setImage(event.target.value)} type='text' id='image' name='image' placeholder='Enter the image URL...' />
						</div>

						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='text'>
								Text:
							</label>
							<textarea
								className='add-post__input'
								value={text}
								onChange={event => setText(event.target.value)}
								name='text'
								id='text'
								rows='10'
								cols='80'
								placeholder='add the blog text here...'
							></textarea>
						</div>

						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='text2'>
								Text 2:
							</label>
							<textarea
								className='add-post__input'
								value={text2}
								onChange={event => setText2(event.target.value)}
								name='text2'
								id='text2'
								rows='10'
								cols='80'
								placeholder='add the blog text here...'
							></textarea>
						</div>

						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='picture'>
								Picture
							</label>
							<select className='add-post__input' value={picture} onChange={event => setPicture(event.target.value)} name='picture' id='picture' required>
								<option value='/assets/team/teamMember03.jpg'>Julia Chase</option>
								<option value='/assets/team/teamMember06.jpg'>Dave Olsen</option>
								<option value='/assets/team/teamMember02.jpg'>Roel Turner</option>
							</select>
						</div>

						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='name'>
								Name
							</label>
							<select className='add-post__input' value={name} onChange={event => setName(event.target.value)} name='name' id='name' required>
								<option value='Julia Chase'>Julia Chase</option>
								<option value='Dave Olsen'>Dave Olsen</option>
								<option value='Roel Turner'>Roel Turner</option>
							</select>
						</div>

						<div className='add-post__form-field'>
							<label className=' add-post__label text' htmlFor='date'>
								Date
							</label>
							<input className='add-post__input' value={date} onChange={event => setDate(event.target.value)} type='text' id='date' name='date' placeholder='Enter the post date' required />
						</div>
						<div className='add-post__submit-wrapper'>
							<button className='btn btn--med' type='submit'>
								Create post
							</button>
						</div>
					</form>
				</div>
				<div className='add-post__back'>
					<button onClick={() => navigate(-1)} className=' btn btn--med'>
						Back
					</button>
				</div>
			</section>
		</main>
	);
};

export default AddPost;
