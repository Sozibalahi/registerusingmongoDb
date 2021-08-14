
const mongoose = require('mongoose');
const employeSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    }
})
const user = new mongoose.model("User", employeSchema);

// eikhane Register koi pailen? 
// Register nam e to kisu e nai,  tahole hudai ekta kisu likhe dile to
// error dibe. 
// module.export = Register;

// user re export koren.
module.exports = user