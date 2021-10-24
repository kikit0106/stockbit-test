import config from './config/config.js';
//import model from './config/sequelize.js';
import app from 'express';

// define the home page route
app.get('/search', function (req, res) {
    res.send('Search movies')
});

// define the about route
app.get('/detail', function (req, res) {
    res.send('Detail movie')
});

// modules.parent check is required to support mocha watch
if (!module.parent) {
    app.listen(config.port, () => {
        console.info(`server started on port ${config.port} -- (${config.env})`);
    });
}

export default app;