import { Component } from '@angular/core';

@Component({
	selector: 'app-members',
	templateUrl: './members.component.html',
	styleUrls: ['./members.component.scss']
})
export class MembersComponent {

	protected members = [
		{
			name: "Kimaya Team",
			iconUrl: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Fcontent%2Fhome%2Fmeet-our-members%2FTeam%201.jpg?alt=media&token=58c790a0-f218-4cf5-b851-42fbcd8adc45&_gl=1*8fve2u*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTY4ODEuMjguMC4w",
		},
		{
			name: "Kimaya Team",
			iconUrl: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Fcontent%2Fhome%2Fmeet-our-members%2FTeam%202.jpg?alt=media&token=3897e865-9311-471d-b15a-b3e6db91de64&_gl=1*2fjdvi*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTY5MDEuOC4wLjA.",
		},
	]
}
