import { Selector, t } from "testcafe";
import config from "../config/config";

export default class ClickCartIcon{
	public cartIcon: Selector;
    public yourCartHeading: Selector;
    
    constructor(){
        this.cartIcon = Selector('a.shopping_cart_link');
        this.yourCartHeading = Selector('span.title');
    }

    async clickOnCart(){
        await t
        .click(this.cartIcon)
        .expect(this.yourCartHeading.innerText).contains(config.headingoftheCartPage)
    }
}