const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hola! Deploy OK desde GitHub Actions'));
app.listen(port, () => console.log(`App en :${port}`));
