import { Component } from '@angular/core';
import { ProjectAshokSalkeDatasourceService } from './project-ashok-salke-datasource.service';

@Component({
	selector: 'app-project-ashok-salke',
	templateUrl: './project-ashok-salke.component.html',
	styleUrls: ['./project-ashok-salke.component.scss']
})
export class ProjectAshokSalkeComponent {
	projectAshokSalkeData!: any;

	constructor(
		private projectAshokSalkeDatasourceService: ProjectAshokSalkeDatasourceService
	) {
		this.projectAshokSalkeData = projectAshokSalkeDatasourceService.getProjectAshokSalkeDatasourceService();
	}
}
