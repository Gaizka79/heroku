const express = require('express');
require('dotenv').config();
var helmet = require('helmet');
const morgan = require('./middlewares/morganConfig');

const app = express();
const PORT = process.env.LOCAL_PORT;

app.use(helmet());
app.use(morgan(':date[clf] :method :referrer :host :status :param[id] - :response-time ms :body'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/kaixo', (req, res) => res.status(203).send('Kaixo munduari!'));
app.use('/agur', (req, res) => res.status(202).send('Agur munduari'));
app.use('/', (req, res) => res.status(200).send('kaixo ala agur'));

const goazen = async () => {
    app.listen(PORT, () => console.log(`Goazen ${PORT}...`));
}
goazen();
