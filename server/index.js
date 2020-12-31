import express from 'express';
import bodyParser from 'body-parser';
import useRoutes from './routes/routes.js';
import { createTables } from './Models/index.js';
import cors from 'cors'


const app = express();
const _PORT = process.env.PORT || 3002;






app.use(bodyParser.json());
app.use(cors());
app.use('/', useRoutes)






app.listen(_PORT, () => {
    createTables()
    console.log('Server listening on port 3000');
})