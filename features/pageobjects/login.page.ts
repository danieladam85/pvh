import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#signin-email');
    }

    public get inputPassword () {
        return $('#signin-password');
    }

    public get btnSubmit () {
        return $('form[data-testid="authentication-form"] button[type="submit"]');
    }

    public get btnLogin () {
        return $('button[data-testid="sign-in-button"]');
    }

    public get btnAcceptCookies () {
        return $('button.cookie-notice__agree-button_lAIob');
    }

    public get accountHeader () {
        return $('div[data-testid="HeaderMyAccount"]');
    }
  
    public get errorMessage () {
        return $('p.Mui-error,p.error-text__RAc9');
    }

    /**
     * methods to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async acceptCookies () {
        await this.btnAcceptCookies.click();
    }

    public async openLogin () {
        await this.btnLogin.click();
    }

    public openMainPage() {
        return super.openMainPage();
    }
}

export default new LoginPage();
