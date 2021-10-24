import Joi from 'joi';
// require and configure dotenv, will load vars in .env in PROCESS.ENV
import dotenv from 'dotenv';
dotenv.config();
// define validation for all the env vars
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().default('development'),
    PORT: Joi.number().default(4000),
    OMDB_API_KEY: Joi.string(),
    OMDB_API_URL: Joi.string(),
    DB_NAME: Joi.string().required(),
    DB_PORT: Joi.number().default(3306),
    DB_HOST: Joi.string().default('localhost'),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().allow(''),
    DB_SYNC: Joi.string().default('false'),
}).unknown().required();

const {error, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    omdb_api_key: envVars.OMDB_API_KEY,
    omdb_api_url: envVars.OMDB_API_URL,
    mysql: {
        db: envVars.DB_NAME,
        port: envVars.DB_PORT,
        host: envVars.DB_HOST,
        user: envVars.DB_USER,
        password: envVars.DB_PASSWORD,
    },
    sync: envVars.DB_SYNC,
};

export default config;