const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

// Body parser
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Listen
app.listen(PORT, () => {
    console.log("Server listening in http://localhost:"+PORT);
})
