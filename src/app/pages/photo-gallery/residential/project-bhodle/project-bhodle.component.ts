import { Component } from '@angular/core';
import { ProjectBhodleDatasourceService } from './project-bhodle-datasource.service';

@Component({
	selector: 'app-project-bhodle',
	templateUrl: './project-bhodle.component.html',
	styleUrls: ['./project-bhodle.component.scss']
})
export class ProjectBhodleComponent {
	projectBhodleData!: any;

	constructor(
		private projectBhodleDatasourceService: ProjectBhodleDatasourceService
	) {
		this.projectBhodleData = projectBhodleDatasourceService.getProjectBhodleDatasourceService();
	}
}
