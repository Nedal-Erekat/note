'use strict';

//To read command line arguments
const minimist = require('minimist');

class Input {
    constructor() {

        //read command line arguments
        const args = minimist(process.argv.slice(2));


        this.Parse = this.getParse(args.a);
    }
    getParse(args = '') {

        //evaluates and validates the input 
        //Returns an instance containing the action to perform and the payload for the action

        if (args && args.length) {
            // console.log(`Adding: ${args}`);
            return {
                action: 'add',
                payload: args
            }
        } else {
            console.log('check the argument');
            return false;
        }
    }
    vlaid(){
        return this.Parse ;
    }

}
//Exports a constructor function
module.exports = Input;
