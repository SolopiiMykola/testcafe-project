import * as faker from "faker";
import RegistrationPage, {CustomerDetails} from "../pages/registration-page";
import {assert} from "../assertion/assertion-ts";
import {baseUrl} from "../config/configFile";

// Define test data
const successMsg = 'Your customer account has been created';
const password = faker.internet.password(10);
const validCustomerData: CustomerDetails = {
    company: faker.company.companyName(),
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    countryCode: 'UA',
    email: faker.internet.email(),
    password: password,
    confirmPassword: password
};

fixture `Registration page`
    .page(RegistrationPage.url);

// Page Object example
test.only('Registration new user from UA', async t => {
    await RegistrationPage.navigateToUrl(RegistrationPage.url);
    await RegistrationPage.registerNewUser(validCustomerData);
    await assert.equals(await RegistrationPage.getRegistrationSuccessMessage(), successMsg);
    await assert.equals(await RegistrationPage.getUrl(), baseUrl);
});