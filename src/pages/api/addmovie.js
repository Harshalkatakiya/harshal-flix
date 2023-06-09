import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { type, imdb, image, title, year, rating, description, language, category, stars, downloadLinks, episodes, size } = req.body;
        const uri = 'mongodb+srv://katakiyaharshl001:2cbHVxcHwahLLNDI@cluster0.fqocx8a.mongodb.net/?retryWrites=true&w=majority';
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db('movies');
            const collection = database.collection('movie');
            const result = await collection.insertOne({ type, imdb, image, title, year, rating, description, language, category, stars, downloadLinks, episodes });
            res.status(200).json({ message: 'Form submitted successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to submit the form.' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}
