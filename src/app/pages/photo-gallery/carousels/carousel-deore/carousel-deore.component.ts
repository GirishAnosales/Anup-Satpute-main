import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjectDeoreDatasourceService } from '../../residential/project-deore/project-deore-datasource.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel-deore',
	templateUrl: './carousel-deore.component.html',
	styleUrls: ['./carousel-deore.component.scss']
})
export class CarouselDeoreComponent implements AfterViewInit{
	@ViewChild('carouselDeore') carouselDeore!: NgbCarousel;
	projectDeoreData!: any;

	constructor(
		private projectDeoreDatasourceService: ProjectDeoreDatasourceService
	) {
		this.projectDeoreData = projectDeoreDatasourceService.getProjectDeoreDatasourceService();
	}

	ngAfterViewInit() {
		this.carouselDeore.pause();
	}	

	onClick() {
		window.scrollTo(0, 0);
	}
}
