import { NextFunction, Request, Response } from "express";

export default function authorization(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (authorization === undefined) {
    req.headers.authorization = 'Bearer ';
  }
  next(); 
};
