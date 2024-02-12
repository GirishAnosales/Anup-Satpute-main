import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormBComponent } from 'src/app/forms/contact-form-b/contact-form-b.component';
import { Package } from 'src/app/interfaces/package';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {
  @Input() packages!: Package[];

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ContactFormBComponent);
  }
}
