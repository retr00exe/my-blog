import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import styled from 'styled-components';

class AboutContent extends Component {
	about = () => "Hi there! I'm Mekel Ilyasa";
	education = () =>
		"I'm currently pursuing my bachelor degree at Computer Engineering Departement, Diponegoro University. I know, I know, majoring 'IT' at college sucks af but I try my best to survive with old school tech stack at college LOL. I PHP too at college even I hate it :)";
	skills = () => 'Javascript + Python = ❤️';
	contact = () =>
		'You can contact me at Telegram or mail to retr00.exe@gmail.com';

	render() {
		return (
			<AboutWrapper>
				<div class="container">
					<Terminal
						color="white"
						backgroundColor="#172A45"
						barColor="black"
						style={{ maxWidth: '800px', fontSize: '1em' }}
						commands={{
							about: this.about,
							education: this.education,
							skills: this.skills,
							contact: this.contact,
						}}
						descriptions={{
							about: 'about Me',
							education: 'my Education',
							skills: 'my Skills',
							contact: 'get in touch with me ;)',
						}}
						msg="Welcome to about page - Type 'help' for a list of supported commands :)"
					/>
				</div>
			</AboutWrapper>
		);
	}
}

const AboutWrapper = styled.div`
	background-color: rgba(243, 244, 246, 1);
	.container {
		margin: 0 auto;
		padding: 5rem 0;
	}
	@media (min-width: 1024px) {
		height: auto;
		display: flex;
		flex-direction: column;
	}
`;

export default AboutContent;