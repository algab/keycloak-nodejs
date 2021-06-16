import { Request, Response } from 'express';

export class UserController {
  async public(req:Request, res:Response) {
    res.status(200).json({ Message: "Route Public" }).end();
  }

  async protected(req:Request, res:Response) {
    res.status(200).json({ Message: "Route Protected" }).end();
  }

  async manager(req:Request, res:Response) {
    res.status(200).json({ Message: "Route Manager" }).end();
  }
};
