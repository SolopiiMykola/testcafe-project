import BasePage from "./base-page";
import {baseUrl} from "../config/configFile";
import {WebDriverTC} from "../testcafe/web-driver-tc";

const webDriver = new WebDriverTC();

// PO it is automation pattern to describe only specific page like a object
// Page fragments describe the specific block of the web page
// PO - improve test readability, stability, scaling, structure
// PO - use only if needed
class RegistrationPage extends BasePage {

    constructor() {
        super();
    }

    url: string = `${baseUrl}create_account`;
    company = 'input[name="company"]';
    firstNameInput = 'input[name="firstname"]';
    lastNameInput = 'input[name="lastname"]';
    countryCodeInput = '.form-control[name="country_code"]';
    zoneCodeInput = '.form-control[name="zone_code"]';
    emailInput = '[name="customer_form"] [name="email"]';
    passwordInput = '[name="customer_form"] [name="password"]';
    confirmPasswordInput = '[name="customer_form"] [name="confirmed_password"]';
    newsButton = '[name="newsletter"]';
    createAccountButton = '[name="create_account"]';
    successRegistrationMessage = '.alert.alert-success';

    async registerNewUser(customerDetails: CustomerDetails): Promise<void> {
        // Mandatory fields
        await webDriver.typeText(this.firstNameInput, customerDetails.firstName);
        await webDriver.typeText(this.lastNameInput, customerDetails.lastName);
        await webDriver.selectDropDownOptionByAttributeValue(this.countryCodeInput, customerDetails.countryCode);
        await webDriver.typeText(this.emailInput, customerDetails.email);
        await webDriver.typeText(this.passwordInput, customerDetails.password);
        await webDriver.typeText(this.confirmPasswordInput, customerDetails.confirmPassword);
        // Optional
        if (customerDetails.company) {
            await webDriver.typeText(this.company, customerDetails.company)
        }
        await webDriver.click(this.newsButton);
        await webDriver.click(this.createAccountButton);
    }

    async getRegistrationSuccessMessage(): Promise<string> {
        return webDriver.getText(this.successRegistrationMessage, /\W/g);
    }
}

export interface CustomerDetails {
    company?: string
    firstName: string;
    lastName: string;
    countryCode: string;
    zoneCode?: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default new RegistrationPage();