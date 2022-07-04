import './about.css';
import Me from '../.././Assets/mini.jpg';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { AiTwotoneFolderOpen } from 'react-icons/ai';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about_container'>
				<div className='about_me'>
					<div className='about_me-image'>
						<img src={Me} alt='About Imag' />
					</div>
				</div>
				<div className='about_content'>
					<div className='about_cards'>
						<article className='about_card'>
							<MdOutlineCastForEducation className='about_icons' />
							<h5>Education</h5>
							<small>Frontend developer Student at Hyper island </small>
						</article>

						<article className='about_card'>
							<AiTwotoneFolderOpen className='about_icons' />
							<h5>Projects</h5>
						</article>
					</div>
					<p>
						{' '}
						Hello! <br />I am Front-end Developer student at Hyper Island
						Sweden, passionate for coding and problem solving and self motivated
						who strives to build a career in the tech world.{' '}
					</p>
					<a href='#contact' className='btn btn-primary'>
						Lets Connect
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
