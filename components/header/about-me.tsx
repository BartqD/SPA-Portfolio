'use client'
import { Fragment } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import classes from './about-me.module.scss'
import Image from 'next/image'
import PageLink from '../ui/link'

const AboutMe: React.FC = () => {
	const containerVariants: { [key: string]: any } = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const letterVariants: { [key: string]: any } = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<Fragment>

			<div className={classes['about-me']}>
				<Image
					className={classes['about-me__my-image']}
					src={'/images/background.jpg'}
					width={174}
					height={242}
					alt='profile image'
				/>
				<motion.div
					className={classes['about-me__rings']}
					animate={{ scale: [1, 1.1, 1] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
					<Image src={'/images/pattern-rings.svg'} width={530} height={80} alt='rings pattern' />
				</motion.div>
				<div className={classes['about-me__content']}>
					<motion.h1 variants={containerVariants} initial='hidden' animate='visible'>
						Nice to meet you!
						<motion.span variants={letterVariants}> I</motion.span>
						<motion.span variants={letterVariants}>{`'`}</motion.span>
						<motion.span variants={letterVariants}>m</motion.span>
						<motion.span variants={letterVariants}> </motion.span>
						<motion.span variants={letterVariants}>B</motion.span>
						<motion.span variants={letterVariants}>a</motion.span>
						<motion.span variants={letterVariants}>r</motion.span>
						<motion.span variants={letterVariants}>t</motion.span>
						<motion.span variants={letterVariants}>o</motion.span>
						<motion.span variants={letterVariants}>s</motion.span>
						<motion.span variants={letterVariants}>z</motion.span>
						<motion.span variants={letterVariants}> </motion.span>
						<motion.span variants={letterVariants}>D</motion.span>
						<motion.span variants={letterVariants}>r</motion.span>
						<motion.span variants={letterVariants}>o</motion.span>
						<motion.span variants={letterVariants}>z</motion.span>
						<motion.span variants={letterVariants}>d</motion.span>
						<motion.span variants={letterVariants}>e</motion.span>
						<motion.span variants={letterVariants}>k</motion.span>
					</motion.h1>
					<p className={classes['about-me__description']}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugit?
					</p>
				</div>

				<PageLink href={'#'}>contact me</PageLink>
			</div>
		</Fragment>
	)
}

export default AboutMe
