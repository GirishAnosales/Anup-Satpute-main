import { Component } from '@angular/core';

@Component({
  selector: 'app-form-submit-successfully',
  templateUrl: './form-submit-successfully.component.html',
  styleUrls: ['./form-submit-successfully.component.scss']
})
export class FormSubmitSuccessfullyComponent {
  onClick() {
    window.location.reload();
  }
}
