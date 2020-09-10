'use strict';
jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
    return {
        a: 'the note is the best to remember',
        category:'life'
    }
});

const Input = require('../lib/input.js');

describe('Input Module', () => {

    it('valid() will give an true in case it is not empty', () => {
        let obj = new Input();
        expect(obj.vlaid()).toBeTruthy();

    });

    it('The input module creates a new instance with both action and payload properties', () => {
        let obj = new Input();
        let args = {a:'the note is the best to remember',category:'life'};
        expect(obj.getParse(args)).toEqual({
            action: 'add',
            payload: args.a,
            category:args.category
        })
    })

    it('valid() will give an error in case it is empty', () => {
        let obj = new Input();
        expect(obj.getParse('')).toBeFalsy();

    });

    // it('getData() method should return list or list of specific category according to arrgument',()=>{
    //     let obj =new Input();
    //     let args={list:true,category:'life'};
    //     expect(obj.getData(args)).toEqual({category:'life',text:'the note is the best to remember'})
    // })
});

//should check if the getParse return true and creat instanc with {action and payload}
// and return false in case the data was wrong

// need to mock the minimist 