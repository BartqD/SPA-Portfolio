import classes from './contact-form.module.scss'
import { Fragment, useState, useEffect } from 'react'
import { IoAlertCircleOutline } from 'react-icons/io5'
import Notification from '@/components/ui/notification'

interface Contact {
	email: string
	name: string
	message: string
}

type Status = 'success' | 'error' | 'pending'

interface NotificationProps {
	title: string
	message?: string | null
	status: Status
}

async function sendContactData(contact: Contact) {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contact),
		headers: {
			'Content-Type': 'application/json',
		},
	})

	const data = await response.json()

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong')
	}
}

const ContactForm: React.FC = () => {
	const [enteredEmail, setEnteredEmail] = useState<string>('')
	const [enteredName, setEnteredName] = useState<string>('')
	const [enteredMessage, setEnteredMessage] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string | null>()
	const [requestStatus, setRequestStatus] = useState<'success' | 'error' | 'pending' | null>()

	useEffect(() => {
		if (requestStatus === 'success' || requestStatus === 'error') {
			const timer = setTimeout(() => {
				setRequestStatus(null)
				setErrorMessage(null)
			}, 3000)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [requestStatus])

	async function sendMessageHandler(event: React.FormEvent) {
		event.preventDefault()
		setRequestStatus('pending')
		const contact: Contact = {
			email: enteredEmail,
			name: enteredName,
			message: enteredMessage,
		}

		try {
			await sendContactData(contact)
			setRequestStatus('success')
			setEnteredEmail('')
			setEnteredName('')
			setEnteredMessage('')
		} catch (error) {
			setRequestStatus('error')
			setErrorMessage((error as Error).message || 'Something went wrong!')
			return
		}
	}

	let notification: NotificationProps | null = null

	if (requestStatus === 'pending') {
		notification = {
			status: 'pending',
			title: 'Sending message...',
			message: 'Your message is on its way!',
		}
	}

	if (requestStatus === 'success') {
		notification = {
			status: 'success',
			title: 'Success!',
			message: 'Your message has been sent',
		}
	}

	if (requestStatus === 'error') {
		notification = {
			status: 'error',
			title: 'Error!',
			message: errorMessage,
		}
	}

	return (
		<Fragment>
			<form onSubmit={sendMessageHandler} className={classes['contact-form']}>
				<div className={classes['contact-form__group']}>
					<label htmlFor='name' className={classes['contact-form__label']}></label>
					<div className={classes['contact-form__group-alert']}>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='name'
							aria-label='name'
							className={classes['contact-form__input']}
							required
							value={enteredName}
							onChange={e => setEnteredName(e.target.value)}
						/>
						{/* <IoAlertCircleOutline className={classes['contact-form__alert']}  /> */}
					</div>
					{/* <p className={classes['contact-form__error-message']}>Sorry, invalid format here</p>  */}
				</div>
				<div className={classes['contact-form__group']}>
					<label htmlFor='email' className={classes['contact-form__label']}></label>
					<div className={classes['contact-form__group-alert']}>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='email'
							aria-label='email'
							className={classes['contact-form__input']}
							required
							value={enteredEmail}
							onChange={e => setEnteredEmail(e.target.value)}
						/>
						{/* <IoAlertCircleOutline className={classes['contact-form__alert']}  /> */}
					</div>
					{/* <p className={classes['contact-form__error-message']}>Sorry, invalid format here</p>  */}
				</div>
				<div className={classes['contact-form__group']}>
					<label htmlFor='message' className={classes['contact-form__label']}></label>
					<div className={classes['contact-form__group-alert']}>
						<textarea
							placeholder='message'
							id='message'
							name='message'
							rows={6}
							aria-label='Message'
							className={`${classes['contact-form__textarea']} ${classes['contact-form__input']} `}
							value={enteredMessage}
							onChange={e => setEnteredMessage(e.target.value)}
							required
						/>
						{/* <IoAlertCircleOutline className={classes['contact-form__alert']}  /> */}
					</div>
					{/* <p className={classes['contact-form__error-message']}>Sorry, invalid format here</p>  */}
				</div>
				<button type='submit' className={classes['contact-form__button']}>
					send message
				</button>
			</form>
			{notification && (
				<Notification status={notification.status} title={notification.title} message={notification.message} />
			)}
		</Fragment>
	)
}

export default ContactForm
