import { Component } from '@angular/core';
import { ProjectDeoreDatasourceService } from './project-deore-datasource.service';

@Component({
	selector: 'app-project-deore',
	templateUrl: './project-deore.component.html',
	styleUrls: ['./project-deore.component.scss']
})
export class ProjectDeoreComponent {
	projectDeoreData!: any;

	constructor(
		private projectDeoreDatasourceService: ProjectDeoreDatasourceService
	) {
		this.projectDeoreData = projectDeoreDatasourceService.getProjectDeoreDatasourceService();
	}
}
