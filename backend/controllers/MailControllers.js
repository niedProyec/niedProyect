import nodemailer from 'nodemailer';

export async function sendEmail(req,res){
    const { cliente, asunto} = req.headers;

    const emailBody = `
  <html>
    <body>
      <h1>Correo Electrónico con Botones</h1>
      <p>Haz clic en uno de los siguientes botones:</p>
        <button>Actualizar Información 1</button>
        <button>Actualizar Información 2</button>
    </body>
  </html>
`;

    var message = {
        from: "proyectoNiEd@gmail.com",
        to: cliente,
        subject: asunto,
        html: emailBody
    }

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: 'proyectoNiEd@gmail.com',
            pass: 'alplbxwqtgyvzqri'
        }
    })

    transporter.sendMail(message,(error,info) => {
        if(error){
            console.log(error)
        }else{
            console.log('email send'+info.response)
            res.send('ok');
        }
    });
}