import {ClientFunction, Selector} from 'testcafe';
import {equals, truthy} from "../assertion/assertion-ts";

const successMsg = 'You are now logged in as My User';

fixture `Login page`
    .page `http://ip-5236.sunline.net.ua:38015/`;

test('Assertion test', async t => {
    await t
        .click('[class="account dropdown"]')
        .typeText('[placeholder="Email Address"]', 'solopiy1@i.ua')
        .typeText('[placeholder="Password"]', 'password');
    const isLoginButtonVisible = await Selector('[name="login"]').visible;
    // Use custom assertion
    await truthy(isLoginButtonVisible);
    await t.click('[name="login"]');
    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);
    // Use custom assertion
    await equals(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim(), successMsg, "Lol");
    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('')
});