import {Request, Response, RequestHandler} from "express";
import {userOrm, user} from '../model/user'

export const getReuqestHandler: RequestHandler = function (req: Request, res: Response) {
    res.send(userOrm.getUsers())
}

export const postReuqestHandler: RequestHandler = function (req: Request, res: Response) {
    const data: user = req.body
    userOrm.addUser(data)
    res.sendStatus(201)
}
