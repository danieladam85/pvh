import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import AddressBookPage from '../pageobjects/addressBook.page';
import AccountPage from '../pageobjects/account.page';

const pages = {
    login: LoginPage
}

Given(/^I open the main page/, async () => {
    await LoginPage.openMainPage()
});

When(/^I click on the accept cookies button/, async () => {
    await LoginPage.acceptCookies()
});

When(/^I click on the login link/, async () => {
    await LoginPage.openLogin()
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I click on account header/, async () => {
    await AccountPage.clickAccountHeader()
});

When(/^I click on the adress book/, async () => {
    await AccountPage.clickAddressBook()
});

When(/^I add an address with details: (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*)/, async (adressType, firstName, lastName, street, houseNumber, city, postalCode, phoneNumber, country) => {
    await AddressBookPage.addAddress()
    await AddressBookPage.clickAddressType(adressType)
    await AddressBookPage.fillFirstName(firstName)
    await AddressBookPage.fillLastName(lastName)
    await AddressBookPage.fillStreetName(street)
    await AddressBookPage.fillHouseNumber(houseNumber)
    await AddressBookPage.fillCity(city)
    await AddressBookPage.fillPostalCode(postalCode)
    await AddressBookPage.fillPhoneNumber(phoneNumber)
    await AddressBookPage.selectCountry(country)
    await AddressBookPage.saveAddress()
});

When(/^I can delete an address/, async () => {
    await AddressBookPage.deleteAddress()
});

Then(/^I should see an account header saying (.*)$/, async (message) => {
    await expect(AccountPage.accountHeader).toBeExisting();
    await expect(AccountPage.accountHeader).toHaveTextContaining(message);
});

Then(/^I should see an error message saying (.*)$/, async (message) => {
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveTextContaining(message);
});

Then(/^I should see a select containing the name of the street displaying (.*)$/, async (street) => {
    await expect(AddressBookPage.selectAddress).toBeExisting()
    await expect(AddressBookPage.selectAddress).toHaveTextContaining(street)
});