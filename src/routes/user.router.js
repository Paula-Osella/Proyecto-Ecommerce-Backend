import { Router } from "express";
import {userController} from "../controllers/user.controller.js";
import { passportCall } from "../passport/passportCall.js";


const router = Router();

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/current", passportCall('jwt'), userController.privateData);
router.put('/change-password', userController.changePassword) 


export default router; 
