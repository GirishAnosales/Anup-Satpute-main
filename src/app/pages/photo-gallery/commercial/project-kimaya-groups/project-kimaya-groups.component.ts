import { Component } from '@angular/core';
import { ProjectKimayaGroupsDatasourceService } from './project-kimaya-groups-datasource.service';

@Component({
	selector: 'app-project-kimaya-groups',
	templateUrl: './project-kimaya-groups.component.html',
	styleUrls: ['./project-kimaya-groups.component.scss']
})
export class ProjectKimayaGroupsComponent {
	projectKimayaGroupsData!: any;

	constructor(
		private projectKimayaGroupsDatasourceService: ProjectKimayaGroupsDatasourceService
	) {
		this.projectKimayaGroupsData = projectKimayaGroupsDatasourceService.getProjectKimayaGroupsDatasourceService();
	}
}
