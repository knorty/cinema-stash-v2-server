const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const search = require('./controller/search-tmdb');
const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.post('/search', search.searchMovie);

app.listen(8000, () => console.log(`Live on port 8000`))