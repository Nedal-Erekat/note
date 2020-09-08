'use strict';

//To read command line arguments
const minimist = require('minimist');
const Notes = require('./models/notes');


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

            if (obj.list.length) {
                console.log('I will show you the catedory');

                let accordingCategory = await Notes.find({ category: obj.list });
                await this.show(accordingCategory);

            } else {
                console.log('I will show you the list');

                let allNotes = await Notes.find({});
                await this.show(allNotes);
            }

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
            await Notes.findByIdAndDelete({ _id: task.delete })
            console.log(`The Note that has this id= ${task.delete} has been deleted`);
        }
    }
}
//Exports a constructor function
module.exports = Input;
