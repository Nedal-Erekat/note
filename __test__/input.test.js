'use strict';
jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(()=> {
    return {
        a: 'the note is the best to remember'
    }
});

const Input=require('../lib/input.js');

describe('Input Module', () => {

    it('valid() will give an true in case it is not empty', ()=> {
        let obj = new Input();
        expect(obj.vlaid()).toBeTruthy();
        
    });

    it('The input module creates a new instance with both action and payload properties',()=>{
        let obj=new Input();
        let note='the work should be done'
        expect(obj.getParse(note)).toEqual({
            action: 'add',
            payload: note
        })
    })

    it('valid() will give an error in case it is empty', ()=> {
        let obj = new Input();
        expect(obj.getParse('')).toBeFalsy();
        
    });

});

//should check if the getParse return true and creat instanc with {action and payload}
// and return false in case the data was wrong

// need to mock the minimist 