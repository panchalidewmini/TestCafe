import { Selector, t } from "testcafe";

export default class YourInformationPage{
	public firstName: Selector;
    public lastName: Selector;
    public zipOrPostalCode: Selector;
    
    constructor(){
        this.firstName = Selector('#first-name');
        this.lastName = Selector('#last-name');
        this.zipOrPostalCode = Selector('#postal-code');
    }

    async setInformations(firstname: string,lastname: string,zipcode: string){
        await t
        .typeText(this.firstName, firstname)
        .typeText(this.lastName, lastname)
        .typeText(this.zipOrPostalCode, zipcode)
    }
}