import http from 'http';
import https from 'https';
import cheerio from 'cheerio';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }
    const { imdbUrl } = req.body;
    const client = imdbUrl.startsWith('https') ? https : http;
    client.get(imdbUrl, (response) => {
        let html = '';
        response.on('data', (chunk) => {
            html += chunk;
        });
        response.on('end', () => {
            const $ = cheerio.load(html);
            const title = $('.sc-afe43def-1').html();
            const year = $('.kdXikI .ipc-inline-list__item > .ipc-link--inherit-color').html();
            const rating = $('.sc-bde20123-1').html();
            const description = $('.sc-2eb29e65-2').html();
            const genres = $('.ipc-chip-list__scroller').map((index, element) => $(element).text()).get();
            const genre = genres[0].match(/[A-Z][a-z]+/g);
            const stars = $('.fUguci').map((index, element) => $(element).text()).get();
            res.status(200).json({ title, year, rating, description, genre, stars });
        });
    }).on('error', (error) => {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    });
}