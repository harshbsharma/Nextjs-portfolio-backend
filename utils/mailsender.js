const nodemailer = require("nodemailer");
require("dotenv").config();


const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    secure:true,
    auth: {
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
});

exports.mailsender = async(firstname,lastname,email)=>
{
    try
    {
     
        const mailinfo = await transporter.sendMail({
            from:"simple.good.smart@gmail.com",
            to:"harshbsharma1209@gmail.com",
            subject:"User is registered",
            html:`<h1>${firstname} ${lastname} wants to Contact you. This is his Mail:- ${email}</h1>`
        })
        
        return mailinfo;

    }
    catch(err)
    {
        console.log("Error in mail sending is -> ",err);
        const msg = "Error in mail sending"; 
        return msg;
    }
};

