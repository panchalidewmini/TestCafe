import { Selector, t } from "testcafe";

export default class TapOnBack{
	public backBtn: Selector;
    
    constructor(){
        this.backBtn = Selector('#back-to-products');
    }

    async backToProductList(){
        await t
        .click(this.backBtn)
    }
}