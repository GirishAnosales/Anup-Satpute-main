import { Component } from '@angular/core';

@Component({
	selector: 'app-properties-nav',
	templateUrl: './properties-nav.component.html',
	styleUrls: ['./properties-nav.component.scss']
})
export class PropertiesNavComponent {

	propertyImages = [
		{
			imageSrc: "../../../assets/content/our-deals/1-bhk/1 BHK.jpg",
			imageAlt: "1 BHK Interior Design",
			routerLinkUrl: "/properties/1-bhk-interior-design",
		},
		{
			imageSrc: "../../../assets/content/our-deals/1-bhk/1 BHK.jpg",
			imageAlt: "2 BHK Interior Design",
			routerLinkUrl: "/properties/2-bhk-interior-design",
		},
		{
			imageSrc: "../../../assets/content/our-deals/1-bhk/1 BHK.jpg",
			imageAlt: "3 BHK Interior Design",
			routerLinkUrl: "/properties/3-bhk-interior-design",
		},
		{
			imageSrc: "../../../assets/content/our-deals/1-bhk/1 BHK.jpg",
			imageAlt: "Corporate Interior Design",
			routerLinkUrl: "/properties/premium-interiors",
		},
		{
			imageSrc: "../../../assets/content/our-deals/1-bhk/1 BHK.jpg",
			imageAlt: "Premium Interior Design",
			routerLinkUrl: "/properties/corporate-interiors",
		},
	]

	onClick(){
		window.scrollTo(0,0);
	}
}
