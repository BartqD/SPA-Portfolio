import { MongoClient } from 'mongodb'

export async function connectDatabase() {
	
	if (!process.env.MONGODB_USERNAME || !process.env.MONGODB_PASSWORD) {
		throw new Error('MongoDB username or password is not defined in environment variables.')
	}

	const username = encodeURIComponent(process.env.MONGODB_USERNAME)
	const password = encodeURIComponent(process.env.MONGODB_PASSWORD)
	
	const uri = `mongodb+srv://${username}:${password}@cluster0.lzl7hjs.mongodb.net/?retryWrites=true&w=majority`

	const client = await MongoClient.connect(uri)
	return client
}

export async function insertContact(client: MongoClient, document: any) {
	const db = client.db('SpaPortfolio')
	await db.collection('messages').insertOne(document)
}
