import {Selector} from "testcafe";

let suite = fixture;

suite (`Test page`)
    .before(async () => {

    console.log("Before all >>>>>>")

}).beforeEach(async () => {

    console.log("Before each >>>>>>")

}).after(async () => {

    console.log("After All >>>>>>")

}).afterEach(async () => {

    console.log("After each >>>>>>")

}).page `http://ip-5236.sunline.net.ua:38015/create_account`;

test.before(async () => {
    console.log("Test Before all >>>>>>")

})

('First test', async t => {

    await t.wait(3000);
    console.log("Run First Test >>>>>>")

});

test.after(async () => {

    console.log("Second Test After all >>>>>>")

}).before(async () => {

    console.log("Second Test Before all >>>>>>")

}).page(`http://ip-5236.sunline.net.ua:38015`)
('Second test', async t => {

    await t.wait(3000);
    console.log("Run Second Test >>>>>>")

});
