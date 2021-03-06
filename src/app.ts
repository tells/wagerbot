import express from 'express';
import bodyParser from 'body-parser';
import routeBinder from './routes';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routeBinder(app);

export default app;
