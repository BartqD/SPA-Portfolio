'use client'

import React, { useRef } from 'react'
import classes from './skills.module.scss'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiNextdotjs } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SkillProps {
	name: string
	experience: string
	icon: JSX.Element
}

const skills: SkillProps[] = [
	{ name: 'HTML', experience: 'Experience', icon: <FaHtml5 /> },
	{ name: 'CSS', experience: 'Experience', icon: <FaCss3Alt /> },
	{ name: 'Javascript', experience: 'Experience', icon: <IoLogoJavascript /> },
	{ name: 'NextJs', experience: 'Experience', icon: <SiNextdotjs /> },
	{ name: 'React', experience: 'Experience', icon: <FaReact /> },
	{ name: 'Sass', experience: 'Experience', icon: <FaSass /> },
]

const SkillListSection: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	return (
		<section id='skills' className={classes.skills}>
			<motion.div
				ref={ref}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}
				viewport={{
					once: true,
				}}
				className={classes.wrapper}>
				<motion.div
					animate={{ scale: [1, 1.1, 1] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
					className={classes['skills__ring']}>
					<Image src={'/images/pattern-rings.svg'} width={530} height={80} alt='rings pattern' />
				</motion.div>
				<h2 className={classes['skills__title']}>My Skills:</h2>
				<article className={classes['skill-items']}>
					{skills.map((skill, index) => (
						<motion.div key={index} className={classes['skill-items__item']}>
							<h3 className={classes['skill-items__name']}>
								{skill.name}
								{skill.icon}
							</h3>
							<p className={classes['skill-items__experience']}>{skill.experience}</p>
						</motion.div>
					))}
				</article>
			</motion.div>
		</section>
	)
}

export default SkillListSection
