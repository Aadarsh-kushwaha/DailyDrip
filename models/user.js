const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: function () {
            return !this.googleId; // normal user ke liye required
        }
    },
    age: {
        type: Number,
        required: function () {
            return !this.googleId; // mtlb ki agar user normall haii tab required agar by google then not required 
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: function () {
            return !this.googleId;
        }
    },
    password: {
        type: String,
        required: function () {
            return !this.googleId;
        }
    },
    googleId: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model("User", userSchema);
