import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddressBookPage extends Page {
    /**
     * define selectors using getter methods
     */
   
    public get btnAddAddress () {
        return $('button[data-testid="address-add-button"]');
    }
    
    public get radioAddressType () {
        return $('input#deliveryBillingAddress_new');
    }

    public get radioAddressType2 () {
        return $('input#billingAddress_new');
    }

    public get radioAddressType3 () {
        return $('input#deliveryAddress_new');
    }

    public get inputFirstName () {
        return $('input#firstName');
    }

    public get inputLastName () {
        return $('input#lastName');
    }

    public get inputStreetName () {
        return $('input#address1');
    }

    public get inputHouseNumber () {
        return $('input#address2');
    }

    public get inputCity () {
        return $('input#city');
    }

    public get inputPostalCode () {
        return $('input#zipCode');
    }

    public get inputPhoneNumber () {
        return $('input#phone1');
    }

    public get selCountry () {
        return $('select#country');
    }


    public get btnSaveAddress () {
        return $('button[data-testid="address-save-button"]');
    }    

    public get btnDeleteAddress () {
        return $('button[data-testid="address-delete-button"]');
    }

    public get selectAddress () {
        return $('select[data-testid="address-book-select"]');
    }

    /**
     * methods to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async addAddress () {
        await this.btnAddAddress.click();
    }

    public async saveAddress () {
        await this.btnSaveAddress.click();
    }

    public async clickAddressType (type: string) {
        if (type == "billingAndDelivery")
        { await this.radioAddressType.click(); }
        else if (type == "billing")
        { await this.radioAddressType2.click(); }
        else if (type == "delivery")
        { await this.radioAddressType3.click(); }
    }

    public async fillFirstName (fisrtName: string) {
        await this.inputFirstName.setValue(fisrtName);
    }

    public async fillLastName (lastName: string) {
        await this.inputLastName.setValue(lastName);
    }

    public async fillStreetName (streetName: string) {
        await this.inputStreetName.setValue(streetName);
    }

    public async fillHouseNumber (houseNumber: string) {
        await this.inputHouseNumber.setValue(houseNumber);
    }
    
    public async fillCity (city: string) {
        await this.inputCity.setValue(city);
    }
    
    public async fillPostalCode (postalCode: string) {
        await this.inputPostalCode.setValue(postalCode);
    }

    public async fillPhoneNumber (phoneNumber: string) {
        await this.inputPhoneNumber.setValue(phoneNumber);
    }

    public async selectCountry (country: string) {
        await this.selCountry.selectByVisibleText(country);
    }

    public async deleteAddress () {
        await this.btnDeleteAddress.click();
    }
}

export default new AddressBookPage();
