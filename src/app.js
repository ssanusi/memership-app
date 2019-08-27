const express = require('express');
const cors = require('cors');
const logger =  require('morgan');
const bodyParser = require('body-parser');
const rootRouter = require('./routes')


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(logger('dev'));


app.use('/api/v1', rootRouter)



app.get('/*', (req, res) => {
  res.status(200).json({ message : `welcome to membership app`});
})


module.exports = app;


