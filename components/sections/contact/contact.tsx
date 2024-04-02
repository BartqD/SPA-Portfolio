import React from 'react'
import classes from './contact.module.scss'
import ContactForm from './contact-form'

const ContactSection: React.FC = () => {
	return (
		<section id='contact' className={classes['contact']}>
			<div className={classes['contact-content']}>
				<div className={classes['contact-heading']}>
					<h2 className={classes['contact-heading__title']}>Contact</h2>
					<p className={classes['contact-heading__description']}>
						I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to
						you as soon as possible.
					</p>
				</div>
				<ContactForm />
			</div>
		</section>
	)
}

export default ContactSection
