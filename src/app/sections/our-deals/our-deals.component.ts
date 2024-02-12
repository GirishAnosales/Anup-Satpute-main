import { Component } from '@angular/core';

@Component({
  selector: 'app-our-deals',
  templateUrl: './our-deals.component.html',
  styleUrls: ['./our-deals.component.scss']
})
export class OurDealsComponent {

	propertyImages = [
		{
			imageSrc: "../../assets/content/home/our-deals/ourDeals1.jpg",
			imageAlt: "Premium",
			button: "View",
			routerLinkUrl: "/premium",
		},
		{
			imageSrc: "../../assets/content/home/our-deals/ourDeals2.jpg",
			imageAlt: "Modular",
			button: "Packages",
			routerLinkUrl: "/modular",
		},
	]

	onClick(){
		window.scrollTo(0,0);
	}
}
