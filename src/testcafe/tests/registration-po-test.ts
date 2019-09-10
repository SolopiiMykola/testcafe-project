import RegistrationPage from "../../pages/registration-page";
import {assert} from "../assertion-tc";
import {baseUrl} from "../../config/configFile";
import {validCustomerData} from "../../fixture/testData";

// Define test data
const successMsg = 'Your customer account has been created';

fixture `Registration page`
    .page(RegistrationPage.url);

// Page Object example
test.only('Registration new user from UA', async () => {
    await RegistrationPage.registerNewUser(validCustomerData);
    await assert.equals(await RegistrationPage.getRegistrationSuccessMessage(), successMsg);
    await assert.equals(await RegistrationPage.getUrl(), baseUrl);
});