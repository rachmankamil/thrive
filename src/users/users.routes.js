import { Router } from "express";
import { userCreateRest, userGetByIDRest } from "./users.controller.js";

const router = Router()

router.post("/users", userCreateRest)
router.get("/users", userGetByIDRest)

export default router

