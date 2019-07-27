import {Selector} from "testcafe";

let suite = fixture;

fixture (`Test page`)
    .before(async () => {

    console.log("Before all >>>>>>")

}).beforeEach(async t => {

    console.log("Before each >>>>>>")

}).after(async () => {

    console.log("After All >>>>>>")

}).afterEach(async () => {

    console.log("After each >>>>>>")

}).page `http://ip-5236.sunline.net.ua:38015/create_account`;

test.before(async () => {
    console.log("Test Before all >>>>>>")

}).after(async () => {

    console.log("Test after >>>>>>")

})
('First test', async t => {

    await t.wait(3000);
    console.log("Run First Test >>>>>>")

});

test.before(async () => {

    console.log("Second Test Before all >>>>>>")

}).after(async () => {

    console.log("Second Test after >>>>>>")

}).page(`http://ip-5236.sunline.net.ua:38015`)
('Second test', async t => {

    await t.wait(3000);
    console.log("Run Second Test >>>>>>")

});