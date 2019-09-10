import * as faker from "faker";
import {ClientFunction, t} from "testcafe";
import RegistrationPage from "../../pages/registration-page";

fixture `Registration page`
    .page(RegistrationPage.url);

test('Register user via js', async () => {
    const email = faker.internet.email();

    const registerUser = ClientFunction((email1) => {
        // @ts-ignore
        document.querySelector('input[name="firstname"]').value = "first";
        // @ts-ignore
        document.querySelector('input[name="lastname"]').value = "last";
        // @ts-ignore
        document.querySelector('[name="customer_form"] [name="email"]').value = email1;
        // @ts-ignore
        document.querySelector('[name="customer_form"] [name="password"]').value = "password";
        // @ts-ignore
        document.querySelector('[name="customer_form"] [name="confirmed_password"]').value = "password";
        // @ts-ignore
        document.querySelector('[name="newsletter"]').click();
        // @ts-ignore
        document.querySelector('[name="create_account"]').click();
    });
    await registerUser(email);
    await t.wait(2000)
});