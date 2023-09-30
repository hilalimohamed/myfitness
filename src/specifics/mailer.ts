import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt'
import prisma from '@/src/lib/prisma'

export const sendEmail = async ({ email, id }: any) => {
  try {
    const hashedToken = await bcrypt.hash(id.toString(), 10)
    // Calculate the expiration date and time (1 hour from now)
    const expirationTimestamp = Date.now() + 3600000 // 1 hour in milliseconds
    await prisma.user.update({
      where: { id },
      data: {
        verifyToken: hashedToken,
        verifyTokenExpiry: new Date(expirationTimestamp),
      },
    })
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', // Use the email service you want (e.g., 'Gmail', 'Outlook', etc.)
    //   auth: {
    //     user: process.env.EMAIL_USER, // Your email address
    //     pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    //   },
    // })
    var transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '41cb0f3e685400',
        pass: '65bf9173e55fcd',
      },
    })
    const mailoption = {
      from: 'mtestper@gmail.com',
      to: email,
      subject: 'Verify your email',
      html: `<p>Click <a href='${process.env.HOST}/verifyemail?token=${hashedToken}'>here</a> to verify your email.or copy and paste this link. <br> ${process.env.HOST}/verifyemail?token=${hashedToken}</p>`,
    }
    const mailresponse = await transport.sendMail(mailoption)
    return mailresponse
  } catch (error: any) {
    throw new Error(error.message)
  }
}
