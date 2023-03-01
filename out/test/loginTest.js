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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPage_1 = __importDefault(require("../Page/LoginPage"));
const testcafe_1 = require("testcafe");
const config_1 = __importDefault(require("../../config/config"));
const loginPage = new LoginPage_1.default();
fixture `Testcafw`
    .page `${config_1.default.url}`;
test(`Login Test`, (t) => __awaiter(void 0, void 0, void 0, function* () {
    const getWindowLocation = (0, testcafe_1.ClientFunction)(() => window.location);
    yield loginPage.login(config_1.default.username, config_1.default.password);
    const currentLocation = yield getWindowLocation();
    yield t
        .expect(currentLocation['href']).eql(`${config_1.default.url}`);
}));
