import {Selector} from "testcafe";
import {wait} from "../expected-condition-tc";

let suite = fixture;

export enum Meta {
    REGRESSION = 'Regression'
}

fixture.meta({type: Meta.REGRESSION, createdBy: 'Solopii'}) (`Test page`)
    .before(async () => {

    console.log("Before all >>>>>>")

}).beforeEach(async t => {

    await t.wait(111)
    console.log("Before each >>>>>>")

}).after(async () => {

    console.log("After All >>>>>>")

}).afterEach(async t => {

    console.log("After each >>>>>>")

}).page `http://ip-5236.sunline.net.ua:38015/create_account`;

test.only.before(async t => {
    console.log("Test Before all >>>>>>")

})

('First test', async t => {

    console.log("Run First Test >>>>>>")

});

test.after(async () => {

    console.log("Second Test After all >>>>>>")

}).before(async () => {

    console.log("Second Test Before all >>>>>>")

}).page(`http://ip-5236.sunline.net.ua:38015`)
('Second test', async t => {

    console.log("Run Second Test >>>>>>")

});

fixture

('Second fixture').page(`http://ip-5236.sunline.net.ua:38015/create_account`);

test("lol", async t => {

});
