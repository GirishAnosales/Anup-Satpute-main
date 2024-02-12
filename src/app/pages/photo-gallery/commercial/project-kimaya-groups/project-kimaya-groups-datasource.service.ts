import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProjectKimayaGroupsDatasourceService {

	private imagesUrl = {
		landscape: [
			{
				number: 1,
				image: "../../../../../assets/content/photo-gallery/commercial/kimaya-group/landscape/Lasdscape 01.jpg",
			},
			{
				number: 2,
				image: "../../../../../assets/content/photo-gallery/commercial/kimaya-group/landscape/Lasdscape 02.jpg",
			},
			{
				number: 3,
				image: "../../../../../assets/content/photo-gallery/commercial/kimaya-group/landscape/Lasdscape 03.jpg",
			},
			{
				number: 4,
				image: "../../../../../assets/content/photo-gallery/commercial/kimaya-group/landscape/Lasdscape 04.jpg",
			},
			{
				number: 5,
				image: "../../../../../assets/content/photo-gallery/commercial/kimaya-group/landscape/Lasdscape 05.jpg",
			},
			{
				number: 6,
				image: "../../../../../assets/content/photo-gallery/commercial/kimaya-group/landscape/Lasdscape 06.jpg",
			},
			{
				number: 7,
				image: "../../../../../assets/content/photo-gallery/commercial/kimaya-group/landscape/Lasdscape 07.jpg",
			},
		],
		portrait: [
			{
				number: 1,
				image: "../../../../../assets/content/photo-gallery/commercial/kimaya-group/portrait/Portrait 01.jpg",
			},
		]
	}

	constructor() { }

	getProjectKimayaGroupsDatasourceService() {
		return this.imagesUrl;
	}
}
