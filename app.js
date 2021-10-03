const express = require("express");
const multer = require('multer');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const filestorageEngine = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './images');
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    }
});

const upload = multer({storage:filestorageEngine});

app.post('/stud',(req,res) => {
    console.log(req.file);
});

app.get('/stud', (req,res) => {
    res.send('hi this is manjunath')
})

app.listen(port, () => {
    console.log(`connected to ${port}`);
});