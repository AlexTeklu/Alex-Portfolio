import React from 'react';
import Pic from '../../Assets/Pic.png';
import Pic1 from '../.././Assets/image.png';
import Pic2 from '../.././Assets/image1.png';
import Pic3 from '../.././Assets/image2.png';

import './projects.css';

const portfolioData = [
	{
		id: 1,
		image: Pic3,
		title: 'react-app using Sverige Radio API',
		github: 'https://github.com',
		demo: 'https://reactapp-radio-api.netlify.app/',
	},
	{
		id: 2,
		image: Pic2,
		title: 'Nerd-invaders game using PHASER 3',
		github: 'https://github.com/AlexTeklu/nerd-game',
		demo: 'https://nerd-invaders.netlify.app/',
	},
	{
		id: 3,
		image: Pic1,
		title: 'Quiz game using Vanilla javascript',
		github: 'https://github.com/AlexTeklu/IASS-Quiz-Project',
		demo: 'https://trivia-quizer.netlify.app/',
	},
	{
		id: 4,
		image: Pic,
		title: 'MERN-App using Node.js & React',
		github: 'https://github.com/AlexTeklu/mern-shop',
		demo: 'https://mern-shop-electro.herokuapp.com/',
	},
	// {
	//   id: 5,
	//   image: Pic,
	//   title: 'radio app using Sverige Radio API',
	//   github: 'https://github.com',
	//   demo: 'https://plantsub.netlify.app/'
	// },
	// {
	//   id: 6,
	//   image: Pic,
	//   title: 'radio app using Sverige Radio API',
	//   github: 'https://github.com',
	//   demo: 'https://plantsub.netlify.app/'
	// }
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio_container'>
				{portfolioData.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className='portfolio_item'>
							<div className='portfolio_item-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className='portfolio_item-cta'>
								<a href={github} className='btn' target={'/'}>
									Github
								</a>
								<a href={demo} className='btn btn-primary' target={'/'}>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
