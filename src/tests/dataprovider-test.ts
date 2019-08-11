import {Selector} from "testcafe";

fixture (`Second fixture`)
    .page `http://ip-5236.sunline.net.ua:38015/`;

// DATAPROVIDER
let firstName = [1, 2];
let lastName = [1, 2, 3, 4, 5];

firstName.forEach(firstDate => {
    lastName.forEach(data => {
        console.log(`First Date ${firstDate} number`);
        test(`Test for ${data}`, async () => {
            console.log(`Test number ${data} executed!`)
        })
    });
})