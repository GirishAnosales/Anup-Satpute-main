import { Component } from '@angular/core';
import { fadeInUp } from 'src/app/animations/animations.service';
import { TwoBhkInteriorDesignService } from './two-bhk-interior-design.service';
import { Package } from 'src/app/interfaces/package';

@Component({
  selector: 'app-two-bhk-interior-design',
  templateUrl: './two-bhk-interior-design.component.html',
  styleUrls: ['./two-bhk-interior-design.component.scss'],
  animations: [fadeInUp]
})
export class TwoBhkInteriorDesignComponent {
  packagesData: Package[] = [
    { name: 'Silver', price: 'Rs. 7,00,000' },
    { name: 'Gold', price: 'Rs. 10,00,000' },
    { name: 'Platinum', price: 'Rs. 15,00,000' }
  ];
}
