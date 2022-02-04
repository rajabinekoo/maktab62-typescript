import express, {Router} from "express";
import {getReuqestHandler as getUsers, postReuqestHandler as createUser} from './user'

const router = Router()

router.get("/user", getUsers)
router.post("/user", createUser)

export default router
