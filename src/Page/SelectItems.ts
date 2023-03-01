import { Selector, t } from "testcafe";

export default class SelectItems{
	public firstItem: Selector;
    public secondItem: Selector;
    
    constructor(){
        this.firstItem = Selector('#add-to-cart-sauce-labs-backpack');
        this.secondItem = Selector('#add-to-cart-sauce-labs-bike-light');
    }

    async chooseItems(){
        await t
        .click(this.firstItem)
        .click(this.secondItem)
    }
}