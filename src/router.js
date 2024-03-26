import Router from '@koa/router';
import {healthcheck} from "./api/healthcheck.js";
import {routeToFunction} from "./middlewares.js";
import {sendMail} from "./controllers/mailer.js";

const router = new Router();

router.get('/healthcheck', routeToFunction(healthcheck));

router.post('/send-mail', routeToFunction(sendMail));

export default router;