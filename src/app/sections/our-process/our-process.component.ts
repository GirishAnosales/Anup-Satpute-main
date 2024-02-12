import { Component } from '@angular/core';

@Component({
	selector: 'app-our-process',
	templateUrl: './our-process.component.html',
	styleUrls: ['./our-process.component.scss']
})
export class OurProcessComponent {

	protected ourProcess = [
		{
			title: "BRIEFING",
			content: "We start by scheduling an in- depth consultation with our clients to understand their objectives, preferences and budget.",
			iconUrl: "../../assets/content/home/our-process/breifing.jpg",
		},
		{
			title: "DESIGN",
			content: "We develop a design concept that aligns with the client's vision, considering elements such as colour schemes, styles, and mood boards. This concept serves as the foundation for the project's direction.",
			iconUrl: "../../assets/content/home/our-process/design.jpg",
		},
		{
			title: "EXECUTION",
			content: "We take pride in our ability to seamlessly bridge the gap between design and construction, turning your ideas into reality.",
			iconUrl: "../../assets/content/home/our-process/execution.jpg",
		},
		{
			title: "HANDOVER",
			content: "We oversee the final touches, ensuring every detail aligns with the approved design. The completed interior is handed over to the client, who can now enjoy their transformed space.",
			iconUrl: "../../assets/content/home/our-process/handover.jpg",
		},
	]
}
