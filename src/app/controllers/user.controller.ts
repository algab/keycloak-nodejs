import { Request, Response } from 'express';

export class UserController {
  async user(req:Request, res:Response) {
    res.status(200).json({ Message: "User" }).end();
  }

  async manager(req:Request, res:Response) {
    res.status(200).json({ Message: "Manager" }).end();
  }
};
