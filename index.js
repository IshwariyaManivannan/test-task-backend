const express = require("express");
const app = express();
const db=require('./database/connection')
const server=require('./routes/route')
var cors = require("cors");
const bodyParser = require("body-parser");
db.connect.connect((err)=>{if (err) throw err;
else console.log('db is connected')});

app.use(cors());
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());

app.use('/',server);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });