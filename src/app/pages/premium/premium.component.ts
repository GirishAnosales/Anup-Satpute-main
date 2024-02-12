import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fadeInUp } from 'src/app/animations/animations.service';
import { ContactFormBComponent } from 'src/app/forms/contact-form-b/contact-form-b.component';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss'],
  animations: [fadeInUp]
})
export class PremiumComponent {

  constructor(
    private dialog: MatDialog,
  ) { }

  onClick() {
    this.dialog.open(ContactFormBComponent);
  }
}
