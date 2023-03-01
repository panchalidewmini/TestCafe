import { Selector, t } from "testcafe";

export default class ContinueButton{
	public continueBtn: Selector;
    
    constructor(){
        this.continueBtn = Selector('#continue');
    }

    async tapOnContinueBtn(){
        await t
        .click(this.continueBtn)
    }
}