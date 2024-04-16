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
						I would love to hear about your project and how I could help. Please fill in the form, and I&rsquo;ll get back to you as soon as possible.
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
