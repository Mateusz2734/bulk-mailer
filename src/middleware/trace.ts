import { Request, Response, NextFunction } from "express";
import log from "../log/logger";


export function trace(req: Request, res: Response, next: NextFunction) {
  log.trace(`${req.method} /groups${req.url}`);
  next();
}
