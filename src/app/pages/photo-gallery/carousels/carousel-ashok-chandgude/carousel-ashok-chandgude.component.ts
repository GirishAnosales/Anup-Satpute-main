import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProjectAshokChandgudeDatasourceService } from '../../residential/project-ashok-chandgude/project-ashok-chandgude-datasource.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel-ashok-chandgude',
	templateUrl: './carousel-ashok-chandgude.component.html',
	styleUrls: ['./carousel-ashok-chandgude.component.scss']
})
export class CarouselAshokChandgudeComponent implements AfterViewInit {
	@ViewChild('carouselAshokChandgude') carouselAshokChandgude!: NgbCarousel;
	projectAshokChandgudeData!: any;
	
	constructor(
		private projectAshokChandgudeDatasourceService: ProjectAshokChandgudeDatasourceService
	) {
		this.projectAshokChandgudeData = projectAshokChandgudeDatasourceService.getProjectAshokChandgudeDatasourceService();
	}

	ngAfterViewInit() {
		this.carouselAshokChandgude.pause();
	}	
	
	onClick() {
		window.scrollTo(0, 0);
	}
}
