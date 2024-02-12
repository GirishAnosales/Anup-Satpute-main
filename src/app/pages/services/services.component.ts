import { Component } from '@angular/core';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

	protected servicesContent = {
		title: 'Services',
		servicesCards: [
			{ number: '01', imageURL: '', text1: 'Full home interiors', text2: 'End to end bespoke services to design your dream home ' },
			{ number: '02', imageURL: '', text1: 'Customized kitchen', text2: 'Seamlessly blending kitchen with your vibe ' },
			{ number: '03', imageURL: '', text1: 'Customized Furniture', text2: 'Custom made furniture designs which reflects your personality' },
			{ number: '04', imageURL: '', text1: 'Furnishing', text2: 'Amp up your adobe with elegant and stylish furnishing carefully curated by us specially for you ' },
			{ number: '05', imageURL: '', text1: 'Renovation', text2: 'Upgrade your loved space and add \'wow\' factor to it ' },
			{ number: '06', imageURL: '', text1: 'Design Solutions', text2: 'Need expert advice? Our team is there to help you with free consultation for every project ' },
		]
	}

	onClick() {
		window.scrollTo(0, 0);
	}
}
