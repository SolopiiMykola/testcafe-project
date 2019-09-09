import {ClientFunction, Selector} from 'testcafe';
import {isVisible, wait, waitForElementToBeVisible, waitForElementToExist} from "../expected-condition-tc";

const successMsg = 'You are now logged in as My User';

fixture `Login page`
    .page `http://ip-5236.sunline.net.ua:38015/`;

test('Wait test', async t => {
    //Wait Mechanism for Actions
    // TestCafe automatically waits for the target element to become visible when an action is executed. default(10000)
    await t
        .wait(500)
        // Waits for 'class="account dropdown"' to appear in the DOM.
        .click('[class="account dropdown"]')
        .typeText('[placeholder="Email Address"]', 'solopiy1@i.ua')
        .typeText('[placeholder="Password"]', 'password');
    // Wait Mechanism for Selectors
    // When evaluating a selector, TestCafe automatically waits for the element to appear in the DOM.
    // You can additionally require that TestCafe should wait for an element to become visible.
    // Use the visibilityCheck selector option for this.
    const loginButton = await Selector('[name="login"]', { visibilityCheck: true });
   await t.click(loginButton);
    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);

    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('')
        // When an action triggers a redirect, TestCafe automatically waits for the server to respond.
        // The test is resumed if the server does not respond within 15 seconds.
        .navigateTo('http://ip-5236.sunline.net.ua:38015/create_account')
});

test.only('Second Wait test', async t => {
    await t
        .click('[class="account dropdown"]')
        .typeText('[placeholder="Email Address"]', 'solopiy1@i.ua')
        .typeText('[placeholder="Password"]', 'password');
    const loginButton = await Selector('[name="login"]', { visibilityCheck: true });
    // Use custom condition
    await waitForElementToExist(loginButton, 5050, false);
    await waitForElementToBeVisible(loginButton);
    await t.click(loginButton);
    const expectedText = await Selector('.alert.alert-success').innerText;
    const expectedPageUrl = ClientFunction(() => window.location.href);

    await t
        .expect(expectedText.replace(/[^A-Za-z0-9]/g, ' ').trim()).eql(successMsg)
        .expect(expectedPageUrl()).contains('')
});
