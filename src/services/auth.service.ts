export class AuthService {
  constructor() {}

  public login = async (user: string) => {
    return {
      msg: `Welcome to my App, ${ user }`
    }
  }
}
