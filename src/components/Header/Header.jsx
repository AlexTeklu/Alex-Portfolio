import React from 'react';
import './header.css';
import CTA from './CTA';
import myImage from '../.././Assets/mini1.png';
import HeaderSocialM from './HeaderSocialM';

const Header = () => {
	return (
		<header>
			<div className='container header_container'>
				<h5>Hej I'm</h5>
				<h1>Alexander Teklu</h1>
				<h5 className='text-light'>FRONTEND DEVELOPER</h5>
				<CTA />
				<HeaderSocialM />
				<div className='myImage'>
					<img src={myImage} alt='' />
				</div>
				<a href='#contact' className='scroll_down'>
					{' '}
					Scroll Down{' '}
				</a>
			</div>
		</header>
	);
};

export default Header;
