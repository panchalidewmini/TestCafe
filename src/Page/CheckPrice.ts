import { Selector, t } from "testcafe";
import config from "../config/config";

export default class CheckPrice{
	public itemFleeceJacket: Selector;
    
    constructor(){
        this.itemFleeceJacket = Selector('div.inventory_item_name').withExactText(config.itemFour);   
    }

    async items(){
        await t
        .click(this.itemFleeceJacket)
        .expect(Selector('div.inventory_details_price').innerText).contains(config.itemFourPrice)
    }
}
