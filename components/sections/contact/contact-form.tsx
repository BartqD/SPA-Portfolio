import classes from './contact-form.module.scss'
import { IoAlertCircleOutline } from 'react-icons/io5'

const ContactForm: React.FC = () => {
	return (
		<form className={classes['contact-form']}>
			<div className={classes['contact-form__group']}>
				<label htmlFor='name' className={classes['contact-form__label']}></label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='name'
					aria-label='name'
					className={classes['contact-form__input']}
				/>
			</div>
			<div className={classes['contact-form__group']}>
				<label htmlFor='email' className={classes['contact-form__label']}></label>
				<div className={classes['contact-form__email-group']}>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='email'
						aria-label='email'
						className={classes['contact-form__input']}
					/>
					<IoAlertCircleOutline className={classes['contact-form__alert']}  />
				</div>
				<p className={classes['contact-form__error-message']}>Sorry, invalid format here</p>
			</div>
			<div className={classes['contact-form__group']}>
				<label htmlFor='message' className={classes['contact-form__label']}></label>
				<textarea
					placeholder='message'
					id='message'
					name='message'
					rows={6}
					aria-label='Message'
					className={`${classes['contact-form__textarea']} ${classes['contact-form__input']} ` }
				/>
			</div>
			<button type='submit' className={classes['contact-form__button']}>send message</button>
		</form>
	)
}

export default ContactForm
