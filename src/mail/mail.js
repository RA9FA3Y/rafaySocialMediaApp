import nodemailer from "nodemailer";

const Mail=()=>{

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "73c2ee2c2f9705",
          pass: "6722f52abe7038"
        }
      });

      const mail={
        MEssage:"shahzaib"
      }
 transport.sendMail(mail,(error)=>{
    console.log("Hello App")
 })


}


export default Mail;