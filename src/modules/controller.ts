import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export function sendFrame(req: Request, res: Response, next: NextFunction) {
  //send frames to receiver
  res.sendStatus(200);
}
