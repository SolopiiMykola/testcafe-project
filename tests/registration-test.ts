import {ClientFunction, Selector} from 'testcafe';
import * as faker  from "faker";

fixture `Registration page`
    .page `http://ip-5236.sunline.net.ua:38015/create_account`;

test('registration US', async t => {
    const successMsg = 'Your customer account has been created';
    const email = faker.internet.email();
    const randomState = Math.floor(Math.random() * await Selector('[name="zone_code"] option').count);
    await t
        .typeText('input[name="firstname"]', email)
        .typeText('input[name="lastname"]', email)
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'US'))
        .click('.form-control[name="zone_code"]')
        .click(await Selector('[name="zone_code"] option').nth(randomState))
        .typeText('[name="customer_form"] [name="email"]', email);
    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});

test('registration UA', async t => {
    const successMsg = 'Your customer account has been created';
    const email = faker.internet.email();
    const randomState = Math.floor(Math.random() * await Selector('[name="zone_code"] option').count);
    await t
        .typeText('input[name="firstname"]', 'First Name')
        .typeText('input[name="lastname"]', 'Last Name')
        .click('.form-control[name="country_code"]')
        .click(Selector('option').withAttribute('value', 'US'))
        .click('.form-control[name="zone_code"]')
        .click(await Selector('[name="zone_code"] option').nth(randomState))
        .typeText('[name="customer_form"] [name="email"]', email);
    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('');
});