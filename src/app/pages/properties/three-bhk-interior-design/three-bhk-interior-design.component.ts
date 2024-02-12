import { Component } from '@angular/core';
import { fadeInUp } from 'src/app/animations/animations.service';
import { ThreeBhkInteriorDesignService } from './three-bhk-interior-design.service';
import { Package } from 'src/app/interfaces/package';

@Component({
	selector: 'app-three-bhk-interior-design',
	templateUrl: './three-bhk-interior-design.component.html',
	styleUrls: ['./three-bhk-interior-design.component.scss'],
	animations: [fadeInUp]
})
export class ThreeBhkInteriorDesignComponent {
	packagesData: Package[] = [
		{ name: 'Silver', price: 'Rs. 15,00,000' },
		{ name: 'Gold', price: 'Rs. 20,00,000' },
		{ name: 'Platinum', price: 'Rs. 25,00,000' }
	];
}
