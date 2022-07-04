import Header from './components/Header/Header';
import './GlobalStyles.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';

function App() {
	return (
		<>
			<Header />
			<About />
			<Navbar />
			<Portfolio />
			<Portfolio />
			<Experience />
			<Contact />
		</>
	);
}

export default App;
