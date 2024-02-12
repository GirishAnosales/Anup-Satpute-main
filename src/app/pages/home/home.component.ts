import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
	isAndroidDevice: boolean = false;

	images = [
		{
			imageSrc: "../../../assets/content/home/carousel/Carousel 1.jpg",
			imageAlt: "Carousal Image",
		},
		{
			imageSrc: "../../../assets/content/home/carousel/Carousel 2.jpg",
			imageAlt: "Carousal Image",
		},
		{
			imageSrc: "../../../assets/content/home/carousel/Carousel 4.jpg",
			imageAlt: "Carousal Image",
		},
	]

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	@HostListener('window:scroll', ['$event'])
	onScroll(event: Event): void {
		const scrollY = window.scrollY || window.scrollY;
		this.renderer.setStyle(this.el.nativeElement, 'background-position', 'center ' + -scrollY * 0.5 + 'px');
	}

	ngOnInit(): void {
		// Check for Android user agent
		if (/Android/.test(navigator.userAgent)) {
			this.isAndroidDevice = true;
			console.log("Android Device: ",this.isAndroidDevice);
		}

		// Set the appropriate class based on the device type
		if (this.isAndroidDevice) {
			this.renderer.addClass(this.el.nativeElement, 'parallax-bg-fixed');
		} else {
			this.renderer.addClass(this.el.nativeElement, 'parallax-bg-scroll');
		}
	}
}
