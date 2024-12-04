import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";

export class AuthRouter {
  static get routes(): Router {
    const router = Router()
    const authService = new AuthService()
    const controller = new AuthController(authService)

    router.post('/login', controller.login)

    return router
  }
}
