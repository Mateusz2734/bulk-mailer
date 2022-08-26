import mongoose from 'mongoose';
import config from "../config/default";
import log from "../log/logger";

export async function connectWithDatabase(): Promise<void> {
  try {
    await mongoose.connect(config.db_url);
    log.info("Connected with database.");
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
    };
  };
};