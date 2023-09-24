const nodemailer= require('nodemailer')

const transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'petchimuthuvoc@gmail.com',
        pass:"oylvnjkmxzyldwfw"
    }
})

const maillist =[
    'babotis174@cdeter.com',
    'bebiy40247@fandsend.com',
    'xepefa5468@alvisani.com'
]

const mailOptions={
    form:'petchimuthuvoc@gmail.com',
    // to:'babotis174@cdeter.com',
    subject:'Nodemailer Mail',
    text:'Testing Mail'
    //  html: "<b>Hello world ✔</b>" // html body
}

maillist.forEach(function(to,i, array){
    
    mailOptions.to=to

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        }else{
            console.log('Email Send'+ info.response + to);
        }
    })

})

