import express from 'express';
import bodyParser from 'body-parser';

// Global variables for app.js & exports only
export const app = express()

// Express middlewares
app.use(bodyParser.urlencoded({ extended: true })) // for forms
app.use(bodyParser.json()) // for json object