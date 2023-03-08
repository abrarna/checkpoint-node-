const nodeMailer = require("nodemailer");
const html = <h1> hello world</h1>;
<p>Isn't NodeMailer usefull</p>;
async function main() {
  const transpoter = nodeMailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "abrarnaaser@gmail.com",
      pass: "NodeMailer123!",
    },
  });
  await transpoter.sendMail({
    from: "Openjavascript <test@openjavascipt.info",
    to: "abrarnasser790@gmail.com",
    subject: "testing",
  });
}
main().catch((e) => console.log(e));
