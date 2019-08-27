const express = require('express');
const cors = require('cors');
const logger =  require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute')
const planRouter = require('./routes/planRouter')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(logger('dev'));


app.use('/user', userRouter)
app.use('/plan', planRouter)


app.get('/*', (req, res) => {
  res.status(200).json({ message : `welcome to membership app`});
})


module.exports = app;


