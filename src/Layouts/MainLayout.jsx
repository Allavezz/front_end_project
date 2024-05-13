import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import useLocalStorage from 'use-local-storage';

const MainLayout = () => {
	// Dark/Light Theme
	const preference = window.matchMedia('(prefers-color-scheme: light)').matches;
	const [isLight, setIsLight] = useLocalStorage('isLight', preference);
	const isImage = isLight;
	return (
		<>
			<div data-theme={isLight ? 'light' : 'dark'}>
				<Header isImage={isImage} isChecked={isLight} handleChange={() => setIsLight(!isLight)} />

				<ToastContainer />
				<Outlet context={isImage} />
				<Footer isImage={isImage} />
			</div>
		</>
	);
};

export default MainLayout;
