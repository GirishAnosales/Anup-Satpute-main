import { Component } from '@angular/core';

@Component({
	selector: 'app-why-us',
	templateUrl: './why-us.component.html',
	styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {

	whyUs = [
		{
			title: "45 Days Completion",
			content: "We promise to handover completed project in client's hand within the promised time frame with respect to the project scale. That is:- 45 days for 1BHK, 60 days for 2BHK and 90 days for 3BHK-4BHK premium projects.",
			iconUrl: "../assets/icons/Icons 1.svg",
		},
		{
			title: "18 years + experience",
			content: "AnupLifestyles is a pune based company, we have experience of more than 18 years in construction industry with maximum client satisfaction.",
			iconUrl: "../assets/icons/Icons 2.svg",
		},
		{
			title: "900+ projects",
			content: "AnupLifestyles successfully delivered 900+ projects in last 18 years. We deal with premium turn-key projects and now we are here to provide affordable design solutions through our specially designed packages.",
			iconUrl: "../assets/icons/Icons 3.svg",
		},
		{
			title: "No hidden charges",
			content: "Payment procedure is very much transparent, easy and well organized by AnupLifestyles team.",
			iconUrl: "../assets/icons/Icons 4.svg",
		},
		{
			title: "Experienced architects & designers",
			content: "We don't just provide furniture, we provide complete architectural solutions for your loved space.",
			iconUrl: "../assets/icons/Icons 5.svg",
		},
		{
			title: "Unquestionable quality",
			content: "We are known to deliver supreme quality of work to our clients, our team keeps close check on the quality of work we promise to provide to our client on each step of designing.",
			iconUrl: "../assets/icons/Icons 6.svg",
		},
	]

}
