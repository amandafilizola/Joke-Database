const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const server = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://micro:micro@cluster0-pfp1o.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
server.use(cors());
server.use(express.json())
server.use(routes);
server.listen(process.env.PORT || 3333)