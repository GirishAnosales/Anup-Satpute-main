import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjectKimayaGroupsDatasourceService } from '../../commercial/project-kimaya-groups/project-kimaya-groups-datasource.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel-kimaya-groups',
	templateUrl: './carousel-kimaya-groups.component.html',
	styleUrls: ['./carousel-kimaya-groups.component.scss']
})
export class CarouselKimayaGroupsComponent implements AfterViewInit{
	@ViewChild('carouselKimayaGroups') carouselKimayaGroups!: NgbCarousel;
	projectKimayaGroupsData!: any;

	constructor(
		private projectKimayaGroupsDatasourceService: ProjectKimayaGroupsDatasourceService
	) {
		this.projectKimayaGroupsData = projectKimayaGroupsDatasourceService.getProjectKimayaGroupsDatasourceService();
	}

	ngAfterViewInit() {
		this.carouselKimayaGroups.pause();
	}	

	onClick() {
		window.scrollTo(0, 0);
	}
}
