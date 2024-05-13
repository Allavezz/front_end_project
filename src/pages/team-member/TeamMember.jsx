import { teamMembers } from '../../data/data.json';
import { useParams, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const TeamMember = () => {
	const { teamMemberId } = useParams();
	const member = teamMembers.find(member => member.id === teamMemberId);

	const navigate = useNavigate();

	return (
		<main className='team-member'>
			<section className='team-member__hero-section hero-image' style={{ backgroundImage: `var(--gradient-hero--grey), url(${member.image})` }}>
				<div className='team-member__heading heading'>
					<h2 className='team-member__title hero-title hero-title--small'>{member.name}</h2>
					<span className='text text--big'>{member.role}</span>
				</div>
			</section>
			<section className='team-member__content-section section-padding' style={{ backgroundImage: 'var(--gradient-post)' }}>
				<div className='team-member__content'>
					<div className='team-member__photo'>
						<img src={member.photo} alt={member.name} />
					</div>
					<div className='team-member__text'>
						<p className=' text'>{member.text1}</p>
						<p className=' text'>{member.text2}</p>
						<p className=' text'>{member.text3}</p>
						<div className='team-member__socials'>
							<a href={member.links.linkedin} target='/blank'>
								<FaLinkedin />
							</a>
							<a href={member.links.instagram} target='/blank'>
								<FaInstagram />
							</a>
							<a href={member.links.twitter} target='/blank'>
								<FaXTwitter />
							</a>
						</div>
					</div>
				</div>

				<button onClick={() => navigate(-1)} className='team-member__btn btn btn--med'>
					Back
				</button>
			</section>
		</main>
	);
};

export default TeamMember;
