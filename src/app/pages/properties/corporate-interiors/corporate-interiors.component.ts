import { Component } from '@angular/core';
import { fadeInUp } from 'src/app/animations/animations.service';
import { CorporateInteriorsService } from './corporate-interiors.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormBComponent } from 'src/app/forms/contact-form-b/contact-form-b.component';

@Component({
	selector: 'app-corporate-interiors',
	templateUrl: './corporate-interiors.component.html',
	styleUrls: ['./corporate-interiors.component.scss'],
	animations: [fadeInUp]
})
export class CorporateInteriorsComponent {
	corporateInteriorsData!: any;

	constructor(
		private corporateInteriorsService: CorporateInteriorsService,
		private dialog: MatDialog,
	) {
		this.corporateInteriorsData = corporateInteriorsService.getPackagesData();
	}

	onClick() {
		this.dialog.open(ContactFormBComponent);
	}
}
