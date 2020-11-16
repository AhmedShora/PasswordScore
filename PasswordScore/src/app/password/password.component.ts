import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  password: string = "";
  isPassword: boolean = false;
  _score_: number = 0;

  upperCase: RegExp = /[A-Z]/g;
  lowerCase: RegExp = /[a-z]/g;
  digits: RegExp = /[0-9]/g;
  specialChars: RegExp = /[!@#$%^&*(),.?":{}|<>]/g;

  n:number ;
  len :number;
  num :number;
  sc :number;
  ucr :number;
  lcr :number;
  nr :number;

  //Count all types of characters
  getUpperLength(): number {
    if (this.password.match(this.upperCase) != null) {
      return this.password.match(this.upperCase).length;
    }
    return 0;
  }
  getLowerLength(): number {
    if (this.password.match(this.lowerCase) != null) {
      return this.password.match(this.lowerCase).length;
    }
    return 0;
  }
  getDigitLength(): number {
    if (this.password.match(this.digits) != null) {
      return this.password.match(this.digits).length;
    }
    return 0;
  }
  getSpecialLength(): number {
    if (this.password.match(this.specialChars) != null) {
      return this.password.match(this.specialChars).length;
    }
    return 0;
  }

  //Check Methods 
  hasUpperCase(): boolean {
    return this.upperCase.test(this.password);
  }
  hasLowerCase(): boolean {
    return this.lowerCase.test(this.password);
  }
  hasDigitChar(): boolean {
    return this.digits.test(this.password);
  }
  hasSpecialChar(): boolean {
    return this.specialChars.test(this.password);
  }

  //password length & isPassword check 
  getPasswordLength(): number {
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

  //AASSDDAADAA =>5 "A is Showed 6 times" 
  upperCaseAccur() {
    let x = this.password.match(this.upperCase);
    if (x != null) {
      var lettersCount = {};
      for (let i = 0; i < x.length; i++) {
        if (lettersCount[x[i]] == undefined) {
          lettersCount[x[i]] = 0;
        }
        else {
          lettersCount[x[i]] = lettersCount[x[i]] + 1;
        }
      }
      let arr: number[] = [];
      for (var i in lettersCount) {
        arr.push(lettersCount[i])
      }
      return Math.max(...arr);
    }
    return 0;

  }
  //aassaadd =>3
  lowerCaseAccur() {
    let x = this.password.match(this.lowerCase);
    if (x != null) {
      var lettersCount = {};
      for (let i = 0; i < x.length; i++) {
        if (lettersCount[x[i]] == undefined) {
          lettersCount[x[i]] = 0;
        }
        else {
          lettersCount[x[i]] = lettersCount[x[i]] + 1;
        }
      }
      let arr: number[] = [];
      for (var i in lettersCount) {
        arr.push(lettersCount[i])
      }
      return Math.max(...arr);
    }
    return 0;
  }
  //123 =>0 122=>1 12322=>2
  digitAccur() {
    let x = this.password.match(this.digits);
    if (x != null) {
      var lettersCount = {};
      for (let i = 0; i < x.length; i++) {
        if (lettersCount[x[i]] == undefined) {
          lettersCount[x[i]] = 0;
        }
        else {
          lettersCount[x[i]] = lettersCount[x[i]] + 1;
        }
      }
      let arr: number[] = [];
      for (var i in lettersCount) {
        arr.push(lettersCount[i])
      }
      return Math.max(...arr);
    }
    return 0;
  }

  

  /*len = this.getUpperLength();
  num = this.getDigitLength();
  sc = this.getSpecialLength();
  ucr = this.upperCaseAccur();
  lcr = this.lowerCaseAccur();
  nr = this.digitAccur();*/

  //random values 'I can't do this'
  sl = 2;
  sn = 2;
  ss = 2;

  //Get all Score
  getScore(): number {
    this._score_ = 0;
    if (this.isPassword) {
      this.n = this.password.length;
      this.len = this.getUpperLength();
      this.num = this.getDigitLength();
      this.sc = this.getSpecialLength();
      this.ucr = this.upperCaseAccur();
      this.lcr = this.lowerCaseAccur();
      this.nr = this.digitAccur();
    
     // this._score_ = 0;
      this._score_ = this._score_ + (this.n * 4);

      // this._score_ = this._score_ + ((this.len - this.n) * 2);
      // if (this._score_ < 1) {
      //   this._score_ = this._score_ * -1
      // }
      // if (this._score_ < 1) {
      //   this._score_ = this._score_ + ((this.len - this.n) * 2);
      // }
      // this._score_ = this._score_ + (this.num * 4);
      // this._score_ = this._score_ + (this.sc * 6);

      // this._score_ = this._score_ + (this.n * 2);

      // if (this.hasLowerCase() && this.hasUpperCase() && !this.hasSpecialChar() && !this.hasDigitChar()) {
      //   this._score_ = this._score_ - this.n;
      // }

      // if (!this.hasLowerCase() && !this.hasUpperCase() && !this.hasSpecialChar() && this.hasDigitChar()) {
      //   this._score_ = this._score_ - this.n;
      // }
      // this._score_ = this._score_ - ((this.ucr) * 2);
      // this._score_ = this._score_ - ((this.lcr) * 2);
      // this._score_ = this._score_ - ((this.nr) * 2);
      // this._score_ = this._score_ - (this.sl * 3);
      // this._score_ = this._score_ - (this.sn * 3);
      // this._score_ = this._score_ - (this.ss * 3);

      return this._score_
    }

    return this._score_ = 0;
  }
  constructor() {
    console.log("Lenth of Password: " + this.getPasswordLength() + " Is Password: " + this.isPassword);
    console.log("Num of Upper Case: " + this.getUpperLength() + " Has Upper: " + this.hasUpperCase());
    console.log("Num of Lower Case: " + this.getLowerLength() + " has Lower: " + this.hasLowerCase());
    console.log("Num of Digits: " + this.getDigitLength() + " has Digit: " + this.hasDigitChar());
    console.log("Num of Special Chars: " + this.getSpecialLength() + " has Special: " + this.hasSpecialChar());
    console.log("Num of upper Acc " + this.upperCaseAccur());
    console.log("Num of lower Acc " + this.lowerCaseAccur());
    console.log("Num of digit Acc " + this.digitAccur());

  }
  ngOnInit(): void {
  }

}
