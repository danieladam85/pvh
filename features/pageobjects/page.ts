
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    public openMainPage () {
        return browser.url(`https://nl.tommy.com/`)
    }
}
