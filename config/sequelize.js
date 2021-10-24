import Sequelize from 'sequelize'
import fs from 'fs';
import path from 'path';
import conf from './config.js';
import _ from 'lodash';

const models = {};
const modelsDir = path.normalize(`${__dirname}/../server/model`);
const modelPostfix = '.model.js';

// connect to mysql db

const connection = new Sequelize(
    conf.mysql.db,
    conf.mysql.user,
    conf.mysql.password,
    {
        dialect: 'mysql',
        operatorsAliases: false,
        port: conf.mysql.port,
        host: conf.mysql.host,
        timezone: '+07:00'
    }
);

// loop through all files in models directory ignoring hidden files and this file
let modelFiles = fs.readdirSync(modelsDir)
    .filter(file => (file.indexOf('.') !== 0) && (file.indexOf('.map') === -1));

// import model files and save model names
modelFiles.forEach((file) => {
    console.log(`Loading model file ${file}`);
    if (file.includes(modelPostfix)) {
        const model = connection.import(path.join(modelsDir, file));
        models[model.name] = model;
    }
});

// Synchronizing any model changes with database.
if (conf.sync === 'true') {
    let alter = {alter: true};
    connection
        .sync()
        .then(() => {
            console.log('Database model synchronized');
        })
        .catch(err => {
            console.log('An error found : %j', err);
        });
}
_.
// assign the sequelize variables to the db object and returning the db.
module.exports = _.assignIn({
    connection,
    Sequelize: Sequelize,
}, models);

