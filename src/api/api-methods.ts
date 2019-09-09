import * as request from "request-promise-native";
import * as faker  from "faker";

export async function createNewUser() {
    const regex = /<input type="hidden" name="token" value="(.*)"/gm;
    let tokenHTML = await request.get('http://ip-5236.sunline.net.ua:38015/create_account');
    let a = regex.exec(tokenHTML);
    let token = a[1];
    const email = faker.internet.email();
    const password = "123456";
    let res = await request.post('http://ip-5236.sunline.net.ua:38015/create_account',
        {
            form: {
                company: "",
                tax_id: "",
                firstname: "lol",
                lastname: "lol",
                address1: "",
                address2: "",
                postcode: "",
                city: "",
                country_code: "GB",
                email,
                phone: "",
                password,
                confirmed_password: password,
                create_account: "Create Account"
            }
        });
    console.log(res);
    return {email, password: password};
}