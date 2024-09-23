import express from 'express';
import base from './api/base.js';
import upload from './api/upload.js';
import cors from 'cors';
import { expressjwt } from 'express-jwt';
import { jwtSecret } from './util/jwt.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/upload', express.static('upload'));

app.use(expressjwt({
    secret: jwtSecret,
    algorithms: ['HS256']
}).unless({
    path: ['/api/login', /^\/upload\/.*/]
}));

app.use('/api', base);
app.use('/api', upload);

app.listen(3000, () => {
    console.log('listening on port 3000');
});
