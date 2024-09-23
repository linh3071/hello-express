import express from 'express';
import { encodeToken } from '../util/jwt.js';
import db from '../util/db.js';
import {decrypt, hashMd5} from "../util/crypto.js";

const router = new express.Router();

router.get('/user', (req, res) => {
    res.json({
        code: 200,
        data: 'hello user',
        msg: 'success'
    });
});

router.post('/login', (req, res) => {
    const password = hashMd5(decrypt(req.body.password))

    const sql = `SELECT id,username FROM  users WHERE username = '${req.body.username}' and password = '${password}'`;
    db.all(sql, (err, result) => {
        if (result && result.length) {
            res.json({
                code: 200,
                data: {
                    text: 'hello ' + req.body.username,
                    token: encodeToken({ username: req.body.username, id: result[0].id })
                },
                msg: 'success'
            });
        } else {
            res.json({
                code: 400,
                data: null,
                msg: '用户名或密码错误'
            });
        }
    });
});

export default router;
