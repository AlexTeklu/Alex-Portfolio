import Header from './components/Header/Header';
import './GlobalStyles.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
	return (
		<>
			<Header />
			<About />
			<Navbar />
			<Portfolio />
		</>
	);
}

export default App;
