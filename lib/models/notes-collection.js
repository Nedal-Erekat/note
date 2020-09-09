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
        if (obj.list.length) {
            console.log('should be shown now>>>><<<<<<<');
            console.log(obj);
            console.log('I will show you the catedory');
           let getList=schema.find({ category: obj.list });
            return getList

        } else {
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