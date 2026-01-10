const { number, string } = require("joi");
const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    name: {
        type:string,
        require :true,
    },
    email:{
        type:string,
        require :true,
    },
    numer:{
          type:number,
        require :true,
    },
    issue:{
          type:string,
        require :true,
    },
    reachedBY:{
          type:string,
        require :true,
    },
    msg:{
          type:string,
        require :true,
    }
});


module.exports = mongoose.model('Query', querySchema);
