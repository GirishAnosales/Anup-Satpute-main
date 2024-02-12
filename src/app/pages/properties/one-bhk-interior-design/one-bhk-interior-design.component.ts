import { Component, Input } from '@angular/core';
import { OneBhkInteriorDesignService } from './one-bhk-interior-design.service';
import { fadeInUp } from 'src/app/animations/animations.service';
import { Package } from 'src/app/interfaces/package';

@Component({
	selector: 'app-one-bhk-interior-design',
	templateUrl: './one-bhk-interior-design.component.html',
	styleUrls: ['./one-bhk-interior-design.component.scss'],
	animations: [fadeInUp]
})
export class OneBhkInteriorDesignComponent {
	packagesData: Package[] = [
		{ name: 'Silver', price: 'Rs. 5,00,000' },
		{ name: 'Gold', price: 'Rs. 7,00,000' },
		{ name: 'Platinum', price: 'Rs. 10,00,000' }
	];
}
