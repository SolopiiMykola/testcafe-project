import {Selector} from "testcafe";

fixture (`Second fixture`)
    .page `http://ip-5236.sunline.net.ua:38015/`;

// DATAPROVIDER
let dataCollection = [1, 2, 3, 4, 5];
dataCollection.map(data => {
    test(`Test for ${data}`, async () => {
        console.log(`Test number ${data} executed!`)
    })
});