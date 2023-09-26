const express = require('express');
const {request} = require('graphql-request');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Enable CORS for all routes.
app.use(cors());

const endpoint = 'https://rickandmortyapi.com/graphql';

// Endpoint to fetch a list of human characters from the Rick and Morty API.
app.get('/humans', async (req, res) => {
    const page = req.query.page || 1;
    const query = `
        {
            characters(page: ${page}, filter: { species: "Human" }) {
                info {
                    pages
                }
                results {
                    id
                    name
                    image
                    species
                }
            }
        }
    `;

    // Fetch data from the Rick and Morty API using GraphQL.
    try {
        const data = await request(endpoint, query);
        // Fetch data from the Rick and Morty API using GraphQL.
        const filteredHumans = data.characters.results.filter(character => character.species === 'Human');
        res.json({ totalPages: data.characters.info.pages, results: filteredHumans });
    } catch (error) {
        res.status(500).json({error: "Failed to fetch data"});
    }
});

// Fetch data from the Rick and Morty API using GraphQL.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
