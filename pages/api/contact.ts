import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDatabase, insertContact } from '../../lib/db-util'

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
			console.log(error);
			res.status(500).json({ message: 'Connecting to the database failed', error: error })
			return
		}
		try {
			const result = await insertContact(client, newMessage)
		} catch (error) {
			client.close()
			res.status(500).json({ message: 'Inserting data failed', error: error })
			return
		}
		client.close()

		res.status(201).json({ message: newMessage, successMessage: 'Success' })
	}
}
