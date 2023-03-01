import { Selector, t } from "testcafe";

export default class LoginPage{
	public loginLogo: Selector;
	public userName: Selector;
	public password: Selector;
	public loginBtn: Selector;

    constructor(){
        this.loginLogo = Selector('div').withText('Swag Labs');
        this.userName = Selector('#user-name');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login-button');
    }

    async login(userName: string,password: string){
        await t
        .expect(this.loginLogo.exists).ok()
        .typeText(this.userName, userName)
        .typeText(this.password, password)
        .click(this.loginBtn)
    }
}