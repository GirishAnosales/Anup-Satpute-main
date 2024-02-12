import { Component } from '@angular/core';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

	tc = [
		'In case of project cancellation after 50% payment, we are unable to refund any money.',
		'Delays in making a payment at any stage can cause a delay in the project completion. AnupLifestyle is not liable for any such delay.',
	]

}
