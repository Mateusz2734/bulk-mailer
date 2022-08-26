import dotenv from 'dotenv';

dotenv.config();

export default {
  db_url: process.env.DB_URL as string,
  pino_log_level: process.env.PINO_LOG_LEVEL as string,
  port: process.env.PORT as string,
  sendgrid_api_key: process.env.SENDGRID_API_KEY as string,
  from_email: process.env.FROM_EMAIL as string
};
