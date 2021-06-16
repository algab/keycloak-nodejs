import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';

interface JWTDecode {
  resource_access: {
    [key: string]: {
      roles: Array<string>
    }
  }
}

export default function verify(role:string) {
  return function(req:Request,res:Response,next:NextFunction) {
    try {
      const { authorization } = req.headers;
      if (authorization) {           
        const file = fs.readFileSync(path.join(__dirname, '..', '..', '..', String(process.env.FILE_CERT)));       
        const decode = jwt.verify(authorization.slice(7), file, { algorithms: ['RS256'] });
        const { resource_access } = decode as JWTDecode;
        if (resource_access[String(process.env.RESOURCE)].roles.includes(role)) {
          next();
        } else {
          res.status(401).json({ Message: 'Unauthorized' }).end();
        }  
      } else {
        res.status(401).json({ Message: 'Unauthorized' }).end();
      }
    } catch (error) {       
      res.status(401).json({ Message: 'Unauthorized' }).end();
    }
  }
}
