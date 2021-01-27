import Image from 'next/image';
import styled from 'styled-components';
import { sliceText } from '../utils/card';

const Cards = ({ post }) => {
	return (
		<CardWrapper>
			<div className="card-container">
				<Image
					src={post.cover.url}
					alt="Hello"
					width={500}
					height={400}
					className="cover-image"
				/>
				<div className="card-content">
					<div className="content-header">
						<h2>{post.title}</h2>
						<p>{sliceText(post.content, 120)}</p>
					</div>
					<div className="content-footer">
						<Image
							src="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
							alt=""
							width={50}
							height={50}
							className="profile-image"
						/>
						<div className="content-profile">
							<p id="author">Mekel Ilyasa</p>
							<p id="date">28 Jun 2020</p>
						</div>
					</div>
				</div>
			</div>
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	padding: 1rem 2rem;
	.card-container {
		margin: 0 auto;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
		border-radius: 0.75rem;
		@media (min-width: 1024px) {
			width: 60%;
			height: auto;
			display: flex;
			flex-direction: row;
		}
		.cover-image {
			object-fit: cover;
			border-radius: 0.75rem 0 0 0.75rem;
		}
		.card-content {
			background: #fff;
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border-radius: 0 0.75rem 0.75rem 0;
			@media (min-width: 1024px) {
				border-radius: 0 0.75rem 0.75rem 0;
			}
			.content-header {
				h2 {
					color: rgba(55, 65, 81, 1);
					font-weight: 600;
					font-size: 1.25rem;
					line-height: 1.75rem;
				}
				p {
					margin-top: 1rem;
					color: rgba(75, 85, 99, 1);
					font-size: 0.875rem;
					line-height: 1.25rem;
				}
			}
			.content-footer {
				display: flex;
				align-items: center;
				.profile-image {
					border-radius: 999px;
				}
				.content-profile {
					margin-left: 1rem;
					#author {
						color: rgba(31, 41, 55, 1);
						font-size: 0.875rem;
						line-height: 1.25rem;
						font-weight: 600;
						margin: 0;
					}
					#date {
						color: rgba(75, 85, 99, 1);
						font-size: 0.875rem;
						line-height: 1.25rem;
						margin: 0;
					}
				}
			}
		}
	}
`;

export default Cards;
