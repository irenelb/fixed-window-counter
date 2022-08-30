import httpStatus from 'http-status';
import { Response, Request, NextFunction } from 'express';
import ErrorResponse from '../util/ErrorResponse';
import { newReqPerUser, checkUserWindow } from '../util/fixedWindow';
type MapRequest = Record<string, { reqNumber: number }>;

export function traceUserReq(req: Request, res: Response, next: NextFunction) {
  newReqPerUser(req.uid.subject);
  next();
}

export function windowBearer(req: Request, res: Response, next: NextFunction) {
  const check = checkUserWindow(req.uid.subject);
  if (check) {
    next(new ErrorResponse(httpStatus.TOO_MANY_REQUESTS, 'sorry retry'));
    return;
  }
  next();
}
