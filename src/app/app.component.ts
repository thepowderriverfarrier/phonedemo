import { NgxPaginationModule } from 'ngx-pagination';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mask: any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  length = '';
  phoneNumber = '(###) ###-####';
  phoneArray = [];
  contString = '';
  // counter = 0;



  listPhoneNumber(event) {
    this.phoneNumber = event.target.value;
    length = this.phoneArray.push(this.phoneNumber);

    this.contString = (event.target.value).replace(/[0-9]$/, '');
    event.target.value = this.contString;

    // ++this.counter;
    //  if (this.counter === 10) {
    //  this.phoneNumber = '(###) ###-###';
    //  alert('Please enter a completely new phone number ...');
    // }

  }

  clearText(event) {
    this.phoneArray = [];
    this.phoneNumber = '(###) ###-####';
  }

}

