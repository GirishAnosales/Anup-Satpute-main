import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjectBhodleDatasourceService } from '../../residential/project-bhodle/project-bhodle-datasource.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel-bhodle',
	templateUrl: './carousel-bhodle.component.html',
	styleUrls: ['./carousel-bhodle.component.scss']
})
export class CarouselBhodleComponent implements AfterViewInit {
	@ViewChild('carouselBhodle') carouselBhodle!: NgbCarousel;
	projectBhodleData!: any;

	constructor(
		private projectBhodleDatasourceService: ProjectBhodleDatasourceService
	) {
		this.projectBhodleData = projectBhodleDatasourceService.getProjectBhodleDatasourceService();
	}

	ngAfterViewInit() {
		this.carouselBhodle.pause();
	}	

	onClick() {
		window.scrollTo(0, 0);
	}
}
