#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');

const MONGOOSE_URL = 'mongodb://localhost:27017/notesDB';

mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});



//Requires the library files you will be writing (input, notes)
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js')

//Instantiates an instance of an “Input” parser module
const obj = new Input();

//Passes the command to the Notes library, which executes the command
 const note1 =  new Note(obj)

//  mongoose.disconnect();