import { Component } from '@angular/core';
import { ProjectBackyardPalmsDatasourceService } from './project-backyard-palms-datasource.service';

@Component({
	selector: 'app-project-backyard-palms',
	templateUrl: './project-backyard-palms.component.html',
	styleUrls: ['./project-backyard-palms.component.scss']
})
export class ProjectBackyardPalmsComponent {
	projectBackyardPalmsData!: any;

	constructor(
		private projectBackyardPalmsDatasourceService: ProjectBackyardPalmsDatasourceService
	) {
		this.projectBackyardPalmsData = projectBackyardPalmsDatasourceService.getProjectBackyardPalmsDatasourceService();
	}
}
