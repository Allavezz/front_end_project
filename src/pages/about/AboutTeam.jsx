import { teamMembers } from '../../data/data.json';
import TeamCard from '../../components/TeamCard';

const AboutTeam = () => {
	return (
		<section className='about-team section-padding'>
			<div className='about-team__heading heading'>
				<h2 className='about-team__title title'>Meet our Team</h2>
				<p className='about-team__text text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, aspernatur?</p>
			</div>

			<div className='about-team__grid'>
				{teamMembers.map(team => (
					<TeamCard key={team.id} id={team.id} name={team.name} role={team.role} photo={team.photo} links={team.links} />
				))}
			</div>
		</section>
	);
};

export default AboutTeam;
