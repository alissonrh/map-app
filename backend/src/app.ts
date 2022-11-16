import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userRouter from './users.routes'
import locationRouter from './locations.routes'
var cors = require('cors');

const app = express();
app.use(cors())

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use('/users', userRouter)
app.use('/location', locationRouter)

export default app;