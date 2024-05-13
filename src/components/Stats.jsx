import { stats } from '../data/data.json';

const Stats = () => {
	return (
		<div className='stats'>
			<div className='stats__slide'>
				{stats.map(stat => (
					<div className='stats__data' key={stat.id}>
						<h4 className='stats__number'>{stat.number}</h4>
						<span className='stats__text text'>{stat.text}</span>
                    </div>
                    
                    
                ))}
                </div>
                <div className='stats__slide'>
				{stats.map(stat => (
					<div className='stats__data' key={stat.id}>
						<h4 className='stats__number'>{stat.number}</h4>
						<span className='stats__text text'>{stat.text}</span>
                    </div>
                    
                    
				))}
			</div>
		</div>
	);
};

export default Stats;
