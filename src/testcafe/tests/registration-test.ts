import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";
import RegistrationPage, {CustomerDetails} from "../../pages/registration-page";
import {createNewUser} from "../../api/api-methods";

fixture `Registration page`
    .page(RegistrationPage.url)
    .before(async () => {
        const res = await createNewUser();
        console.log("user>>>>>>", res)
    });

test('Registration tests', async t => {

    const email = faker.internet.email();
    const successMsg = 'Your customer account has been created';

    await t
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'UA'))
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', "password")
        .typeText('[name="customer_form"] [name="confirmed_password"]', "password")
        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});

test('All fields test', async t => {

    const email = faker.internet.email();
    const successMsg = 'Your customer account has been created';

    await t
        .typeText('input[name="company"]', faker.company.companySuffix())
        .typeText('input[name="tax_id"]', "NL999999999B99")
        .typeText('input[name="address1"]', faker.address.streetAddress())
        .typeText('input[name="address2"]', faker.address.secondaryAddress())
        .typeText('input[name="postcode"]', faker.address.zipCode("#####"))
        .typeText('input[name="city"]', faker.address.city())
        .typeText('input[name="phone"]', faker.phone.phoneNumberFormat(0))
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'UA'))
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', "password")
        .typeText('[name="customer_form"] [name="confirmed_password"]', "password")
        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});

test('US registration test', async t => {

    const email = faker.internet.email();
    const successMsg = 'Your customer account has been created';

    const randomState = Math.floor(Math.random() * await Selector('[name="zone_code"] option').count);

    await t
        .typeText('input[name="company"]', faker.company.companySuffix())
        .typeText('input[name="tax_id"]', "NL999999999B99")
        .typeText('input[name="phone"]', faker.phone.phoneNumberFormat(0))
        .typeText('input[name="address1"]', faker.address.streetAddress())
        .typeText('input[name="address2"]', faker.address.secondaryAddress())
        .typeText('input[name="postcode"]', faker.address.zipCode("#####"))
        .typeText('input[name="city"]', faker.address.city())
        .typeText('input[name="firstname"]', faker.name.firstName())
        .typeText('input[name="lastname"]', faker.name.lastName())
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'US'))
        .click('.form-control[name="zone_code"]')
        .click(await Selector('[name="zone_code"] option').nth(randomState))
        .typeText('[name="customer_form"] [name="email"]', email)
        .typeText('[name="customer_form"] [name="password"]', "password")
        .typeText('[name="customer_form"] [name="confirmed_password"]', "password")

        .click('[name="newsletter"]')
        .click('[name="create_account"]');

    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);

    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});
