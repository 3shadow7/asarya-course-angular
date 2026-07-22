import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  // name = 'Elias Ozzy';

  data = {
    name: 'Elias Ozzy',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
    date: new Date(),
  }

  isActive = false;
  classes = 'd-flex';


  showAlert(status: boolean) {
    this.isActive = status;
  }
}
