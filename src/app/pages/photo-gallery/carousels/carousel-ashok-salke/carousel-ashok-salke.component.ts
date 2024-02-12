import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjectAshokSalkeDatasourceService } from '../../residential/project-ashok-salke/project-ashok-salke-datasource.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel-ashok-salke',
	templateUrl: './carousel-ashok-salke.component.html',
	styleUrls: ['./carousel-ashok-salke.component.scss']
})
export class CarouselAshokSalkeComponent implements AfterViewInit {
	@ViewChild('carouselAshokSalke') carouselAshokSalke!: NgbCarousel;
	projectAshokSalkeData!: any;

	constructor(
		private projectAshokSalkeDatasourceService: ProjectAshokSalkeDatasourceService
	) {
		this.projectAshokSalkeData = projectAshokSalkeDatasourceService.getProjectAshokSalkeDatasourceService();
	}

	ngAfterViewInit() {
		this.carouselAshokSalke.pause();
	}

	onClick() {
		window.scrollTo(0, 0);
	}
}
