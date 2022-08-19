import mongoose from 'mongoose';
import log from "../log/logger";
import config from "../config/default";

export async function connectWithDatabase() {
  try {
    await mongoose.connect(config.db_url);
    log.info("Connected with database.");
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
    };
  };
};