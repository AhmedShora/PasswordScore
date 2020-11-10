import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Password Score';
        this.password = 'AAS@6@12';
        this.isPassword = false;
        this.upperCase = /[A-Z]/g;
        this.lowerCase = /[a-z]/g;
        this.digits = /[0-9]/g;
        this.specialChars = /[!@#$%^&*(),.?":{}|<>]/g;
        console.log("Lenth of Password: " + this.getPasswordLength() + " Is Password: " + this.isPassword);
        console.log("Num of Upper Case: " + this.getUpperLength() + " Has Upper: " + this.hasUpperCase());
        console.log("Num of Lower Case: " + this.getLowerLength() + " has Lower: " + this.hasLowerCase());
        console.log("Num of Digits: " + this.getDigitLength() + " has Digit: " + this.hasDigitChar());
        console.log("Num of Special Chars: " + this.getSpecialLength() + " has Special: " + this.hasSpecialChar());
        console.log("Num of Acc " + this.NumOfRepeatedAcc(0));
    }
    //Count all types of characters
    getUpperLength() {
        if (this.password.match(this.upperCase) != null) {
            return this.password.match(this.upperCase).length;
        }
        return 0;
    }
    getLowerLength() {
        if (this.password.match(this.lowerCase) != null) {
            return this.password.match(this.lowerCase).length;
        }
        return 0;
    }
    getDigitLength() {
        if (this.password.match(this.digits) != null) {
            return this.password.match(this.digits).length;
        }
        return 0;
    }
    getSpecialLength() {
        if (this.password.match(this.specialChars) != null) {
            return this.password.match(this.specialChars).length;
        }
        return 0;
    }
    //Check Methods 
    hasUpperCase() {
        return this.upperCase.test(this.password);
    }
    hasLowerCase() {
        return this.lowerCase.test(this.password);
    }
    hasDigitChar() {
        return this.digits.test(this.password);
    }
    hasSpecialChar() {
        return this.specialChars.test(this.password);
    }
    //password check
    getPasswordLength() {
        if (this.password != null) {
            //Should have any 3/4
            if (this.password.length >= 8) {
                if ((this.hasDigitChar() && this.hasUpperCase() && this.hasLowerCase()) ||
                    (this.hasSpecialChar() && this.hasUpperCase() && this.hasLowerCase()) ||
                    (this.hasDigitChar() && this.hasUpperCase() && this.hasSpecialChar()) ||
                    (this.hasDigitChar() && this.hasSpecialChar() && this.hasLowerCase())) {
                    this.isPassword = true;
                }
                return this.password.length;
            }
            this.isPassword = false;
            return this.password.length;
        }
        this.isPassword = false;
        return 0;
    }
    NumOfRepeatedAcc(j) {
        let list = [];
        for (let i = j; i < this.password.length; i++) {
            if (this.password[i].search(this.upperCase) != -1) {
                this.numOfAcc++;
                list.push(this.numOfAcc);
                return Math.max.apply(list);
            }
            else {
                this.NumOfRepeatedAcc(i + 1);
            }
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map