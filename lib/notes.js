'use strict';
const mongoose=require('mongoose');
const Notes=require('./models/notes')

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
        let record=new Notes(obj);
        let saved=await record.save();
        console.log("saved : ", saved)
    return saved;
    }
}
// Exports a constructor function

module.exports=Note;


