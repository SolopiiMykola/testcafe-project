import RegistrationPage from "../pages/registration-page";
import * as faker from "faker";

fixture `Registration page`
    .page(RegistrationPage.url);

test('Promise tests',  t => {
   return t.typeText('input[name="firstname"]', faker.name.firstName())
        .then(() => {
            return t.typeText('input[name="lastname"]', faker.name.lastName())
        }).then(() => {
            return t.click('.form-control[name="country_code"]')
       }).then(() => {
            return t.typeText('[name="customer_form"] [name="password"]', "password")
       })
});

test('Await tests', async t => {
    await t
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .typeText('[name="customer_form"] [name="password"]', "password")
});

test('async/await error handling', async t => {
    try {
        t
            .typeText('input[name="firstname"]', faker.name.firstName())
            .typeText('input[name="lastname"]', faker.name.lastName())
    }
    catch (error) {
        console.log(error);
    } finally {
        console.log('Close connection')
    }
});
