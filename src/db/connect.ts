import mongoose from 'mongoose';
import log from "../log/logger";

export async function connectWithDatabase() {
  if (process.env.DB_URL) {
    try {
      await mongoose.connect(process.env.DB_URL)
      log.info("Connected with database.")
    } catch (error: unknown) {
      if (error instanceof Error) {
        log.error(error.message)
      };
    };
  };
};