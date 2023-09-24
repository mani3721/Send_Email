const nodemailer= require('nodemailer')

const transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'petchimuthuvoc@gmail.com',
        pass:"oylvnjkmxzyldwfw"
    }
})

const mailOptions={
    form:'petchimuthuvoc@gmail.com',
    to:'babotis174@cdeter.com',
    subject:'Nodemailer Mail',
    text:'Testing Mail'
}

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    }else{
        console.log('Email Send'+ info.response);
    }
})