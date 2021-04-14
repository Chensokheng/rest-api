import express, { NextFunction, Request, Response } from 'express';
import db from './config/database.config';
import todoRouter from './todo/route';

db.sync().then(() => {
	console.log('connect to db');
});

const app = express();
const port = 9000;

app.use(express.json());

app.use('/api/v1', todoRouter);

app.listen(port, () => {
	console.log('server is running on port ' + port);
});
