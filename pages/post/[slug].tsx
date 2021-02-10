import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import readingTime from 'reading-time';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CodeBlock from '../../components/CodeBlock';
import { getPostById, getAllPosts } from '../../lib/graphql/queries';
import { fadeInUp, stagger } from '../../utils/animate';
import { formatDate } from '../../utils/date';

interface Post {
	post: {
		title: string;
		content: string;
		cover: {
			name?: string;
			url: string;
			ext?: string;
		};
		date: Date;
		createdAt?: Date;
		updatedAt?: Date;
	};
}

export default function Post({ post }: Post): JSX.Element {
	const router: NextRouter = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	const [navbar, setNavbar] = useState<boolean>(true);
	const stats = readingTime(post.content);
	const LinkRenderer = ({ href, children }) => {
		return (
			<a style={{ color: 'blue' }} href={href} target="_blank" rel="noopener">
				{children}
			</a>
		);
	};
	const changeNavbar = () => {
		window.scrollY >= 200 ? setNavbar(false) : setNavbar(true);
	};
	useEffect(() => {
		window.addEventListener('scroll', changeNavbar);
		return () => window.removeEventListener('scroll', changeNavbar);
	});

	return (
		<>
			<Head>
				<title>{post.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			{navbar ? <Navbar /> : <Navbar active title={post.title} />}
			<motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
				<PostWrapper>
					<motion.div variants={stagger} className="container">
						<div className="header-container">
							<motion.h1 variants={fadeInUp}>{post.title}</motion.h1>
							<motion.div variants={fadeInUp} className="header">
								<div className="content-header">
									<Image
										src="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
										alt=""
										width={50}
										height={50}
										className="profile-image"
									/>
									<div className="content-profile">
										<p id="author">Mekel Ilyasa</p>
										<p id="date">{formatDate(post.date)}</p>
									</div>
								</div>
								<div className="readtime">
									<p>{stats.text}</p>
								</div>
							</motion.div>
						</div>
						<motion.div variants={fadeInUp}>
							<Image
								src={post.cover.url}
								alt={post.title}
								width={500}
								height={300}
								layout="responsive"
								className="article-image"
							/>
						</motion.div>
						<motion.div variants={fadeInUp}>
							<ReactMarkdown
								className="content"
								renderers={{ link: LinkRenderer, code: CodeBlock }}
							>
								{post.content}
							</ReactMarkdown>
						</motion.div>
					</motion.div>
				</PostWrapper>
			</motion.div>
			<Footer />
		</>
	);
}

const PostWrapper = styled.div`
	background-color: var(--backgroundPost);
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition-duration: 0.6s;
	transition-timing-function: ease;
	.container {
		width: 100%;
		max-width: 800px;
		padding: 4rem 2rem 2rem 2rem;
		font-size: 1.15rem;
		.header-container {
			padding-bottom: 2rem;
			h1 {
				color: var(--colorPrimary);
			}
			.header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.content-header {
					display: flex;
					align-items: center;
					.content-profile {
						margin-left: 1rem;
						#author {
							color: var(--colorPrimary);
							font-size: 0.875rem;
							line-height: 1.25rem;
							font-weight: 600;
							margin: 0;
						}
						#date {
							color: var(--colorTertiary);
							font-size: 0.875rem;
							line-height: 1.25rem;
							margin: 0;
						}
					}
				}
				.readtime {
					color: rgba(156, 163, 175, 1);
					text-transform: capitalize;
				}
			}
		}
		.content {
			color: var(--colorPrimary);
			text-align: justify;
			line-height: 1.6;
		}
	}
`;

export async function getStaticPaths() {
	const { posts } = await getAllPosts();
	return {
		fallback: true,
		paths: posts.map((post) => ({
			params: {
				slug: post.id,
			},
		})),
	};
}

export async function getStaticProps(ctx) {
	const { post } = await getPostById(ctx.params.slug);
	return {
		props: {
			post,
		},
	};
}