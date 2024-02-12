import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProjectAshokSalkeDatasourceService {

	private imagesUrl = {
		landscape: [
			{
				number: 1,
				image: "../../../../../../assets/content/photo-gallery/residential/ashok-salke/landscape/Landscape 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/landscape/Landscape 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/landscape/Landscape 3.jpg",
			},
			{
				number: 7,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/landscape/Landscape 7.jpg",
			},
			{
				number: 8,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/landscape/Landscape 8.jpg",
			},
			{
				number: 12,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/landscape/Landscape 12.jpg",
			},
			{
				number: 14,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/landscape/Landscape 14.jpg",
			},
			{
				number: 18,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/landscape/Landscape 18.jpg",
			},
		],
		portrait: [
			{
				number: 1,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/portrait/Portrait 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/portrait/Portrait 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/portrait/Portrait 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../../../assets/content/photo-gallery/residential/ashok-salke/portrait/Portrait 4.jpg",
			},
		]
	}

	constructor() { }

	getProjectAshokSalkeDatasourceService() {
		return this.imagesUrl;
	}
}
