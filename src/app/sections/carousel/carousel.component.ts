import { Component, Input, OnInit } from '@angular/core';

interface carousalImages {
	imageSrc: string,
	imageAlt: string,
}

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
	@Input() images: carousalImages[] = [];
	@Input() indicators = true;
	@Input() controls = true;
	@Input() autoslide = false;
	@Input() slideInterval = 3000;

	animationState = 'zoomIn';

	selectedIndex = 0;

	currentIndex: number = 0;

	constructor() { }

	ngOnInit(): void {
		if (this.autoslide) {
			this.autoSlideImages();
		}
	}

	autoSlideImages(): void {
		setInterval(() => {
			this.onNextClick();
		}, this.slideInterval);
	}

	selectImage(index: number): void {
		this.selectedIndex = index;
	}

	onPrevClick(): void {
		if (this.selectedIndex === 0) {
			this.selectedIndex = this.images.length - 1;
		} else {
			this.selectedIndex--;
		}
	}

	onNextClick(): void {
		if (this.selectedIndex === this.images.length - 1) {
			this.selectedIndex = 0;
		} else {
			this.selectedIndex++
		}
	}
}
