import { Selector, t } from "testcafe";
import config from "../config/config";

export default class CheckOutButton{
	public checkoutBtn: Selector;
    public yourInformationHeading: SelectorAPI;
    
    constructor(){
        this.checkoutBtn = Selector('#checkout');
        this.yourInformationHeading = Selector('span.title');
    }

    async tapOnCheckOutBtn(){
        await t
        .click(this.checkoutBtn)
        .expect(this.yourInformationHeading.innerText).contains(config.headingoftheCheckoutPage)
    }
}