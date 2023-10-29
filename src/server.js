require('dotenv').config();
const router = require('./routes/route');
const app = require('./api');

const db = require('./database/models');

const port = process.env.API_PORT || 8800;

app.use(router);

app.get('/', (_request, response) => {
  response.status(200).json({ message: 'voce esta na pagina home' });
});

app.listen(port, () => {
  console.log(`Online na porta ${port}`);
});
