import LoginPage from "../Page/LoginPage";
import { Selector, ClientFunction} from "testcafe";
import config from "../config/config";
import CheckPrice from "../Page/CheckPrice";
import TapOnBack from "../Page/TapOnBackButton";
import SelectItems from "../Page/SelectItems";
import ClickCartIcon from "../Page/CartIcon";
import CheckCart from "../Page/CheckCart";
import CheckOutButton from "../Page/CheckoutButton";
import YourInformationPage from "../Page/YourInformationPage";
import { faker } from '@faker-js/faker';
import ContinueButton from "../Page/ContinueButton";
import FinishButton from "../Page/FinishButton";

const loginPage = new LoginPage();
const checkPrice = new CheckPrice();
const tapOnBack = new TapOnBack();
const selectItems = new SelectItems();
const clickonCartIcon = new ClickCartIcon();
const checkCart = new CheckCart();
const checkOutBtn = new CheckOutButton();
const yourInfo = new YourInformationPage();
const continueBtn = new ContinueButton();
const finishBtn = new FinishButton();

fixture `Testcafw`
    .page `${config.url}`;

test(`Login Test`,async t => {
    const getWindowLocation = ClientFunction( () => window.location);
    await loginPage.login(config.username,config.password);

    const currentLocation = await getWindowLocation();
    await t
        .expect(currentLocation.href).eql(`${config.inventoryUrl}`);

    await checkPrice.items();
    await tapOnBack.backToProductList();
    await selectItems.chooseItems();
    await clickonCartIcon.clickOnCart();
    await checkCart.selectedItems();
    await checkOutBtn.tapOnCheckOutBtn();
    await yourInfo.setInformations(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode());
    await continueBtn.tapOnContinueBtn();
    await finishBtn.tapOnFinishBtn();
});