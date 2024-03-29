'use client'

import React, { useState } from 'react'
import classes from './projects.module.scss'
import Image from 'next/image'
import PageLink from '../ui/link'

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

	return (
		<section id='projects' className={classes.projects}>
			<div className={classes['projects__heading']}>
				<h2 className={classes['projects__heading-title']}>Projects</h2>
				<PageLink href='#'>contact me</PageLink>
			</div>
			<div className={classes.wrapper}>
				{projects.map((project, index) => (
					<article className={classes['project-card']} key={index}>
						<div
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
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
					</article>
				))}
			</div>
		</section>
	)
}

export default ProjectListSection
