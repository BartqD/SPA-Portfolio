'use client'

import React from 'react'
import classes from './contact.module.scss'
import ContactForm from './contact-form'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ContactSection: React.FC = () => {
	return (
		<section id='contact' className={classes['contact']}>
			<div className={`${classes['contact-content']} ${classes.wrapper} `}>
				<div className={classes['contact-heading']}>
					<h2 className={classes['contact-heading__title']}>Contact</h2>
					<p className={classes['contact-heading__description']}>
					If you have any questions or wish to contact me, please fill out this form. I&rsquo;ll reply as soon as possible.
					</p>
				</div>
				<ContactForm />
			<motion.div
					animate={{ scale: [1, 1.1, 1] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
					className={classes['contact__rings']}>
					<Image src={'/images/pattern-rings.svg'} width={530} height={80} alt='rings pattern' />
				</motion.div>
			</div>
		</section>
	)
}

export default ContactSection
