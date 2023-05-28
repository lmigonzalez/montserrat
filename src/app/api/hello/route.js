let nodemailer = require('nodemailer');

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  try {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      secure: true,
      port: 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: `montserratarreola@gmail.com`,
      subject: 'Mensaje de un cliente',
      html: `<div> 
			<p> <b>Nombre Completo: </b> ${data.fullName} </p>
			<p> <b>Email: </b> ${data.email} </p>
			<p> <b>Tel: </b> ${data.phone} </p>
			<p> <b>Nota: </b> ${data.note} </p>
			</div>`,
    });

    return new Response('sent');
  } catch (err) {
    console.log(err);
    console.log(err);
    return new Response(err);
  }
}
