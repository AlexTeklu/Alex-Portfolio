import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const HeaderSocialM = () => {
	return (
		<div className='header_social'>
			<a href='https://linkedin.com' target='blank'>
				{' '}
				<BsLinkedin />{' '}
			</a>
			<a href='https://github.com' target='blank'>
				{' '}
				<BsGithub />{' '}
			</a>
			<a href='https://facebook.com' target='blank'>
				{' '}
				<BsFacebook />{' '}
			</a>
		</div>
	);
};

export default HeaderSocialM;
