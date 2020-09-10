'use strict';
const schema = require('./notes.js')

class Note {
    constructor() {

    }

    creat(newRecord) {
        let toBeAdded = new schema(newRecord)
        return toBeAdded.save();
    }

    get(obj) {
        if (obj.category) {
            
            console.log('I will show you the catedory');
            let getList=schema.find({ category: obj.category });
            return getList
            
        } else {
            console.log(obj);
            console.log('I will show you the list');
            return schema.find({});
        }
    }

    update(_id, record) {
        return schema.findByIdAndUpdate(_id, record);

    }

    delete(task) {
        return  schema.findByIdAndDelete({ _id: task.delete });
    }
} 

module.exports=new Note();