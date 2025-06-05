const express = require('express');
const app = express();
const PORT = 8000;
const routes = require('./src/routes/userRoutes');

app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the User API');
}
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});