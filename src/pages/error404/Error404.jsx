import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<>
			<div>
				404 Not Found
				<Link to='/'>Home</Link>
			</div>
		</>
	);
};

export default Error404;
