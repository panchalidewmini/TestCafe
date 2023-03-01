"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testcafe_1 = require("testcafe");
class LoginPage {
    constructor() {
        this.loginLogo = (0, testcafe_1.Selector)('div').withText('Swag Labs');
        this.userName = (0, testcafe_1.Selector)('#user-name');
        this.password = (0, testcafe_1.Selector)('#password');
        this.loginBtn = (0, testcafe_1.Selector)('#login-button');
    }
    login(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield testcafe_1.t
                .expect(this.loginLogo).ok()
                .typeText(this.userName, userName)
                .typeText(this.password, password)
                .click(this.loginBtn);
        });
    }
}
exports.default = LoginPage;
