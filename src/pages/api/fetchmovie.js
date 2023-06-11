import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const uri = process.env.DB_HOST;
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db(process.env.MONGODBDB);
            const collection = database.collection('movie');
            const result = await collection.find().toArray();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch data from the database.' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'This Method not allowed.' });
    }
}