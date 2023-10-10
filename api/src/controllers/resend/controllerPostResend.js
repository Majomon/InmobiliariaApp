const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const controllerPostProperty = async (formData) => {
  const { name, email, phone, message, url } = formData;
  if (!name || !email || !phone || !message ||! url) {
    return "Faltan datos";
  }
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f7f7f7;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 4px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                font-size: 24px;
                color: #333;
            }
            p {
                font-size: 16px;
                color: #555;
                margin: 10px 0;
            }
            .message {
                border: 1px solid #ccc;
                padding: 10px;
                background-color: #E4F002;
                border-radius: 4px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Mensaje de ${name}</h1>
            <p>Email: ${email}</p>
            <p>Teléfono: ${phone}</p>
            <div>
              <p>Propiedad en la que se pudo haber interesado: </p>
              <p>${url}</p>
            </div>
            <div class="message">
                <p>Mensaje:</p>
                <p>${message}</p>
            </div>
        </div>
    </body>
    </html>
  `;

  const data = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["mauri.monzon91@gmail.com"],
    subject: `Mensaje de: ${name}`,
    html: htmlContent,
  });

  return data;
};

module.exports = controllerPostProperty;
