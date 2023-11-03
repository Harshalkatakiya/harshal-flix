import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { type, imdbURL, image, title, year, rating, description, language, category, stars, downloadLinks, episodes } = req.body;
        const uri = process.env.DB_HOST;
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db(process.env.MONGODBDB);
            const collection = database.collection('movies');
            const result = await collection.insertOne({ type, imdbURL, image, title, year, rating, description, language, category, stars, downloadLinks, episodes });
            res.status(200).json({ message: 'Form submitted successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to submit the form.' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
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