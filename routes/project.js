const express = require("express");
const router = express.Router();
const app = express();


app.set('view engine', 'pug');

router.get('/', (req, res) =>{
    res.render('project');
});

module.exports = router;