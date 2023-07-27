const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu_email@gmail.com', // Insira aqui o e-mail que irá enviar os e-mails
    pass: 'sua_senha', // Insira aqui a senha do e-mail
  },
});

// Rota para enviar e-mails
app.post('/send-email', express.urlencoded({ extended: false }), (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'seu_email@gmail.com', // Insira aqui o mesmo e-mail configurado acima
    to: 'seu_email@gmail.com', // Insira aqui o e-mail para o qual você deseja receber os e-mails
    subject: 'Contato do formulário',
    text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar o e-mail.');
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.send('E-mail enviado com sucesso!');
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
