import log from "../log.js";
import {sendMailApi} from "../api/mailer.js";

export const sendMail = async ({email, subject, body}) => {
  log.info('Controller::Mailer::sendMail', {email, subject, body});

  await sendMailApi({email, subject, body});

  return {
    message: 'Mail sent'
  };
}