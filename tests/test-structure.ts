import {Selector} from "testcafe";

// feature tests
fixture (`First fixture`)
   .page `http://ip-5236.sunline.net.ua:38015/create_account`;

// test is unique verification, not a step
test('test1', async t => {
    console.log("First Test >>>>>>")
});

// test should not depend on previous or next one
test('test2', async () => {
    console.log("Second Test >>>>>>")
});

test('test3', async () => {
    console.log("Third Test >>>>>>")
});

fixture (`Second fixture`)
    .page `http://ip-5236.sunline.net.ua:38015/`;

test('test1', async () => {
    console.log("First Test >>>>>>")
});

