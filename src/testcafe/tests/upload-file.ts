import * as fs from "fs";
import * as path from "path";
import {t} from "testcafe";
import {WebDriverTC} from "../web-driver-tc";

const webDriver = new WebDriverTC();


fixture `Registration page`
    .page('http://the-internet.herokuapp.com/upload');

test.only('File upload test', async () => {
    const fileUploadElement = 'input[id="file-upload"]';
    const files = fs.createReadStream(path.resolve(__dirname, "../avatar.jpg"));
    await t.click(fileUploadElement);
    await webDriver.setTestFileUpload(fileUploadElement, [files.path.toString()]);
    await t.click('[id="file-submit"]');
    await t.wait(5000)
});