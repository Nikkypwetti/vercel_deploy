const student = require('../models/student.model');

const cloudinary = require('cloudinary').v2;

const nodemailer = require('nodemailer')

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});


const getUserLandingPage = (req,res)=>{
    res.send(
        [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
            },
            {
                "name": "Choco",
                "Category": "Food",   
                "Position": "Snack"
                
            },
        ]
    )
    }

const saveFile = (req,res) => {
    console.log(req.body);
    let imago = req.body.myImage
    // res.send("succcessfully uploaded file")

    const resImage = cloudinary.uploader.upload(imago, {public_id: "product1  "})

    resImage.then((data) => {
    console.log(data);
    console.log(data.secure_url);
    let cloudLink = data.secure_url
    res.send({message:"successfully uploaded file", cloudLink});
    }).catch((err) => {
    console.log(err);
    });
}

const getNodeMailer = (req, res) => {
    // res.send({message:"successfully uploaded", status: true});
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        }
    })

    let mailoptions = {
        from : process.env.USER,
        to : ['olanikebasirat21@gmail.com', 'nikkypwetti@gmail.com', 'oyeniranoluwafemi36@gmail.com'],
        subject : 'Nodemailer Check',
        text : 'Hello, Nodemailer',
        html : "<h1>This is node mailer check</h1>",
        attachments : [
            {
                filename : "paperbag",
                path : "https://res.cloudinary.com/dtu3koszg/image/upload/v1684922695/paperbag.png",
            }
        ]
    }

    transporter.sendMail(mailoptions)
    .then((response) => {
        res.send({status:"true", message:response})
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
        res.send({status:"false", message:err})
    })
}

const getStudentInfo = (req,res) => {
     console.log(req.body);  
     res.send('success')
}

const getStudent = (req,res) => {
    console.log(req.body);
    res.send('successfully');
}

const postStudent = (req,res) => {
    // console.log(req.body,"hey");
    res.send('You have signed up successfully')
    let form = new student(req.body)
    console.log(req.body);
    form.save()
    .then((response)=>{
        console.log({message:"Successfully signed up",response});
        // res.send({message:"Successfully signed up",status:true});
    })
    .catch((err)=>{
        // console.log({message: "Error Signing Up", err});
        // res.send({message: "Error Occurred", status:false});
    })

}

const authenticateUser = (req, res) => {
    console.log(req.body);
};
module.exports = {getUserLandingPage, getStudentInfo, saveFile,getStudent,postStudent,authenticateUser, getNodeMailer}