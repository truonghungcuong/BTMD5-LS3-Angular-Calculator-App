import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-calculator-app',
  templateUrl: './angular-calculator-app.component.html',
  styleUrls: ['./angular-calculator-app.component.css']
})
export class AngularCalculatorAppComponent implements OnInit {
  result: number;
  first: number;
  second: number;
  operator = '+';

  calculator() {
    switch (this.operator) {
      case '+':
      default: {
        this.result = this.first + this.second;
        break;
      }
      case '-': {
        this.result = this.first - this.second;
        break;
      }
      case '*': {
        this.result = this.first * this.second;
        break;
      }
      case '/': {
        this.result = this.first / this.second;
        break;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
