export class Auth {
    login: string;
    password: string;
    security: string;
    response: string;

    constructor(login: string, password: string, security: string, response: string){
        this.login = login;
        this.password = password;
        this.security = security;
        this.response = response;
    }
}
