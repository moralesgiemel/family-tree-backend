const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({

    profile_pic: {
        type: String,
    },
    first_name: {
        type: String,
        required: [true, "First Name is required"]
    },
    last_name: {
        type: String,
        required: [true, "Last Name is required"]
    },
    email: {
        type:String,
        required: [true, "Email is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    birthDate: {
        type: Date,
        required: [true, "BirthDate is required"]
    }

})

module.exports = mongoose.model('member', memberSchema)