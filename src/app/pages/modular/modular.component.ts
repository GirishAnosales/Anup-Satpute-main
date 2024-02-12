import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fadeInUp } from 'src/app/animations/animations.service';
import { ContactFormBComponent } from 'src/app/forms/contact-form-b/contact-form-b.component';
import { Package } from 'src/app/interfaces/package';

@Component({
  selector: 'app-modular',
  templateUrl: './modular.component.html',
  styleUrls: ['./modular.component.scss'],
  animations: [fadeInUp]
})
export class ModularComponent {
  
  packagesData1: Package[] = [
    { name: 'Silver', price: 'Rs. 5,00,000' },
    { name: 'Gold', price: 'Rs. 7,00,000' },
    { name: 'Platinum', price: 'Rs. 10,00,000' }
  ];

  packagesData2: Package[] = [
    { name: 'Silver', price: 'Rs. 7,00,000' },
    { name: 'Gold', price: 'Rs. 10,00,000' },
    { name: 'Platinum', price: 'Rs. 15,00,000' }
  ];

  packagesData3: Package[] = [
		{ name: 'Silver', price: 'Rs. 15,00,000' },
		{ name: 'Gold', price: 'Rs. 20,00,000' },
		{ name: 'Platinum', price: 'Rs. 25,00,000' }
	];

  constructor(
    private dialog: MatDialog,
  ) { }

  onClick() {
    this.dialog.open(ContactFormBComponent);
  }
}
