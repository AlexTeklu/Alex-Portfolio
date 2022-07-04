import React from 'react';
import './experience.css';
import { BsBookmarkCheckFill } from 'react-icons/bs';

const Experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>
			<div className='container experience_container'>
				<div className='experience_frontend'>
					<h3>Frontend Development</h3>
					<div className='experience_content'>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>HTML</h4>
							</div>
						</article>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>CSS/SCSS</h4>
							</div>
						</article>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>JAVASCRIPT</h4>
							</div>
						</article>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>REACT</h4>
							</div>
						</article>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>REACT-BOOTSTRAP</h4>
							</div>
						</article>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>STYLED-COMPONENT</h4>
							</div>
						</article>
					</div>
				</div>

				{/* ///////////////////////BACKEND/////////////////////////// */}

				<div className='experience_backend'>
					<h3> Backend Development</h3>
					<div className='experience_content'>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>NODE JS</h4>
							</div>
						</article>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>MONGO DB</h4>
							</div>
						</article>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>MYSQL</h4>
							</div>
						</article>
						<article className='experience_details'>
							<BsBookmarkCheckFill className='exprerience_details-icons' />
							<div>
								<h4>PHP</h4>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
