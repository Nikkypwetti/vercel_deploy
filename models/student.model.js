const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    phonenumber: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true}
})


let saltRoulds = 10
studentSchema.pre('save', function(next) {
    console.log(this.password);
    bcrypt.hash(this.password, saltRoulds)
    .then((hashedPassword) => {
        console.log(hashedPassword);
        this.password = hashedPassword;
        next();
    })
    .catch((err) => {
        console.log(err);
    });
})
const student = mongoose.model('student_collection', studentSchema)


module.exports = student;