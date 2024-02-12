import { Component } from '@angular/core';

@Component({
	selector: 'app-cancellations',
	templateUrl: './cancellations.component.html',
	styleUrls: ['./cancellations.component.scss']
})
export class CancellationsComponent {

	cancellingProject = [
		'ANUPLIFESTYLE will offer a refund to the tune of half of your booking amount in form of furniture/service element if you decide to cancel your project after paying the booking amount of 10% of project value.',
		'You can cancel your project at any time between booking us and placing your final order between 10% and 50% payment.',
		'Please take note: No refunds can be aligned if you cancel your project after 50% payment. However, we would like to get a chance to redress your grievances, if any, in order to help you change your mind.',
		'Tell us how we can serve you better by writing to www.AnupLifestyle.com or speaking directly to your project incharge team.',
	]
}
