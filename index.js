#!/usr/bin/env node
'use strict';

//Requires the library files you will be writing (input, notes)
const Input= require('./lib/input.js'); 
const Note= require('./lib/notes.js')

//Instantiates an instance of an “Input” parser module
const obj= new Input();

//Passes the command to the Notes library, which executes the command
const note1=new Note(obj)

