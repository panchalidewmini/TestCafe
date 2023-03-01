import { Selector, t } from "testcafe";
import config from "../config/config";

export default class FinishButton{
	public finishBtn: Selector;
    public overViewHeading: Selector;
    
    constructor(){
        this.finishBtn = Selector('#finish');
        this.overViewHeading = Selector('span.title');
    }

    async tapOnFinishBtn(){
        await t
        .expect(this.overViewHeading.innerText).contains(config.headingoftheOverviewPage)
        .click(this.finishBtn)  
    }
}