import { Component } from '@angular/core';
import { ProjectMandarSawantDatasourceService } from './project-mandar-sawant-datasource.service';

@Component({
	selector: 'app-project-mandar-sawant',
	templateUrl: './project-mandar-sawant.component.html',
	styleUrls: ['./project-mandar-sawant.component.scss']
})
export class ProjectMandarSawantComponent {
	projectMandarSawantData!: any;

	constructor(
		private projectMandarSawantDatasourceService: ProjectMandarSawantDatasourceService
	) {
		this.projectMandarSawantData = projectMandarSawantDatasourceService.getProjectMandarSawantDatasourceService();
	}
}
