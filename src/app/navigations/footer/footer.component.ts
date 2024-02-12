import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SocialMediaLinksService } from 'src/app/shared/social-media/social-media-links.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	isSmall!: Observable<boolean>
	isMediumLargeXLarge!: Observable<boolean>
	isXSmallScreen = false;
	hidden = false;
	socialMediaLinksServiceData!: any;

	logo = {
		white: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Flogo%2FLogo%20WBG.jpg?alt=media&token=1fd84ad6-9918-417b-a266-f730a9da2c34&_gl=1*z51cnk*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTYzNzMuMzYuMC4w",
		colored: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Flogo%2FLogo%20CBG.jpg?alt=media&token=cde9aa86-daa4-42d4-acf3-9517066f3c58&_gl=1*2x9y9y*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTYzNjIuNDcuMC4w"
	}

	constructor(
		private breakpointObserver: BreakpointObserver,
		private socialMediaLinksService: SocialMediaLinksService,
		) { }

	ngOnInit(): void {
		this.socialMediaLinksServiceData = this.socialMediaLinksService.getSocialMediaLinksService();
		
		this.isSmall = this.breakpointObserver.observe([
			Breakpoints.XSmall
		])
			.pipe(
				map(res => res.matches)
			)

		this.isMediumLargeXLarge = this.breakpointObserver.observe([
			Breakpoints.Medium,
			Breakpoints.Large,
			Breakpoints.XLarge,
		])
			.pipe(
				map(res => res.matches)
			)
	}

	toggleBadgeVisibility() {
		this.hidden = !this.hidden;
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}
}
