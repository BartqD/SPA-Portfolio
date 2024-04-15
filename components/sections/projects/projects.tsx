'use client'

import React, { useState, useRef } from 'react'
import classes from './projects.module.scss'
import Image from 'next/image'
import PageLink from '../../ui/link'
import { motion } from 'framer-motion'

interface ProjectData {
	title: string
	technologies: string[]
	imageUrl: string
}

const projects: ProjectData[] = [
	{
		title: 'DESIGN PORTFOLIO',
		technologies: ['HTML', ' CSS'],
		imageUrl: '/images/Desktop.png',
	},
	{
		title: 'DESIGN PORTFOLIO',
		technologies: ['HTML', ' CSS'],
		imageUrl: '/images/Desktop.png',
	},
	{
		title: 'DESIGN PORTFOLIO',
		technologies: ['HTML', ' CSS'],
		imageUrl: '/images/Desktop.png',
	},
	{
		title: 'DESIGN PORTFOLIO',
		technologies: ['HTML', ' CSS'],
		imageUrl: '/images/Desktop.png',
	},
]

const ProjectListSection: React.FC = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	const fadeInAnimationVariant = {
		initial: {
			opacity: 0,
			scale: 0.5,
		},
		animate: (index: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.3 * index,
			},
		}),
	}

	return (
		<section id='projects' className={classes.projects}>
			<div className={classes.wrapper}>
				<div className={classes['projects__heading']}>
					<h2 className={classes['projects__heading-title']}>Projects</h2>
					<PageLink href={'#contact'}>contact me</PageLink>
				</div>
				<div className={classes['card-wrapper']}>
					{projects.map((project, index) => (
						<motion.article
							variants={fadeInAnimationVariant}
							initial='initial'
							whileInView='animate'
							viewport={{
								once: true,
							}}
							custom={index}
							className={classes['project-card']}
							key={index}>
							<div
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
								onFocus={() => setHoveredIndex(index)}
								onBlur={() => {
									setHoveredIndex(null)
								}}
								className={`${classes['project-card__img-wrapper']} ${
									hoveredIndex === index ? classes['project-card__img-wrapper--hovered'] : ''
								}`}>
								<Image
									className={classes['project-card__img']}
									src={project.imageUrl}
									alt={project.title}
									width={343}
									height={253}
								/>
								<div className={classes['project-card__links']}>
									<PageLink href='#'>view project</PageLink>
									<PageLink href='#'>view code</PageLink>
								</div>
							</div>
							<h2 className={classes['project-card__title']}>{project.title}</h2>
							<div className={classes['project-card__technologies']}>
								{project.technologies.map((tech, index) => (
									<span key={index} className={classes['technology-tag']}>
										{tech}
									</span>
								))}
							</div>
							<div className={classes['project-card__links--mobile']}>
								<PageLink href='#'>view project</PageLink>
								<PageLink href='#'>view code</PageLink>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectListSection