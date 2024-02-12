import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjectBackyardPalmsDatasourceService } from '../../commercial/project-backyard-palms/project-backyard-palms-datasource.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel-backyard-palms',
	templateUrl: './carousel-backyard-palms.component.html',
	styleUrls: ['./carousel-backyard-palms.component.scss']
})
export class CarouselBackyardPalmsComponent implements AfterViewInit{
	@ViewChild('carouselBackyardPalms') carouselBackyardPalms!: NgbCarousel;
	projectBackyardPalmsData!: any;

	constructor(
		private projectBackyardPalmsDatasourceService: ProjectBackyardPalmsDatasourceService
	) {
		this.projectBackyardPalmsData = projectBackyardPalmsDatasourceService.getProjectBackyardPalmsDatasourceService();
	}

	ngAfterViewInit() {
		this.carouselBackyardPalms.pause();
	}	

	onClick() {
		window.scrollTo(0, 0);
	}
}
