import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDatabase, insertContact } from '../../lib/db-util'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body

		if (!email || !email.includes('@') || !name || name.trim() === '' || message.trim() === '' || !message) {
			res.status(422).json({ message: 'Missing input data.' })
			return
		}

		const newMessage = { email, name, message }

		let client

		try {
			client = await connectDatabase()
		} catch (error) {
			console.log(error)
			res.status(500).json({ message: 'Connecting to the database failed', error: error })
			return
		}
		try {
			await insertContact(client, newMessage)

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				host:'smtp.gmail.com',
				port: 587,
				secure: false,
				auth: {
					user: process.env.GMAIL_USERNAME,
					pass: process.env.GMAIL_PASSWORD,
				},
			})		
		

			const mailOptions = {
				from: `${email}`,
				to: process.env.GMAIL_USERNAME,
				subject: 'Nowa wiadomość z formularza kontaktowego',
				text: `Nowa wiadomość od ${name} (${email}): ${message}`,
			}

			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.error('Error sending email:', error)
				} else {
					console.log('Email sent:', info.response)
				}
			})
		} catch (error) {
			client.close()
			res.status(500).json({ message: 'Inserting data failed', error: error })
			return
		}
		client.close()

		res.status(201).json({ message: newMessage, successMessage: 'Success' })
	}
}
