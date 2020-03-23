import * as express from 'express';
const path = require('path');
const fs = require('fs');

let app = express();

const router = express.Router();

let dataPath = path.join(__dirname, '../albums.json');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

router.get('/api/albums', (req, res) => {
    fs.readFile(dataPath, (err: any, data: any) => {
        if (err) {
            console.log(err);
            res.status(500).send("Something went wrong");
        } else {
            let albums = JSON.parse(data);
            res.status(200).send(albums);
        }
    });
});

router.get('/api/albums/:id', (req, res) => {
    let id: number = parseInt(req.params.id);
    fs.readFile(dataPath, (err: any, data: any) => {
        if (err) {
            console.log(err);
            res.status(500).send("Something went wrong");
        } else {
            let albums = JSON.parse(data);
            let album = albums[id - 1];
            res.status(200).send(album);
        }
    });
});

export default router;