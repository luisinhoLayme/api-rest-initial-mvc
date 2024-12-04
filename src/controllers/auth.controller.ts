import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { HandleError } from "../utils/error.handle";

export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  public login = (req: Request, res: Response) => {
    this.authService.login('Luisinho')
      .then( resp => res.json(resp) )
      .catch( error => HandleError.http(error, res) )
  }
}
