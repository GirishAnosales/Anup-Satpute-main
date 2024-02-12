import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FormSubmitSuccessfullyComponent } from 'src/app/dialogs/form-submit-successfully/form-submit-successfully.component';

@Component({
	selector: 'app-become-a-partner',
	templateUrl: './become-a-partner.component.html',
	styleUrls: ['./become-a-partner.component.scss']
})
export class BecomeAPartnerComponent {
	form!: FormGroup

	FORMSUBMIT_URL = "https://formsubmit.co/ajax/anuplifestyles@gmail.com";
	TESTING_URL = "https://formsubmit.co/ajax/anosales207@gmail.com";

	constructor(
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
		private matDialog: MatDialog,
	) {
		this.form = this.fb.group({
			fullName: ['', Validators.required],
			profession: ['', Validators.required],
			phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
			email: ['', [Validators.required, Validators.email]],
			message: [''],
		});
	}

	//onSubmit()
	onSubmit() {
		const formData = new FormData();
		formData.append('Full Name: ', this.form.get('fullName')!.value);
		formData.append('Profession: ', this.form.get('profession')!.value);
		formData.append('Phone Number: ', this.form.get('phone')!.value);
		formData.append('Email: ', this.form.get('email')!.value);
		formData.append('Message: ', this.form.get('message')!.value);

		fetch(this.FORMSUBMIT_URL, {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				this.matDialog.open(FormSubmitSuccessfullyComponent);
				// this.openSuccessSnackBar();
			})
			.catch(error => {
				this.openFailureSnackBar();
			});

		console.log("Form Data: ", formData);
	}

	//Successful Snackbar addDoNotSellMyInfoUser() event
	openSuccessSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message sent!', 'Close', config);
	}

	//Failure Snackbar addDoNotSellMyInfoUser() event
	openFailureSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message not sent!', 'Close', config);
	}
}
