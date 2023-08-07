const nodemailer = require('nodemailer')

const SMTP_CONFIG = require('./config/smtp')

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls:{
    rejectUnauthorized: false
  }
})


async function run(){
  const mailSent = await transporter.sendMail({
    text:'Texto do email',
    subject: 'Assunto do email',
    from: 'Caio Viana <caio.viana.39@gmail.com',
    to:['caio.azeredo@idealbsb.com.br', 'caio.viana.39@gmail.com'],
  })
  console.log(mailSent)
}

run()