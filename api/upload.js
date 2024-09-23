import express from 'express';
import upload from "../util/multer.js";

const router = new express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
    res.json({
        code: 200,
        data: req.file,
        msg: 'success'
    });
});

export default router;
