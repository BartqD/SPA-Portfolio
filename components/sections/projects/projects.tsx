'use client'

import React, { useState } from 'react'
import classes from './projects.module.scss'
import Image from 'next/image'
import PageLink from '../../ui/link'
import { motion } from 'framer-motion'

interface ProjectData {
	title: string
	technologies: string[]
	imageUrl: string
	projectLink: string
	codeLink: string
}

const projects: ProjectData[] = [
	{
		title: 'COFFEEROASTERS',
		technologies: ['HTML', 'CSS', 'TAILWIND', 'NEXTJS', 'TYPESCRIPT', 'FRAMERMOTION'],
		imageUrl: '/images/Coffeeroasters.png',
		projectLink: 'https://coffeeroasters-chi.vercel.app/',
		codeLink: 'https://github.com/BartqD/Coffeeroasters',
	},
	{
		title: 'FOREST',
		technologies: ['HTML', 'CSS (BEM)', 'JS','GULP'],
		imageUrl: '/images/Forest.png',
		projectLink: 'https://bartqd.github.io',
		codeLink: 'https://github.com/BartqD/BartqD.github.io',
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
				delay: 0.2 * index,
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
									fill
								/>
								<div className={classes['project-card__links']}>
									<PageLink href={project.projectLink}>view project</PageLink>
									<PageLink href={project.codeLink}>view code</PageLink>
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
								<PageLink href={project.projectLink}>view project</PageLink>
								<PageLink href={project.codeLink}>view code</PageLink>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectListSection
