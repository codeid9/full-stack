import express from "express";
import { createUser, getUserById, getUsers } from "../controller/user.controllers.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);

export default userRouter;
