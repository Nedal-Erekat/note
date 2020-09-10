'use strict';
// const mongoose=require('mongoose');
// const Notes=require('./models/notes')
const collectionNotes=require('./models/notes-collection')


class Note{
    constructor(obj){
        this.execute(obj)
    }
    
    execute(obj=undefined){
        if (obj.Parse){
            this.add(obj.Parse.payload,obj.Parse.category)
            .then(data=>{

                console.log(`here is the DATABASE/: ${data}`);
            })
        }
    }

    add(text,category){
        let noteObj={
            id:Math.floor(Math.random() * 101),//random
            text:text,
            category: category
        }

        console.log('Adding Note: '+noteObj.text+ noteObj.category );
        return this.save(noteObj);
    }
    async save(obj){
       let record= await collectionNotes.creat(obj);
        // console.log("saved : ", record)
    return record;
    }
}
// Exports a constructor function

module.exports=Note;


