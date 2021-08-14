
const mongoose = require('mongoose');
const employeSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    }
})
const user = new mongoose.model("User", employeSchema);
module.export = Register;