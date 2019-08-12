import {Selector} from "testcafe";

class CustomerDetails {
    company = Selector('input[name="company"]');
    firstNameInput = Selector('input[name="firstname"]');
    lastNameInput = Selector('input[name="lastname"]');
    countryCodeInput = Selector('.form-control[name="country_code"]');
    zoneCodeInput = Selector('.form-control[name="zone_code"]');
    emailInput = Selector('[name="customer_form"] [name="email"]');
    passwordInput = Selector('[name="customer_form"] [name="password"]');
    confirmPasswordInput = Selector('[name="customer_form"] [name="confirmed_password"]');
    newsButton = Selector('[name="newsletter"]');
    createAccountButton = Selector('[name="create_account"]');
}