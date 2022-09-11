import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */

     public get accountHeader () {
        return $('div[data-testid="HeaderMyAccount"]');
    }
  
    public get addressBook () {
        return $('=Adresboek');
    }    

    /**
     * methods to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async clickAccountHeader () {
        await this.accountHeader.click();
    }
  
    public async clickAddressBook () {
        await this.addressBook.click();
    }

}

export default new AccountPage();
