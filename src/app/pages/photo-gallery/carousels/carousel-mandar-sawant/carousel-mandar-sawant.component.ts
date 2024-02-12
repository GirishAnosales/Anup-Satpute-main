import { Component, ViewChild } from '@angular/core';
import { ProjectMandarSawantDatasourceService } from '../../residential/project-mandar-sawant/project-mandar-sawant-datasource.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel-mandar-sawant',
	templateUrl: './carousel-mandar-sawant.component.html',
	styleUrls: ['./carousel-mandar-sawant.component.scss']
})
export class CarouselMandarSawantComponent {
	@ViewChild('carouselMandarSawant') carouselMandarSawant!: NgbCarousel;
	projectMandarSawantData!: any;

	constructor(
		private projectMandarSawantDatasourceService: ProjectMandarSawantDatasourceService
	) {
		this.projectMandarSawantData = projectMandarSawantDatasourceService.getProjectMandarSawantDatasourceService();
	}

	ngAfterViewInit() {
		this.carouselMandarSawant.pause();
	}	

	onClick() {
		window.scrollTo(0, 0);
	}
}
