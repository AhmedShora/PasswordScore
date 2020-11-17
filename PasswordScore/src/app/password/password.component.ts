import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  password: string = "Abcdmnorts";
  isPassword: boolean = false;
  _score_: number = 0;
  classToApply: string = 'bg-danger';

  part1: number = 0;
  part2: number = 0;
  part3: number = 0;
  part4: number = 0;
  part5: number = 0;



  upperCase: RegExp = /[A-Z]/g;
  lowerCase: RegExp = /[a-z]/g;
  digits: RegExp = /[0-9]/g;
  specialChars: RegExp = /[!@#$%^&*(),+.?":{}|/<>_-]/g;

  hasDigit: boolean = false;
  hasSpecial: boolean = false;
  hasUpper: boolean = false;
  hasLower: boolean = false;

  n: number; //Total length of the password string
  len: number;//number of Upper-Case characters in password
  llen: number;//number of Lower-Case characters in password
  num: number;//number of Numbers in password
  sc: number;//number of Special Characters in password

  ucr: number;//number of repeat occurrences of upper-case letters. (ex MMM, ucr=2)
  lcr: number;//number of repeat occurrences of lower-case letters (ex mmm, lcr=2)
  nr: number;//number of repeat occurrences of numbers

  //random values 'I can't do this'
  sl = 2;//Sequential letters (example AB → sl=0, ABC → sl=1, ABCD → sl = 2, AbCd → sl =2)
  sn = 2;//Sequential numbers (example 12 → sn=0, 123 → sn=1, 5678 → sn = 2)
  ss = 2;//Sequential symbol (example !@ → ss=0, @#$ → ss=1, $%^& → ss=2)

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

  // list: number[] = [1, 2, 3];
  // res1:string;
  // res2:string;
  // seqletters(): number {
  //   let x = 0;
  //   for (let i = 0; i < this.n; i++) {

  //      this.res1= this.password.charAt(i).toLowerCase();
  //      this.res2 = this.password.charAt(i + 1).toLowerCase();
  //var a=(res==res2)

  //     if (this.res1 == this.res2) {
  //       x = x + 1;
  //       this.list.push(5);

  //       console.log(x);

  //     }
  //     else {
  //       x = 0
  //     }
  //   }
  //   console.log(this.list);
  //   return Math.max(...this.list)
  // }
  //password length & isPassword check 
  getPasswordLength(): number {
    if (this.password != null) {
      this.hasDigit = this.hasDigitChar();
      this.hasSpecial = this.hasSpecialChar();
      this.hasUpper = this.hasUpperCase();
      this.hasLower = this.hasLowerCase();
      //Should have any 3/4
      if (this.password.length >= 8) {
        if (
          (this.hasDigit && this.hasSpecial && this.hasLower) ||
          (this.hasUpper && this.hasSpecial && this.hasLower) ||
          (this.hasDigit && this.hasUpper && this.hasLower) ||
          (this.hasDigit && this.hasSpecial && this.hasUpper)) {

          this.isPassword = true;
          return this.password.length;
        }
        this.isPassword = false;
        return this.password.length;
      }
      this.isPassword = false;
      return this.password.length;
    }
    this.isPassword = false;
    return 0;
  }
  //Get all Score
  getScore() {
    this._score_ = 0;

    this.n = this.password.length;
    this.len = this.getUpperLength();
    this.llen = this.getLowerLength();
    this.num = this.getDigitLength();
    this.sc = this.getSpecialLength();
    this.ucr = this.upperCaseAccur();
    this.lcr = this.lowerCaseAccur();
    this.nr = this.digitAccur();


    // this._score_ = 0;
    this._score_ = this._score_ + (this.n * 4);

    this._score_ = this._score_ + ((this.len - this.n) * 2);
    if (this._score_ < 1) {
      this._score_ = this._score_ * -1
    }
    this._score_ = this._score_ + ((this.llen - this.n) * 2);
    if (this._score_ < 1) {
      this._score_ = this._score_ * -1
    }

    this._score_ = this._score_ + (this.num * 4);
    this._score_ = this._score_ + (this.sc * 6);
    this._score_ = this._score_ + (this.n * 2);

    if (this.hasLower && this.hasUpper && !this.hasSpecial && !this.hasDigit) {
      // this._score_=0;
      this._score_ = this._score_ - this.n;
    }

    if (!this.hasLower && !this.hasUpper && !this.hasSpecial && this.hasDigit) {
      this._score_ = this._score_ - this.n;
    }
    this._score_ = this._score_ - ((this.ucr) * 2);
    this._score_ = this._score_ - ((this.lcr) * 2);
    this._score_ = this._score_ - ((this.nr) * 2);

    this._score_ = this._score_ - (this.sl * 3);
    this._score_ = this._score_ - (this.sn * 3);
    this._score_ = this._score_ - (this.ss * 3);

    if (!this.isPassword) {
      this._score_ = 0;
    }
    if (this._score_ <= 0) {
      this._score_ = 0;
    }
    if (this._score_ >= 100) {
      this._score_ = 100;
    }

    if (this._score_ <= 25) {
      this.classToApply = 'bg-danger';

    }
    else if (this._score_ >= 25 && this._score_ <= 75) {
      this.classToApply = 'bg-warning';

    }
    else {
      this.classToApply = 'bg-success';
    }


    if (this._score_ <= 20) {
      this.part1 = this._score_;
      this.part2 = 0;
      this.part3 = 0;
      this.part4 = 0;
      this.part5 = 0;
    }
    else if (this._score_ <= 40 && this._score_ > 20) {
      this.part1 = 20;
      this.part2 = this._score_ - 20;
      this.part3 = 0;
      this.part4 = 0;
      this.part5 = 0;
    }
    else if (this._score_ <= 60 && this._score_ > 40) {
      this.part1 = 20;
      this.part2 = 20;
      this.part3 = this._score_ - 40;
      this.part4 = 0;
      this.part5 = 0;
    }
    else if (this._score_ <= 80 && this._score_ > 60) {
      this.part1 = 20;
      this.part2 = 20;
      this.part3 = 20;
      this.part4 = this._score_ - 60;
      this.part5 = 0;

    }
    else if (this._score_ <= 100 && this._score_ > 80) {
      this.part1 = 20;
      this.part2 = 20;
      this.part3 = 20;
      this.part4 = 20;
      this.part5 = this._score_ - 80;


    }

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
    //console.log("sequential " + this.seqletters());
  
  
  }
  ngOnInit(): void {
  }
  
}



