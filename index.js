const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

require('dotenv').config()

require('./src/app')
require('./src/bot')
require('./src/keyb')
require('./src/keyone')
require('./src/keytwo')
require('./src/keythree')
require('./src/keyfour')
require('./src/keyfive')
require('./src/keysix')
require('./src/keyseven')
require('./src/prod')(app);
