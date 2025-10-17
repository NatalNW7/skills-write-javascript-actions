const request = require('request-promise');

async function getJoke() {
    const options = {
        method: 'GET',
        uri: 'https://icanhazdadjoke.com/',
        json: true,
        headers: {
            'Accept': 'application/json',
            "User-Agent": "Writing-JavaScript-Actions Github Skills Course"
        }
    };

    try {
        const result = await request(options);
        return result.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        return 'Sorry, I could not fetch a joke at this time.';
    }
}

module.exports = getJoke;