import { Selector, t } from "testcafe";
import config from "../config/config";

export default class CheckCart{
	public firstItemInCart: Selector;
    public secondItemInCart: Selector;
    
    constructor(){
        this.firstItemInCart = Selector('div.inventory_item_name').withText(config.itemOne);
        this.secondItemInCart = Selector('div.inventory_item_name').withText(config.itemTwo);
    }

    async selectedItems(){
        await t
        .expect(this.firstItemInCart.exists).ok()
        .expect(this.secondItemInCart.exists).ok()
    }
}