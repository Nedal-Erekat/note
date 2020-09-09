'use strict';

//To read command line arguments
const minimist = require('minimist');
// const Notes = require('./models/notes');
const collectionNotes=require('./models/notes-collection')



class Input {
    constructor() {

        //read command line arguments
        const args = minimist(process.argv.slice(2));
        this.Parse = this.getParse(args);
        this.allSaved = this.getData(args)
        this.deleteNote = this.deleteTask(args)
        // this.category=this.getCategory(args.category)
    }
    getParse(args = '') {

        //evaluates and validates the input 
        //Returns an instance containing the action to perform and the payload for the action

        if (args.a && args.a.length) {
            // console.log(`Adding: ${args}`);
            return {
                action: 'add',
                payload: args.a,
                category: args.category
            }
        } else {
            console.log('check the argument');
            return false;
        }
    }
    vlaid() {
        return this.Parse;
    }
    async getData(obj) {
        if (obj.list) {
           let displayTheNotes= await collectionNotes.get(obj)
           await this.show(displayTheNotes);
        } else return false;

    }
    show(data) {
        console.log('Do your Tasks');
        data.forEach((element, i) => {
            console.log(`===============================Task Number${i + 1}=====================================`);
            console.log();
            console.log(element.text);
            console.log('category: ' + element.category + ' ' + element._id);
            console.log();

        });
    }
    async deleteTask(task) {
        if (task.delete) {
          let theDeletedNote= await collectionNotes.delete(task)
            console.log(`The Note that has this id= ${theDeletedNote} has been deleted`);
        }
    }
}
//Exports a constructor function
module.exports = Input;
