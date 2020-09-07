'use strict';

const Note=require('../lib/notes.js');

// to get to know if something was called or not
// referance to the Docs of the jest
// jest.spyOn(object, methodName)
jest.spyOn(global.console, 'log');
// HINT: You will need to use a spy to check that console.log was properly called

// describe the module I am testing
describe('Notes Added', ()=> {
    // test case
    it('Note instance does nothing with invalid options', ()=> {
        const note = new Note('');
        expect(console.log).not.toHaveBeenCalled();
    });

    it('Note instance logs out when given options', ()=> {
        const note = new Note({Parse:{
            action: 'add',
            payload: 'args.a'
        }});
        expect(console.log).toHaveBeenCalled();
    });

});
// Nothing is logged to the console if there was no command given
// If the command (add) and data (the note) were both valid, assert that the console shows the output.
