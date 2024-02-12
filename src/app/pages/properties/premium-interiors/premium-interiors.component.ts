import { Component } from '@angular/core';
import { fadeInUp } from 'src/app/animations/animations.service';
import { PremiumInteriorsService } from './premium-interiors.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormBComponent } from 'src/app/forms/contact-form-b/contact-form-b.component';

@Component({
	selector: 'app-premium-interiors',
	templateUrl: './premium-interiors.component.html',
	styleUrls: ['./premium-interiors.component.scss'],
	animations: [fadeInUp]
})
export class PremiumInteriorsComponent {
	premiumInteriorsData!: any;

	constructor(
		private premiumInteriorsService: PremiumInteriorsService,
		private dialog: MatDialog,
	) {
		this.premiumInteriorsData = premiumInteriorsService.getPackagesData();
	}

	onClick() {
		this.dialog.open(ContactFormBComponent);
	}
}
