import { LoginElementos } from "../elementos/LoginElementos";

export class LoginPage{

    constructor(page){
        this.page = page
        this.elements = new LoginElementos(page);
    }

    async acessarPagina(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async usuario(user){
        await this.page.locator(this.elements.user).fill(user)

    }

    async password(pass){
        await this.page.locator(this.elements.password).fill(pass)

    }

    async wrongUser(wrongUser){
        await this.page.locator(this.elements.password).fill(wrongUser)

    }

    async wrongPassword(wrongPass){
        await this.page.locator(this.elements.password).fill(wrongPass)

    }

    async clicarBotaoLogin(){
        await this.page.locator(this.elements.botaoLogin).click()

    }



}

