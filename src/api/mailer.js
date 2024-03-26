import nodemailer from 'nodemailer';
import log from "../log.js";

import {strict as assert} from 'assert';

assert(process.env.MAILER_USER, 'MAILER_USER env is required, define it in .env file')
assert(process.env.MAILER_PASSWORD, 'MAILER_PASSWORD env is required, define it in .env file')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD
  }
});

export const sendMailApi = async ({email, subject, body}) => {
  log.info('API::Mailer::sendMailApi', {email, subject, body});

  const response = await transporter.sendMail({
    from: process.env.MAILER_USER,
    to: email,
    subject,
    text: body,
  });

  return response;
}