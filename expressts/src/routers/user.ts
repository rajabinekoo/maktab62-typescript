import { Request, Response, RequestHandler, NextFunction } from "express";
import { userOrm, user } from "../model/user";
import UserError from "../dto/error";

export const getReuqestHandler: RequestHandler = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send(await userOrm.getUsers());
  } catch (error) {
    res.locals.error = error;
    next();
  }
};

export const postReuqestHandler: RequestHandler = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: user = req.body;
    await userOrm.addUser(data);
    res.sendStatus(201);
  } catch (error) {
    res.locals.error = error;
    next();
  }
};

export const putReuqestHandler: RequestHandler = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: user = req.body;
    await userOrm.updateUser(req.params.id, data);
    res.sendStatus(200);
  } catch (error) {
    res.locals.error = error;
    next();
  }
};

export const deleteRequestHandler: RequestHandler = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: user = req.body;
    await userOrm.deleteUser(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    res.locals.error = error;
    next();
  }
};

export const errorHandler: RequestHandler = function (
  req: Request,
  res: Response
) {
  const error = res.locals.error;
  if (error instanceof UserError) {
    res.status(error.code).send(error.message);
  } else {
    console.log(error);
    res.sendStatus(500);
  }
};
