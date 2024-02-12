import { Component } from '@angular/core';
import { ProjectAshokChandgudeDatasourceService } from './project-ashok-chandgude-datasource.service';

@Component({
	selector: 'app-project-ashok-chandgude',
	templateUrl: './project-ashok-chandgude.component.html',
	styleUrls: ['./project-ashok-chandgude.component.scss']
})
export class ProjectAshokChandgudeComponent {
	projectAshokChandgudeData!: any;

	constructor(
		private projectAshokChandgudeDatasourceService: ProjectAshokChandgudeDatasourceService
	) {
		this.projectAshokChandgudeData = projectAshokChandgudeDatasourceService.getProjectAshokChandgudeDatasourceService();
	}
}
